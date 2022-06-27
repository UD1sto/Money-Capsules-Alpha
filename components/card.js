import ReactDOM from 'react-dom'
import React, { useState, useEffect } from "react";















// React component for the front side of the card
class CardFront1 extends React.Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
        <h3 className="title">Transfer faster, pay cheaper</h3>
          <div className='row'>
            <div className='col-xs-6'>
              <img src='https://enterspeed-com.euwest01.umbraco.io/media/rowimplt/speed-matters-because-time-is-money.png' />
            </div>

            <div className='col-xs-6 side-front-content'>
            

              

              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// React component for the back side of the card
class CardBack1 extends React.Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h1>Your transfers faster and cheaper</h1>
          <p>Money Capsules biggest selling point is that, it enables the transfer of unlimited amount of different tokens for the gas cost needed to execute just one token transfer!!
            
            For example:
            Cost of transfering any ammount of matic = x gas
            Cost of transfering any amount Matic plus any amount of other 999 tokens = x gas
            
            This is possible because once tokens are within a capsule, instead of transferring each different token in seperate transactions, the capsule"s ownership is transferred. The tokens within a capsule are its property
             and the capsule is property of the owner, so when someone owns the capsule he also owns all the tokens inside it.
            
            But it gets even better. Within a capsule exist segments and each segment owns different tokens from the other segments. Example segment one owns wBTC and wETH and segment 2 owns wAVAX and wIC.
            Like capsules, segments within them can also change owners. The cost of transferring a segment is cheaper from transferring a capsule and nearly half that of a regular token transaction.
            Also by transferring a segment you got to keep and continue use your capsule! Segments are operating autonomously from the capsules they are housed and a capsule owner can"t use segment controlled assets.

            
            cost of transferring a segment 
            amount of different tokens a segment can hold = ??? unlimited
            
              </p>
          
          
          
        </div>
      </div>
    )
  }
}


// React component for the card (main component)
class Card1 extends React.Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack1 />

          <CardFront1 />
        </div>
      </div>
    )
  }
}

// React component for the front side of the card
class CardFront2 extends React.Component {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
          <h3 className="title">1click crypto onboarding</h3>
            <div className='row'>
              <div className='col-xs-6'>
                <img src='https://solutionsreview.com/enterprise-resource-planning/files/2019/11/The-Top-Benefits-of-Having-a-Two-Tier-ERP-System.jpg' />
              </div>
  
              <div className='col-xs-6 side-front-content'>
              
  
                
  
                
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  // React component for the back side of the card
  class CardBack2 extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <h1>Join any crypto-ecosystem with just one click</h1>
            <p>Be it a game that requires multiple assets for participation, a DeFi yield farming strategy that is too complicated for newcomers to execute, or a gamified NFT collection where
              specific token interactions are required to mint a particular asset, Money Capsules got your back. With our preloaded capsules users can jump into new crypto adventures instantly.
              The best part is that upon mainet release the option to buy preloaded capsules with fiat money will be enabled! Having every barrier of entry removed from the majority of crypto 
              projects is very exciting for us and we are expecting a floack of partnerships on that direction.


            </p>
            
            
            
          </div>
        </div>
      )
    }
  }
  
  
  // React component for the card (main component)
  class Card2 extends React.Component {
    render() {
      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack2 />
  
            <CardFront2 />
          </div>
        </div>
      )
    }
  }

  // React component for the front side of the card
class CardFront3 extends React.Component {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
          <h3 className="title">Completely Bypass MEV</h3>
            <div className='row'>
              <div className='col-xs-6'>
                <img src='https://images.financemagnates.com/images/MEV_id_b7e4c22d-4f37-4362-a59c-d057640675cb_size900.jpg' />
              </div>
  
              <div className='col-xs-6 side-front-content'>
              
  
                
  
                
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  // React component for the back side of the card
  class CardBack3 extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <h1>Info</h1>
            <p>Practising from both miners and researchers is extremely hard when you transfer a capsule"s or segment"s ownership, a </p>
            
            
            
          </div>
        </div>
      )
    }
  }
  
  
  // React component for the card (main component)
  class Card3 extends React.Component {
    render() {
      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack3 />
  
            <CardFront3 />
          </div>
        </div>
      )
    }
  }

  

  // React component for the front side of the card
class CardFront5 extends React.Component {
    render() {
      return(
        <div className='card-side side-front'>
          <div className='container-fluid'>
          <h3 className="title">Be in total control</h3>
            <div className='row'>
              <div className='col-xs-6'>
                <img src='https://images.ctfassets.net/9sy2a0egs6zh/78HoDbPwuWz8M6er6joJdE/c440f3e5d7262a424f13da69a46e958a/wallet-illo.svg' />
              </div>
  
              <div className='col-xs-6 side-front-content'>
              
  
                
  
                
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  // React component for the back side of the card
  class CardBack5 extends React.Component {
    render() {
      return(
        <div className='card-side side-back'>
          <div className='container-fluid'>
            <h1>Your Capsule, your rules</h1>
            <p>Each created capsule is a self custodian wallet, the Money Capsules Protocol has 0 control over your funds and cannot in any way interfere with your capsule.
               To make sure that your funds are secure from outside threats the capsule smart contract defines a strictly structured enviroment, also the funds of individual capsule
               holders are isolated within each capsule and NEVER pooled together.
               
                And although many users in the crypto prefer to have self custodian solutions we understand 
               that there are many others that prefer custodian solutions coupled with goverment regulation, if you are the former worry not, in the next update "regulated capsules" will be realeased!
               Regulated capsules will be able to be overseen from goverment agencies and will pave the way for holding and trading tokenized securities within those capsules,
                of course minting a regulated capsule will ALWAYS be optional.
            </p>
            
            
            
          </div>
        </div>
      )
    }
  }
  
  
  // React component for the card (main component)
  class Card5 extends React.Component {
    render() {
      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack5 />
  
            <CardFront5 />
          </div>
        </div>
      )
    }
  }
  



// Render Card component

if (typeof window === 'object') {
const cardContainer = document.querySelector('.react-card');
//ReactDOM.render(<Card />, cardContainer);
}

export { Card1, CardBack1,  CardFront1, Card2, CardBack2, CardFront2, Card3, CardBack3, CardFront3
,  Card5, CardBack5, CardFront5 };

