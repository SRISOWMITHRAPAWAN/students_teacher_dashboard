import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Topbar from './Topbar';
import Sidebar from './Sidebar';


export default function EditStudent() {
    
    const { id } = useParams();

    const [student, setStudent] = useState("")

    useEffect(() => {
        fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/student/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => setStudent(data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            {student ? <EditStudentForm student={student} /> : "Loading..."}
        </div>
    )
}


function EditStudentForm({ student }) {

    const [name, setName] = useState(student.name);
    const [email, setEmail] = useState(student.email);
    const [phone, setPhone] = useState(student.phone);
    const [teacher, setTeacher] = useState(student.teacher);
    const [batch, setBatch] = useState(student.batch);
    const [marks, setMarks] = useState(student.marks);

    const navigate = useNavigate();


    return (

<div id="wrapper">
 <Sidebar/>
 <div id="content-wrapper" class="d-flex flex-column">
               
 <div id="content">
  
   <Topbar/>
               <div class="container-fluid"style={{display:"flex",justifyContent:"space-between",padding:"5rem 25rem",alignItems:"center"}}>
               <div class="row">
   <div class="col">
   <div style={{width:"30rem",height:"100%",border:"1px solid blue",borderRadius:"2rem"}}>
<div className="add-user" style={{marginTop:"100px", marginLeft:"180px"}}>
    <TextField onChange={(event) => setName(event.target.value)}
        label="Name" value={name} variant="standard"  style={{marginBottom:"2rem"}}/>

    <TextField onChange={(event) => setEmail(event.target.value)}
        label="Email" value={email} variant="standard"  style={{marginBottom:"2rem"}}/>

    <TextField onChange={(event) => setPhone(event.target.value)}
        label="Phone" value={phone} variant="standard"  style={{marginBottom:"2rem"}}/>

    <TextField onChange={(event) => setTeacher(event.target.value)}
        label="Teacher" value={teacher} variant="standard" style={{marginBottom:"2rem"}} />

    <TextField onChange={(event) => setBatch(event.target.value)}
        label="Batch" value={batch} variant="standard"  style={{marginBottom:"2rem"}}/>

    <TextField onChange={(event) => setMarks(event.target.value)}
        label="Marks" value={marks} variant="standard" style={{marginBottom:"2rem"}}/><br></br>
        <Button className="add-button" onClick={() => {
    const updatedStudent = {
        name: name,
        email: email,
        phone: phone,
        teacher:teacher,
        batch:batch,
        marks:marks
    };

    fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/student/${student.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedStudent),
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((data) => data.json())                    
        .then(() => navigate("/edit-student"));
}}
    variant="contained"style={{marginBottom:"5rem"}}>Update</Button>

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
