// StudentList.js
import React from 'react';
import { Table } from 'react-bootstrap';

function StudentList({ students, deleteStudent, handleCheckboxChange, selectedStudents }) {
  return (
    <Table>
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
            <td>
              <input 
                type="checkbox" 
                checked={selectedStudents.has(student.id)} 
                onChange={() => handleCheckboxChange(student.id)} 
              />
            </td>
            <td>{student.name}</td>
            <td>{student.code}</td>
            <td>{student.status ? 'Active' : 'Inactive'}</td>
            <td>
              <button className='btn btn-danger' onClick={() => deleteStudent(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StudentList;