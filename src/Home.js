import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="418651889"
            title="The Lean Startup"
            price={19.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="418654645"
            title="Sennheiser HD 600 Open Back Professional Headphone"
            price={380.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81UrUMCKXDL._AC_UY218_.jpg"
          />
          <Product
            id="8468512"
            title="Fostex T50RP MK3 Professional Studio Headphones, Semi-Open"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81lgEZpHlVL._AC_UY218_.jpg"
          />
          <Product
            id="78478915"
            title="ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR Ready HDMI DisplayPort DVI Graphics Card (DUAL-RTX2060-O6G-EVO)"
            price={279.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81murmTdjAL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="9871456"
            title="Konami Yu-Gi-Oh! TCG: Blazing Vortex Booster Display (24) 1st Edition"
            price={63.45}
            rating={5}
            image="https://m.media-amazon.com/images/I/81HhD2q0IuL._AC_UY218_.jpg"
          />
          <Product
            id="8798486"
            title="ASICS Men's Gel-Kayano 25 Running Shoes"
            price={130.3}
            rating={5}
            image="https://m.media-amazon.com/images/I/41x360f9mVL._AC_UL320_.jpg"
          />
          <Product
            id="897984156"
            title="HIFIMAN SUNDARA Over-ear Full-size Planar Magnetic Headphones with High Fidelity Design Easy to Drive by iPhone /Android Comfortable Headband Open-Back Design Easy Cable Swapping Black"
            price={349.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61eJhLsaV0L._AC_UY218_.jpg"
          />
          <Product
            id="986456465"
            title="Garmin 010-02064-00 Instinct, Rugged Outdoor Watch with GPS, Features Glonass and Galileo, Heart Rate Monitoring and 3-Axis Compass, Graphite"
            price={213.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/6181t0057sL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="354156489"
            title="Osprey Farpoint 40 Men's Travel Backpack"
            price={119.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81stttn7owL._AC_UL320_.jpg"
          />
          <Product
            id="984531456"
            title="Morakniv Eldris Light Duty"
            price={24.2}
            rating={5}
            image="https://m.media-amazon.com/images/I/71glCHJ1UbL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
