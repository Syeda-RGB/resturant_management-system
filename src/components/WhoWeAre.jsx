import React from 'react';
import './WhoWeAre.css';
import "@fontsource/poppins"; // Defaults to weight 400 (normal)
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css"; // Medium weight
import "@fontsource/poppins/700.css"; // Bold weight

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
         <h4 className='text-center'>— WHO WE ARE —</h4>
      <div className="content-container d-flex">
        
        <div className="text-section">
         
          <p>
            Community-Focused Initiatives Such As Partnerships With Local Farms Or Environmental Organizations.
          </p>
          <p>
            Social Media Integration For Sharing Photos, Reviews, And Engaging With The Veggie Burger Community.
          </p>
          <hr />
          <p>
            Nutritional Information Provided For Each Menu Item, Catering To Health-Conscious Customers.
          </p>
          <p>
            Wide Range Of Veggie Burger Options Including Classic, Gourmet, And Customizable Choices.
          </p>
          <div className='d-flex Share'>
            <img className='send_img' src="src/assets/send_1.png" alt="" />
              <button className="share-btn">
            
            Share
          </button>
          </div>
        
        </div>

        <div className="image-section">
          <img src="src/assets/Group_24.png" alt="Burger Character" className="burger-img" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
