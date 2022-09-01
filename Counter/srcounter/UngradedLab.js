import  './myCss.css'
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
function UngradedLab() {
const[state , setState]=useState(0);

return (
    <div className='container'>
        <h1>Regular Counter</h1>
        <h2>{state}</h2>
        <Button variant="warning" onClick={() =>setState(state-1)}>Decrease</Button>
        <Button variant="info" onClick={()=>setState(0)}>Reset</Button>
        <Button variant="warning"onClick={() =>setState(state+1)}>Increase</Button>
    </div>
  )
}

export default UngradedLab
