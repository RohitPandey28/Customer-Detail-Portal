import React from 'react';
import { Customer } from '../../types';
import styles from './customersCard.module.css';

interface Props {
  customer: Customer;
  isSelected: boolean;
  onClick: () => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onClick }) => {
  return (
    <div 
      className={`${styles.customerCard} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <h3 className={styles.customerName}>{customer.name}</h3>
      <p className={styles.customerTitle}>{customer.body}</p>
    </div>
  );
};

export default React.memo(CustomerCard);