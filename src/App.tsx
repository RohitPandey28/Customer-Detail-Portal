import React, { useEffect, useState } from "react";
import CustomerList from "./components/CustomersList";
import CustomerDetails from "./components/CustomersDetail";
import { Customer } from "./types";
import { useCustomers } from "./hooks/useCustomers";
import styles from "./app.module.css";

const App: React.FC = () => {
  const { customers, loading, error } = useCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    if (customers.length > 0) {
      setSelectedCustomer(customers[0]);
    }
  }, [customers]);

  if (loading) return <div className={styles.textCenter}>Loading...</div>;
  if (error) return <div className={styles.textCenter}>Error: {error}</div>;

  return (
    <div>
      <div className={styles.app}>
        <CustomerList
          customers={customers}
          selectedCustomer={selectedCustomer}
          onSelectCustomer={setSelectedCustomer}
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
