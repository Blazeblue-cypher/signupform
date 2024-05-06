import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    preferredname: "",
    email: "",
    phonenumber: "",
    contactday: "",
    contacttime:""
  });

  const inputs = [
    {
      id:1,
      name:"firstname",
      type:'text',
      placeholder:'Firstname',
      errorMessage:'*',
      label: "First Name :  ",
      required:true,
    },
    {
      id:2,
      name:"lastname",
      type:'text',
      placeholder:'Lastname',
      errorMessage: '*',
      label: "Last Name : ",
      required: true,
    },
    {
      id:3,
      name:"preferredname",
      type:'text',
      placeholder:'Preferred name',
      errorMessage: '',
      label: "Preferred Name :"
    },
    {
      id:4,
      name:"email",
      type:'email',
      placeholder:'Email',
      errorMessage: 'Needs to be a valid email address',
      label: "Email : "
    },
    {
      id:5,
      name:"phonenumber",
      type:'tel',
      placeholder: 'Phone number',
      errorMessage: '*',
      label: "Phone Number  * : Format: 123-456-7890 ",
      required:true
    },
    {
      id:6,
      name:"contactmethod",
      type:'text',
      placeholder: 'Contact Method',
      errorMessage: '*',
      label: "Do you want to be contacted by phone or email? ",
      required:true,
    },
    {
      id:7,
      name:"contactday",
      type:'date',
      label: "Best Day To Contact You : "
    },
    {
      id:8,
      name:"contacttime",
      type:'time',
      label: "Best Time To Contact You : "
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  };

  return (
   
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <h2>Meet Claira, Your Accountability Partner!</h2>
        <div className='underline'></div>

        {inputs.map((input) => (
           <FormInput key={input.id} 
           {...input} 
           value={values[input.name]} 
           onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
