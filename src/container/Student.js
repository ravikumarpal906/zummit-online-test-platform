import React,{useState} from 'react'
import { SLogin } from "./SLogin";
import { SRegister } from "./SRegister";

function Student() {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <SLogin onFormSwitch={toggleForm} /> : <SRegister onFormSwitch={toggleForm} />
      }
    
    </div>
  )
}

export default Student
