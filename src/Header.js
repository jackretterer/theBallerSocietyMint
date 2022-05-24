import './Header.css';
import React from 'react';
import twitter from './socials/Twitter.svg';
import discord from './socials/Discord.svg';

export const Header = () => {
    return (
      <body>
        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li><a href="/home">Gallery</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/roadmap">Game Plan</a></li>
              <li><a href="https://twitter.com/BallerSociety_"><img src={twitter} className="social-logo"></img></a></li>
              <li><a href=""><img src={discord} className="social-logo"></img></a></li>
            </ul>           
            <h1 class="logo">THE BALLER SOCIETY</h1>
          </div>
        </nav>
      </body>  
    );
  };