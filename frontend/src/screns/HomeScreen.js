import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import data from '../data';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
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
          {data.contracts.map((contract) => (
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
