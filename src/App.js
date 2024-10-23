import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Student from './components/Student.js';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedStudents, setSelectedStudents] = useState(new Set());

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:3000/student');
      const data = await response.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/student/${id}`, {
      method: 'DELETE',
    });
    setStudents((prev) => prev.filter(student => student.id !== id));
    selectedStudents.delete(id);
    setSelectedCount(selectedStudents.size);
  };

  const handleCheckboxChange = (id) => {
    if (selectedStudents.has(id)) {
      selectedStudents.delete(id);
    } else {
      selectedStudents.add(id);
    }
    setSelectedCount(selectedStudents.size);
    setSelectedStudents(new Set(selectedStudents));
  };

  const clearStudents = async () => {
    await fetch('http://localhost:3000/student', {
      method: 'DELETE',
    });
    setStudents([]);
    setSelectedCount(0);
    setSelectedStudents(new Set());
  };

  return (
    <Container>
      <Student clearStudents={clearStudents} selectedCount={selectedCount} />
      <StudentList 
        students={students} 
        deleteStudent={deleteStudent} 
        handleCheckboxChange={handleCheckboxChange} 
        selectedStudents={selectedStudents} 
      />
    </Container>
  );
}

export default App;