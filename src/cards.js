import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div>
  
    <Link className='link' to={"/fetchteams"}>GO TO TABLE</Link>
    <section className="hero-section">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />

        <div className="card-grid">
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://i0.wp.com/logotaglines.com/wp-content/uploads/2017/07/Puneri-Paltan-Logo-Tagline-Slogan-Motto-Owner.jpg?fit=640%2C640&ssl=1)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">PUNERI PALTANS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://logotaglines.com/wp-content/uploads/2017/07/Tamil-Thalaivas-Logo.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">TAMIL THALAIVAS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://i.pinimg.com/236x/aa/fd/f2/aafdf215c252dc0f7a82823599c5cc88.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">BENGALURU BULLS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-JBm14iEPXy4cTVirK2kqWhmCMG1zKnqgA&usqp=CAU)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">PATNA PIRATES</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://kabaddibaaz.com/wp-content/uploads/2022/03/telugu-titnas-team-01-1024x624.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">TELUGU TITANS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://assets.thehansindia.com/h-upload/feeds/2019/08/16/206653-mumba.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">U MUMBA</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://i.pinimg.com/474x/f2/8e/0d/f28e0de1f381051592d0b8a73b313d82.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">BENGAL WARRIERS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://s3images.zee5.com/wp-content/uploads/2021/11/vnjfxhgffjhgk20211102120354.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">HARYANA STEELERS</h3>
            </div>
          </a>
        
            
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
