import React from 'react'
import styles from './Business.module.css';





function Business(props) {

    return ( 
        <div className={styles.Business}>
            <div className={styles.imageContainer}>
            <img src={props.businessInfo.imageSrc} alt="" />
            </div>
            <h2>{props.name}</h2>
            <div className={styles.BusinessInformation}>
            <div className={styles.BusinessAddress}>
                <p>{props.businessInfo.address}</p>
                <p>{props.businessInfo.city}</p>
                <p>{`${props.businessInfo.state} ${props.businessInfo.zipCode}`}</p>
            </div>
            <div className={styles.BusinessReviews}>
                <h3>{props.businessInfo.category.toUpperCase()}</h3>
                <h3 className={styles.rating}>{`${props.businessInfo.rating} stars`}</h3>
                <p>{`${props.businessInfo.reviewCount} reviews`}</p>
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

  