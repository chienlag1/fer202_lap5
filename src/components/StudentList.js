import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useEffect } from 'react';

function StudentList(){
        
        const [students, setStudents] = useState([]);

        useEffect(()=>{
          fetch("http://localhost:3000/student").then((res)=>{
            return res.json();
          }).then ((resp)=>{
            setStudents(resp)
          }).catch((err)=>{
            console.log(err.message);
          })

        })

        const Delete=(id)=>{
          fetch("http://localhost:3000/student/" + id,{
            method:"DELETE",
           }).then ((res)=>{
            if (res.ok){
              alert("Delete successfully")
              const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);
            }
             return 
           }).catch((err)=>{
             console.log(err.message);
           })
        }
        
        
        
          return (
            <Table >
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Student Name</th>
                  <th>Student Code</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td><input type="checkbox" ></input></td>
                    <td>{student.name}</td>
                    <td>{student.code}</td>
                    <td>{student.status}</td>
                    <td>
                      <button className='btn btn-danger' onClick={Delete}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          );
    
}
export default StudentList;