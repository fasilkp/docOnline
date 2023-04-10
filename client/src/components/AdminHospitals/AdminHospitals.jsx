import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill, RiSearch2Line } from 'react-icons/ri';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Swal from 'sweetalert2'
import { Backdrop, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AdminHospitals() {
  const [hospitalList, setHospitalList] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [load, setLoad] = useState(false)
  const [clicked, setCLicked] = useState(false)
  const [name, setName]=useState("")
  const handleClick = () => {
    setCLicked(!clicked)
  }
  React.useEffect(() => {
    (
      async function () {
        try {
          const { data } = await axios.get("/admin/hospitals?name="+name)
          if (!data.err) {
            setHospitalList(data.hospitals)
          }

        } catch (err) {
          console.log(err)
        }
      }
    )()
  }, [refresh, name])


  return (
    <div className="admin-home">

      <AdminHeader handleClick={handleClick} />
      <div className="admin-main">
        <AdminSidebar page={'hospital'} clicked={clicked} />
        <Container fluid>

          <div className="admin-container">
            <div className="container-header">
              <h5>Hospitals</h5>
              <div className="admin-search-box">
                <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                <button><RiSearch2Line /></button>
              </div>

            </div>
            <Table className='table-main' responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Place</th>
                  <th>Address</th>
                  <th>Mobile</th>
                  <th>
                    {/* option */}
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  hospitalList.map((item, index) => {
                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                      <Link to={"/hospital/"+item._id}>
                        {item.name}
                        </Link>
                        </td>
                      <td>{item.email}</td>
                      <td>{item.place}</td>
                      <td>{item.address}</td>
                      <td>{item.mobile}</td>
                      <td className='option-btn'>
                        <Dropdown>
                          {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            <RiMore2Fill />
                          </Dropdown.Toggle> */}

                          <Dropdown.Menu>
                            {/* <Dropdown.Item href="#" onClick={(e) => acceptRequest(e, item.email)}>Accept</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={(e) => rejectRequest(e, item.email)}>Reject</Dropdown.Item> */}
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </Table>

          </div>
        </Container>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>

  );
}