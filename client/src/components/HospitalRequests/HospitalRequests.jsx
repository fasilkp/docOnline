import * as React from 'react';
import { Container, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

export default function HospitalRequests() {
  return (
    <div className="admin-home">
      <AdminHeader />
      <div className="admin-main">
        <AdminSidebar page={'hospital request'}/>
        <Container fluid>

        <div className="admin-container">
          <h5>Hospital Requests</h5>
        <Table className='table-main' responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>option</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>
          <RiMore2Fill/>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Thornton</td>
          <td>
          <RiMore2Fill/>
          </td>
        </tr>
      </tbody>
    </Table>

        </div>
        </Container>
      </div>
    </div>
   
  );
}