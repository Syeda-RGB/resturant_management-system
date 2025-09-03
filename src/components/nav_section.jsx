// import React from 'react';
// import CustomNavbar from './CustomNavbar';


// function HeroSection() {
//   return (
//     <div className="hero-section">
        
//       <CustomNavbar />
//       <div className='Hero_img_div'>
//         <img className='Hero_img1' src="src/assets/75_OFF.png" alt="" />
//         <img className='Hero_img2'src="src/assets/Star_1.png" alt="" />
//         <img className='Hero_img' src="src/assets/Hero_img.png" alt="" />
//       </div>
//        <img src="src/assets/Vector_2.png" alt="" />
     
//     </div>
//   );
// }


// export default HeroSection;


import React from 'react';
import CustomNavbar from './CustomNavbar';


function HeroSection() {
  return (
    <section className=" hero-section Hero_img_div">
      
      <CustomNavbar />
<div className="hero-wrap d-flex row">
  {/* LEFT: text area – 40% (≈ 5 columns) */}
  <div className="col-lg-5 col-12 hero-left">
    <div className="reviews-card">
      <div className="stars">
        <span>★ ★ ★ ★ ★</span>
        <span className="divider">|</span>
        <span className="score">4.5</span>
      </div>
      <div className="sub">5K+ Happy Review</div>
    </div>

    <p className="eyebrow">Crispy, Crunchy, Veggie Deliciousness!</p>
    <h1 className="title">
      Burgers That <br /> Love the Earth!
    </h1>

    <div className="cta-row">
      <button className="btn-explore">Explore</button>
      <button className="btn-play" aria-label="How to get order">
        <span className="triangle" />
      </button>
      <span className="how">How to get order...</span>
    </div>
  </div>

  {/* RIGHT: image area – 60% (≈ 7 columns) */}
  <div className="col-lg-7 col-12 hero-right row">
    
    {/* stickers */}
    <div className="col-6 position-relative Hero_res">
      <img className="Hero_img1" src="public/assets/75_OFF.png" alt="this is testing " />
      <img className="Hero_img2" src="src/assets/Star_1.png" alt="" />
       <img className="vector-plate" src="src/assets/Vector_2.png" alt="" />

    </div>
    {/* burger */}
    <div className=" Hero_burger">
      <img className="Hero_img" src="src/assets/Hero_img.png" alt="Burger" />
    </div>
    
  </div>
</div>


   
    </section>
  );
}

export default HeroSection;
