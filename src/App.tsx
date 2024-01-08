import { useEffect, useState } from "react";
import { ModuleRenderer } from "./modules/ModuleRenderer";

function getRandomPayload() {
  const payloadInvoiceModule = {
    "moduleType": "invoiceModule",
    "header": 'INVOICE MODULE',
    "columns": ["clientName", "totalAmount", "invoiceStatus"],
    "data": [
      { clientName: 'Client A', totalAmount: 1000, invoiceStatus: 'Paid' },
      { clientName: 'Client B', totalAmount: 1500, invoiceStatus: 'Pending' },
      { clientName: 'Client C', totalAmount: 500, invoiceStatus: 'Paid' },
    ],
    "total": 3000,
    "paid": 1000

  }

  const payloadUserModule = {
    "moduleType": "userModule",
    "header": "USER MODULE",
    "columns": ["id", "name", "roles"],
    "data": [
      { id: '1', name: "bob", roles: ["admin, Dev"] },
      { id: '2', name: "john", roles: ["operations"] },
      { id: '3', name: "mat", roles: ["operations, payments"] },
    ]
  }

  const randomIndex = Math.round(Math.random());

  return randomIndex === 0 ? payloadInvoiceModule : payloadUserModule;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fetchedPayload, setFetchedPayload] = useState(Object);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const randomPayload = getRandomPayload();
        setFetchedPayload(randomPayload);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ModuleRenderer {...fetchedPayload} />
      )}
    </div>
  );
}

export default App;
