import React from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Login from "./components/Login";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"
import Register from "./components/Register";
import Forgetpassword from "./components/Forgetpassword";
import Dashboard from "./components/Dashboard";
import StudentLogin from "./components/StudentLogin";
import TeachersLogin from "./components/TeachersLogin";
import Student from "./components/Student";
import CreateStudent from "./components/CreateStudent";
import DeleteStudent from "./components/DeleteStudent";
import DeleteList from "./components/DeleteList";
import EditList from "./components/EditList";
import EditStudent from "./components/EditStudent";
import Teacher from "./components/Teacher";
import CreateTeacher from "./components/CreateTeacher";
import EditListTeacher from "./components/EditListTeacher";
import EditTeacher from "./components/EditTeacher";
import DeleteListTeacher from "./components/DeleteListTeacher";
import DeleteTeacher from "./components/DeleteTeacher";
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/forgetpassword" element={<Forgetpassword/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/studentlogin" element={<StudentLogin/>}/>
  <Route path="/teacherslogin" element={<TeachersLogin/>}/>
  <Route path="/student" element={<Student/>}/>
  <Route path="/createstudent" element={<CreateStudent/>}/>
  <Route path="/delete-student" element={<DeleteList/>}/>
  <Route path="/delete-student/:id" element={<DeleteStudent/>}/>
  <Route path="/edit-student" element={<EditList/>}/>
  <Route path="/edit-student/:id" element={<EditStudent/>}/>
  <Route path="/teachers" element={<Teacher/>}/>
  <Route path="/createteachers" element={<CreateTeacher/>}/>
  <Route path="/edit-teacher" element={<EditListTeacher />} />
 <Route path="/edit-teacher/:id" element={<EditTeacher />} />
 <Route path="/delete-teacher" element={<DeleteListTeacher />} />
<Route path="/delete-teacher/:id" element={<DeleteTeacher />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;