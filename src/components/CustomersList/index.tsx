import React from 'react';
import CustomerCard from '../CustomersCard';
import { Customer } from '../../types';
import styles from './customerList.module.css';

interface Props {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<Props> = ({ customers, selectedCustomer, onSelectCustomer }) => {
  return (
    <div className={styles.customerList}>
      {customers.map(customer => (
        <CustomerCard 
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomer?.id === customer.id}
          onClick={() => onSelectCustomer(customer)}
        />
      ))}
    </div>
  );
};

export default React.memo(CustomerList);