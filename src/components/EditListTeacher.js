import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from './Sidebar2';
import Topbar from './Topbar';

const EditListTeacher = () => {

    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    function getTeachers() {
        fetch("https://63282709a2e90dab7bd970f7.mockapi.io/teachers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTeachers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTeachers(), []);

    return (
<div id="wrapper">
 <Sidebar2/>
    <div id="content-wrapper" class="d-flex flex-column">
                  
    <div id="content">
     
      <Topbar/>
                  <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"10rem"}}>
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
                        <th scope="col">Batches Assigned</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teach) => {
                        return (
                            <tr>
                                <th scope="row">{teach.id}</th>
                                <td>{teach.name}</td>
                                <td>{teach.email}</td>
                                <td>{teach.phone}</td>
                                <td>{teach.batches}</td>
                                <td><IconButton onClick={() => navigate(`/edit-teacher/${teach.id}`)} color="secondary">
                                        <EditIcon />
                                    </IconButton></td>
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

export default EditListTeacher;