import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const EditList = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    function getStudents() {
        fetch("https://63282709a2e90dab7bd970f7.mockapi.io/student", {
          method: "GET"
        })
          .then((data) => data.json())
          .then((res) => setStudents(res))         
          .catch((e) => console.log(e));
      }
    
      useEffect(() => getStudents() , []);

  return (
    <div id="wrapper">
 <Sidebar/>
  <div id="content-wrapper" class="d-flex flex-column">
                
  <div id="content">
   
    <Topbar/>
                <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div class="row">
    <div class="col">
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Teacher</th>
            <th scope="col">Batch</th>
            <th scope="col">Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud) => {
            return (
              <tr>
                <th scope="row">{stud.id}</th>
                <td>{stud.name}</td>
                <td>{stud.email}</td>
                <td>{stud.phone}</td>
                <td>{stud.teacher}</td>
                <td>{stud.batch}</td>
                <td>{stud.marks}</td>
                <td><IconButton onClick={() => navigate(`/edit-student/${stud.id}`)} color="secondary">
                    <EditIcon />
                  </IconButton>
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
    </div>
  </div>
               
    
                    

                  

                </div>
                </div>
                </div>
                </div>
  )
}

export default EditList;
