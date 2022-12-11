
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteStudent = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://63282709a2e90dab7bd970f7.mockapi.io/student/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-student"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteStudent;