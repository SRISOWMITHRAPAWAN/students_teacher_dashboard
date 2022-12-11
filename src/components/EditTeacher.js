import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Sidebar2 from './Sidebar2';
import Topbar from './Topbar';

export default function EditTeacher() {
    
    const { id } = useParams();

    const [teacher, setTeacher] = useState("")

    useEffect(() => {
        fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/teachers/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTeacher(res))
            .catch((e) => console.log(e))
    }, []);

    return (
    
      <div>
            {teacher ? <EditTeacherForm teacher={teacher} /> : "Loading..."}
        </div>
     
    )
}


function EditTeacherForm({ teacher }) {

    const [name, setName] = useState(teacher.name);
    const [email, setEmail] = useState(teacher.email);
    const [phone, setPhone] = useState(teacher.phone);
    const [batches, setBatches] = useState(teacher.batches);
   

    const navigate = useNavigate();


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
            <div className="add-user" style={{marginTop:"150px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" value={name} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" value={email} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" value={phone} variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setBatches(event.target.value)}
                    label="Batches" value={batches} variant="standard" style={{marginBottom:"2rem"}}/><br></br>
 <Button className="add-button" onClick={() => {
                const updatedTeacher = {
                    name: name,
                    email: email,
                    phone: phone,
                    batches:batches                   
                };

                fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/teachers/${teacher.id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedTeacher),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())                    
                    .then(() => navigate("/edit-teacher"));
            }}
                variant="contained" style={{marginBottom:"2rem"}}>Update</Button>
            </div>

           
        </div>

      </div>
    </div>
                 
      
                      
  
                    
  
                  </div>
                  </div>
                  </div>
                  </div>
       
       
       
       
       
       
       
      
    )
}