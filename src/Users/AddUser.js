import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

function AddUser() {
    let navigate = useNavigate(); // to navugate the homepage

const [user,setUser] = useState({
   

    name:"",
    username:"",
    email:"",




})   ;

//deconstruct the objcts above
const{name, username, email} = user;


const onInputChange = (e) =>{  // e is event

    setUser({ ...user, [e.target.name]: e.target.value });   // split opertaor keeps adding objects

};
const onSubmit = async(e) => {

    e.preventDefault(); // to prevent filled in form details from filling in the url.
    await axios.post("http://localhost:8080/user", user)
    navigate("/")
}





  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6  offset-md-3 border rounded p-4 mt-2 shadow '>
                <h2 className='text-center m-4'>Register User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'/>
                    Name                    
                    <label/>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"   
                    value={name}     
                    onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'/>
                    Username                   
                    <label/>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Username"
                    name="username"        
                    value={username}
                    onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'/>
                    E-mail                   
                    <label/>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your email address"
                    name="email"   
                    value={email}     
                    onChange={(e) => onInputChange(e)}
                    />

                </div>
             
                <button type='submit'   className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
            
            

                </div>

            </div>
           
            
      
 
  )
}

export default AddUser
