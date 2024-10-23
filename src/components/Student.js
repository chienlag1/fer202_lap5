import { useState } from "react";

function Student({ selectedCount, clearStudents }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(false);

  const handleChange = (event) => {
    setStatus(event.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, code, status };
    try {
      await fetch("http://localhost:3000/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });
      alert("Saved successfully");
      setName("");
      setCode("");
      setStatus(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='container'>
      <div className='d-flex'>
        <h1 className='me-5'>Total selected student: {selectedCount}</h1>
        <button type="button" className='btn btn-primary' onClick={clearStudents}>Clear</button>
      </div>
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input 
            type="text" 
            className="form-control w-25 me-3" 
            required 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder='Student Name' 
          />
          <button type="submit" className='btn btn-primary'>Add</button>
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control w-25" 
            required 
            value={code} 
            onChange={e => setCode(e.target.value)} 
            placeholder='Student Code' 
          />
        </div>
        <div className="d-flex flex-row mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            checked={status} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Still active</label>
        </div>
      </form>
    </div>
  );
}
export default Student