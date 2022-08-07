import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const userData = [{
    'username': '',
    'email': '',
    'password': ''
  }]

  const [isData, setData] = useState(userData);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirm_pass, setConfirmPass] = useState('');
  const [OPass,setOpass]=useState('')

  const handleInput = (e) => {
    if (e.target.name === 'username') setUsername(e.target.value)
    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'password') setPassword(e.target.value)
    if (e.target.name === 'confirm_pass') setConfirmPass(e.target.value)
    if(password===confirm_pass) setOpass(password)
  }

  const checkpass=()=>{
    if(confirm_pass!==password){
      return (
        <p>Password Are Not Same.</p>
      )
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...userData,{username:username,email:email,password:OPass}])
    setUsername('')
    setConfirmPass('')
    setPassword('') 
    setEmail('')
  }

  console.log(isData)

  return (
    <>
      <div className='container-div'>
        <h2>Sign Up</h2>
        <div className='form-div'>
          <form onSubmit={handleSubmit}>
            <input name='username' type="text" placeholder="UserName" value={username} onChange={handleInput} required />
            <input name='email' type="email" placeholder="Email" value={email} onChange={handleInput} required />
            <input type="password" name='password' placeholder="Password" value={password} onChange={handleInput} required autoComplete='on' />
            <input type="password" name='confirm_pass' placeholder="Confirm Password" value={confirm_pass} onChange={handleInput} required autoComplete='on' />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
