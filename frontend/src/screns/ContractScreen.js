import React from 'react';
import { useParams } from 'react-router-dom';

function ContractScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>Contracte</h1>
      <h3>Contract nr. {slug}</h3>
    </div>
  );
}
export default ContractScreen;
