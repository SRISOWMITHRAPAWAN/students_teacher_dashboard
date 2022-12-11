import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from './Topbar';
import Sidebar2 from './Sidebar2';
const CreateTeacher = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [batches, setBatches] = useState("");

    const navigate = useNavigate();

    return (
        <div id="wrapper">
 <Sidebar2/>
    <div id="content-wrapper" class="d-flex flex-column">
                  
    <div id="content">
     
      <Topbar/>
                  <div class="container-fluid">
                  <div class="row">
      <div class="col">
      <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="add-user" style={{marginTop:"150px", marginLeft:"180px"}}>
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

                <TextField onChange={(event) => setBatches(event.target.value)}
                    label="Batches" variant="standard"style={{marginBottom:"2rem"}} /><br></br>
                    <Button className="add-button" onClick={() => {
                const newTeacher = {
                    name: name,
                    email: email,
                    phone: phone,
                    batches: batches,
                };

                fetch("https://63282709a2e90dab7bd970f7.mockapi.io/teachers", {
                    method: "POST",
                    body: JSON.stringify(newTeacher),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())
                    .then(() => navigate("/teachers"));
            }}
                variant="contained" style={{marginBottom:"2rem"}}>Add Teacher</Button>

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

export default CreateTeacher;

