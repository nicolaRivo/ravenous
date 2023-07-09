import React from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

const BusinessList = (props) => {

  const mappedData = props.businessArray.map((data, index) =>
  <Business key={index} businessInfo={data}/>
  ) ;


    return (
  <div className={styles.BusinessList}>
     {mappedData}
  </div>
  );
}





export default BusinessList;

