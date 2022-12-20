import React,{useState} from 'react'
import { TLogin } from "./TLogin";
import { TRegister } from "./TRegister";

function Student() {
    const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <TLogin onFormSwitch={toggleForm} /> : <TRegister onFormSwitch={toggleForm} />
      }
    
    </div>
  )
}

export default Student
