import React from "react";
import PhotoGrid from "../PhotoGrid";
import { Customer } from "../../types";
import styles from "./customerDetail.module.css";

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  return (
    <div className={styles.customerDetails}>
      <h2 className={styles.customerName}>{customer.name} details here</h2>
      <p className={styles.customerTitle}>{customer.body}</p>
      <PhotoGrid customerId={customer.id} />
    </div>
  );
};

export default CustomerDetails;
