import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image"
                src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
            />
            <div className="home__row">
              <Product 
                id={1}
                title="Zero to One new edition: Notes on Start Ups, or How to Build the Future
                by Peter thiel. " 
                price={12} 
                image="https://m.media-amazon.com/images/I/61k5av4Q6HL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}    
              />

              <Product 
                id={2}
                title="Mossad: The Greatest Missions of the Israeli Secret Service Hardcover by Michael Bar-Zohar. " 
                price={10} 
                image="https://m.media-amazon.com/images/I/51yntFZrxQL._SX329_BO1,204,203,200_.jpg"
                rating={4} 
              />

              
              <Product 
                id={3}
                title="Data Structures and Algorithms Made Easy: Data Structure and Algorithmic Puzzles." 
                price={14.99} 
                image="https://m.media-amazon.com/images/I/618TCzhxspL.jpg"
                rating={4} 
              />

              <Product 
                id={4}
                title="System Design Interview - An insider's guide to crack any interview." 
                price={7.99} 
                image="https://m.media-amazon.com/images/I/51xUZItrHJL._AC_UY327_FMwebp_QL65_.jpg"
                rating={3} 
              />
            </div>
            <div className="home__row">

               <Product
                  id={5} 
                  title="Noise ColorFit Pro 4 Alpha Bluetooth Calling Smart Watch with 1.78 AMOLED Display, Tru Sync, 60hz Refresh Rate, instacharge, Gesture Control, Functional 360 Digital Crown (Jet Black)" 
                  price={11.99} 
                  image="https://m.media-amazon.com/images/I/413x7j3Z30L._SX300_SY300_QL70_FMwebp_.jpg"
                  rating={4} 
               />
               <Product
                  id={6} 
                  title="Green Soul® Vienna Premium Leatherette Office Chair, High Back Ergonomic Home Office Executive Chair with Spacious Cushion Seat & Heavy Duty Metal Base (Brown)" 
                  price={99.99} 
                  image="https://m.media-amazon.com/images/I/71uzYX3DZqL._SX679_.jpg"
                  rating={4} 
               />
               <Product 
                  id={7}
                  title="Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens" 
                  price={899.99} 
                  image="https://m.media-amazon.com/images/I/613pf1JTs9L._AC_UL480_QL65_.jpg"
                  rating={3} 
               /> 
    
            </div>
            <div className="home__row">
                

              <Product 
                id={8}
                title="OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)" 
                price={200} 
                image="https://m.media-amazon.com/images/I/41mDAtPMDKL._SX300_SY300_QL70_FMwebp_.jpg"
                rating={3} 
              />

                <Product
                  id={9}
                  title="JBL Tune 760NC, Wireless Over Ear Active Noise Cancellation Headphones with Mic" 
                  price={49.99} 
                  image="https://m.media-amazon.com/images/I/61HXCeozUjL._SX679_.jpg"
                  rating={4} 
                />

                <Product
                  id={10}
                  title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)" 
                  price={100} 
                  image="https://m.media-amazon.com/images/I/41FgiLFNhFL.jpg"
                  rating={4} 
                />
            </div>
            <div className="home__row">
                <Product
                  id={11}
                  title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55A2PSA (Rocky Black)" 
                  price={1199.99} 
                  image="https://m.media-amazon.com/images/I/514ZnXJMXZL._SX300_SY300_QL70_FMwebp_.jpg"
                  rating={4} 
                />
            </div>    
        </div>
    </div>
  );
}

export default Home