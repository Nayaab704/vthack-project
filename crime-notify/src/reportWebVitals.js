const reportWebVitals = onPerfEntry => {

  
  function urlBase64ToUnit8Array(base64String){
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
    
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i=0;i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
  
function determineAppServerKey() {
  var vapidPublicKey = 'BFvtakXM7yz3DeeFYmuG0MyG8_HLKxdDaAEPfcm8Rc8SdQY99s3D-KIUJtmDnc-EyB7m4hOSBmC3Pk_xc-z_rm0';
  return urlBase64ToUnit8Array(vapidPublicKey);
}


  let swUrl = `${process.env.PUBLIC_URL}/sw.js`
  navigator.serviceWorker.register(swUrl).then((response) => { 
  console.warn("response", response) 
  return response.pushManager.getSubscription()
  .then(function(subscription){
    return response.pushManager.subscribe({
      userVisibleOnly:true,
      applicationServerKey:determineAppServerKey()
    })
  })

});
}


export default reportWebVitals;