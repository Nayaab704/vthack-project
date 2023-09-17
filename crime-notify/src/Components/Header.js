import '../App.css';
import React from 'react';

function Header() {
  return (
    <>

     
        <nav class="navbar">

          <div class="logo">MUO</div>


          <ul class="nav-links">


            


            <div class="menu">

              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>

              <li class="services">
                <a href="/">Services</a>


                <ul class="dropdown">
                  <li><a href="/">Dropdown 1 </a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>

              </li>

              
              <li><a href="/">Contact Us</a></li>
            </div>
          </ul>
        </nav>

       
      

    </>
  );
}

export default Header;
