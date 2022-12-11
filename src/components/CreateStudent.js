import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from './Topbar';
import Sidebar from './Sidebar';
const CreateStudent = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [teacher, setTeacher] = useState("");
    const [batch, setBatch] = useState("");
    const [marks, setMarks] = useState("");

    const navigate = useNavigate();

    return (

        <div id="wrapper">
 <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
                      
        <div id="content">
         
          <Topbar/>
                      <div class="container-fluid">
                      <div class="row">
          <div class="col">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
    <TextField onChange={(event) => setName(event.target.value)}
        label="Name" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

    <TextField onChange={(event) => setEmail(event.target.value)}
        label="Email" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

    <TextField onChange={(event) => setPhone(event.target.value)}
        label="Phone" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

    <TextField onChange={(event) => setTeacher(event.target.value)}
        label="Teacher" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

    <TextField onChange={(event) => setBatch(event.target.value)}
        label="Batch" variant="standard" style={{marginBottom:"2rem"}}/><br></br>

    <TextField onChange={(event) => setMarks(event.target.value)}
        label="Marks" variant="standard" style={{marginBottom:"2rem"}}/><br></br>
        <Button className="add-button" onClick={() => {
const newStudent = {
name: name,
email: email,
phone: phone,
teacher:teacher,
batch:batch,
marks:marks          
};

fetch("https://63282709a2e90dab7bd970f7.mockapi.io/student",{
method: "POST",
body: JSON.stringify(newStudent),
headers: {
  "Content-Type": "application/json",
}
})
.then((data) => data.json())         
.then(() => navigate("/student"));                  
}} 
variant="contained" style={{marginBottom:"5rem"}}>Add Student</Button>
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

export default CreateStudent;


