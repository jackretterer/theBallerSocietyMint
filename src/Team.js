import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { CandyMachineAccount } from './candy-machine';
import { CircularProgress } from '@material-ui/core';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { useEffect, useState, useRef } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  findGatewayToken,
  getGatewayTokenAddressForOwnerAndGatekeeperNetwork,
  onGatewayTokenChange,
  removeAccountChangeListener,
} from '@identity.com/solana-gateway-ts';
import './Team.css';
import React from 'react';
import twitter from './socials/Twitter.svg';
import discord from './socials/Discord.svg';

import Jack from './images/jack.jpg';
import Jorge from './images/jorge.jpg';
import Nyla from './images/nyla.jpg';
import Matt from './images/matt.jpg';
import Charles from './images/charles.png';

import Jack_pfp from './images/pfps/jack-pfp.png';
import Jorge_pfp from './images/pfps/jorge-pfp.png';
import Nyla_pfp from './images/pfps/nyla-pfp.png';
import Matt_pfp from './images/pfps/matt-pfp.png';
import Charles_pfp from './images/pfps/charles-pfp.png';

export const Team = () => {
    return (
      <body>
          <div className="team-title">
            OUR TEAM
          </div>
          <div className="team-description">
            The Baller Society team is...Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>


            {/* <html xmins="http://www.w3.org/1999/xhtml">
            <head>
            <title></title>
            </head>
            
            <body> */}
            <div className="accordion-struct">
            <article class="accordion">
                <section id="acc1">
                    <h2><a href="#acc1">Jack - Lead Dev</a></h2>
                    <p>Jack comes from a software engineering background. He got into crypto in 2014
                         and NFTs in early 2021. He lives, breathes and sleeps crypto. He works for 
                         one of the biggest Crypto/NFT marketplace(Gemini & Nifty Gateway)and is a consultant 
                         for a few blockchain startups.</p>                     
                    <a href="https://twitter.com/JaySn1ce"><img src={twitter} className="twitter_social_logo"></img></a>
                    <img src={Jack} className="pfp"></img>
                </section>
                <section id="acc2">
                    <h2><a href="#acc2">Jorge - Lead Marketing</a></h2>
                    <p>Jorge works in the tech world as an enterprise consultant for some of the biggest 
                        companies you know. Before that, he worked as 
                        a digital marketing lead and was the founder of multiple DTC brands.
                        He is really passionate about building meaningful brands and telling powerful stories.</p>
                    <a href="https://twitter.com/NFTBALLER_"><img src={twitter} className="twitter_social_logo"></img></a>
                    <img src={Jorge} className="pfp"></img>
                </section>
                <section id="acc3">
                    <h2><a href="#acc3">Nyla - Lead Creative</a></h2>
                    <p>Nello is a web2 UX Designer transitioning to web3 as an NFT Artist and creative director. 
                        Currently works at a Fortune 500 company and is passionate about spreading knowledge and 
                        bringing women into the NFT and web3 world. Has experience as a founder & designer in the NFT space.</p>
                    <a href="https://twitter.com/NelloZello"><img src={twitter} className="twitter_social_logo"></img></a>                    
                    <img src={Nyla} className="pfp"></img>
                </section>
                <section id="acc4">
                    <h2><a href="#acc4">Matt - Lead Community</a></h2>
                    <p>Matt is an engineer working in the renewable energy industry. He has a passion for 
                        innovation and climate change. Matt is drawn towards working for the greater good. 
                        From philanthropies to large local organizations, Matt is experienced in bringing 
                        all walks of life together to create communities to achieve the unimaginable.</p>
                    <a href="https://twitter.com/mattysplash1"><img src={twitter} className="twitter_social_logo"></img></a>
                    <img src={Matt} className="pfp"></img>
                </section>
                <section id="acc5">
                    <h2><a href="#acc5">Charles - Lead Artist & Illustrator</a></h2>
                    <p>Charles has over 13 years of experience in design and illustration. He's worked for 
                        several advertising agencies, and has publications in several newspapers. He has 8 children's 
                        books published. He currently owns Segat Studio which was responsible for making some pretty successful 
                        NFT collections.</p>
                    <a href="https://twitter.com/charlessegat"><img src={twitter} className="twitter_social_logo"></img></a>
                    <img src={Charles} className="pfp"></img>
                </section>
            </article>
            </div>
                {/* </body>
            </html> */}

          {/* <div className="team-list">
            <div className="founder-1">
                <header className="founder-title">Jack</header>
                <header className="founder-subtitle">Lead Developer</header>
                <img src={Jack_pfp} className="founder-pfp"></img>
            </div>
            <div className="founder-2">
                <header className="founder-title">Jorge</header>
                <header className="founder-subtitle">Lead Marketing</header>
                <img src={Jorge_pfp} className="founder-pfp"></img>
            </div>
            <div className="founder-3">
                <header className="founder-title">Nyla</header>
                <header className="founder-subtitle">Lead Creative</header>
                <img src={Nyla_pfp} className="founder-pfp"></img>
            </div>
            <div className="founder-4">
                <header className="founder-title">Matt</header>
                <header className="founder-subtitle">Lead Fart Sniffer</header>
                <img src={Matt_pfp} className="founder-pfp"></img>
            </div>
            <div className="founder-5">
                <header className="founder-title">Charles</header>
                <header className="founder-subtitle">Artist & Illustrator</header>
                <img src={Charles_pfp} className="founder-pfp"></img>
            </div>
          </div> */}
      </body>  
    );
  };