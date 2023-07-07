import React from 'react'
import styles from './Business.module.css';


const business ={
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}


function Business() {
    // return (
    // <div className={Styles.name}>

    // <img 
    //     src={business.imageSrc} 
    //     alt={business.name}
    // />  
    // <h3 className="name">{business.name}</h3> 
    // <h4 className="address">{business.address}</h4>
    // <h4 className="city">{business.city}</h4>
    // <h4 className="statePlusZip">{business.state} {business.zipCode}</h4>
    // <h4 className="category">{business.category}</h4>
    // <h4 className="rating">{business.rating}</h4>
    // <h4 className="reviewCount">{business.reviewCount}</h4>

    // </div>)

    return ( 
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
            <img src={business.imageSrc} alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className={styles.BusinessInformation}>
            <div className={styles.BusinessAddress}>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{`${business.state} ${business.zipCode}`}</p>
            </div>
            <div className={styles.BusinessReviews}>
                <h3>{business.category.toUpperCase()}</h3>
                <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
                <p>{`${business.reviewCount} reviews`}</p>
            </div>
            </div>
        </div>
    );



}

export default Business;



  /*
  const Business = () => {
    
  };
  */

  