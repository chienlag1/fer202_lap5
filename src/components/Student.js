import { useState } from "react";


function Student() {
  const [name, nameChange]= useState("");
  const [code , codeChange]= useState("");
  const [active , activeChange]= useState();
 
  const handleChange = (event) => {
    activeChange(event.target.checked);
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    const studentdata= {name, code, active};
    fetch("http://localhost:3000/student",{
           method:"POST",
          headers:{"content-type": "application/json"},
            body: JSON.stringify(studentdata)
          }).then ((res)=>{
            alert("Save successfully")
            return 
          }).catch((err)=>{
            console.log(err.message);
          })
  }

    return (
        <div className='container'>
        <div className='d-flex'>
        <h1 className='me-5'>Total selected student: </h1>
        <button type="submit" value="Submit" className='btn btn-primary'>Clear</button>
        </div>
  
        <form className='mt-4' onSubmit={handleSubmit}>
    <div className="mb-3 d-flex">
      <input type="text" className="form-control w-25 me-3" required value={name} onChange={e=>nameChange(e.target.value)} placeholder='Student Name'></input>
      <button type="submit" value="Submit" className='btn btn-primary'>Add</button>
    </div>
    <div className="mb-3">
      <input type="text" className="form-control w-25" required value={code} onChange={e=>codeChange(e.target.value)} placeholder='Student Code'></input>
    </div>
    <div className="d-flex flex-row mb-3 form-check">
    <input type="checkbox" className="form-check-input p-2 center " value={active} onChange={handleChange}></input>
    <label className="form-check-label p-2 " htmlFor="exampleCheck1">Still active</label>
    
  </div>
    
    
  </form>
      </div>
    );

    
}
export default Student;