import React, {useState} from 'react'

function SignUp() {

  const [user, setUser] = useState({
    name:"", email:"", password:"", confirmPassword:""
  }); 

  let name, value;

const inputHandler = (e)=>{
  // console.log(e);
  name = e.target.name;
  value = e.target.value;

  setUser({...user, [name]:value});

}

const registerUser = async(e)=>{
  e.preventDefault();
 
  // const {name, email, password, confirmPassword} = user;

  const res = await fetch("http://localhost:7000/api/v1/createAccount", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
      // name, email, password, confirmPassword
      user
  )
  });
  const data = await res.json();

  if(!data){
    window.alert("Invalid registration");
    console.log("Invalid registration");
  }
  else {
    window.alert("Registration successfull");
    console.log("Registration successfull");
  }
}

  return (
    <div>
        <fieldset>
          <legend>Sign Up</legend>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </fieldset>
        <div className=''>
          <form method='POST' onSubmit={registerUser}>

          <div className='flex flex-col  w-full'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' value={user.name} className='border-black bg-slate-400 w-1/5' autoComplete='off' onChange={inputHandler} />
            </div>

            <div className='flex flex-col  w-full'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' value={user.email} className='border-black bg-slate-400 w-1/5' onChange={inputHandler} />
            </div>

            <div className='flex flex-col  w-full'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' value={user.password} className='border-black bg-slate-400 w-1/5' onChange={inputHandler} />
            </div>

            <div className='flex flex-col  w-full'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name='confirmPassword' id='confirmPassword' value={user.confirmPassword} className='border-black bg-slate-400 w-1/5' onChange={inputHandler} />
            </div>

            <div className='mt-4'>
            <button type='submit' className='bg-green-600 text-white px-4 py-2'>Sign Up</button>
            </div>

          </form>
        </div>
    </div>
  )
}

export default SignUp;