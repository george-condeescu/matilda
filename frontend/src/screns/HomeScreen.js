import React, { useEffect, useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, contracts: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomeScreen() {
  const [{ loading, error, contracts }, dispatch] = useReducer(
    logger(reducer),
    {
      loading: true,
      error: '',
      contracts: [],
    }
  );
  //const [contracts, setContracts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/contracte');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }

      //setContracts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Contracte</h1>
      <table id="customers">
        <thead>
          <th>Client</th>
          <th>Categorie</th>
          <th>Numar</th>
          <th>Data inregistrare</th>
          <th>Valoare</th>
          <th>Data start</th>
          <th>Data end</th>
          <th>Descriere</th>
          <th>URL document</th>
          <th>Mod calcul</th>
          <th>-</th>
        </thead>
        <tbody>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            contracts.map((contract) => (
              <tr key={contract.slug}>
                <td>
                  <a href={`pdfs/${contract.urlPdf}`}>
                    <strong>{contract.client}</strong>
                  </a>
                </td>
                <td>{contract.category}</td>
                <td>{contract.numar}</td>
                <td>{contract.data_inregistrare}</td>
                <td>{contract.valoare}</td>
                <td>{contract.data_start}</td>
                <td>{contract.data_end}</td>
                <td>{contract.urlPdf}</td>
                <td>{contract.description}</td>
                <td>{contract.mod_calcul}</td>
                <td>
                  <Link to={`/contract/${contract.slug}`}>
                    {' '}
                    <FontAwesomeIcon icon={faTrash} />
                  </Link>
                  &nbsp;&nbsp;
                  <Link to={`/contract/${contract.slug}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
