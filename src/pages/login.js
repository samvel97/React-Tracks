import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHttp } from '../hooks/http.hook';
import style from './style.module.scss'
const Login = ()=>{
const {loading, request,error} = useHttp()
const [form, setForm] = useState({username:'', password:''})
const dispatch = useDispatch()

const changeHandler = (e)=>{
  setForm({...form,[e.target.name]:e.target.value})
}

const loginHandler = async (e)=>{
  e.preventDefault()
  try{
    const data = await request('/api/login','POST', {...form});
    await localStorage.setItem('token',JSON.stringify(data.accessToken))
    dispatch({type:'ISAUTH'})
  }
  catch(e){
  }
}

  return(
    <>
    <form className={style.login} onSubmit={loginHandler} >
      <h2>JOIN US</h2>
      <input type='text' name='username' value={form.username} onChange={changeHandler} placeholder='Email' className={style.login_info}/><br/>      
      <input type='password' name='password' value={form.password} onChange={changeHandler} placeholder='Password'  className={style.login_info}/><br/>
      <button type='submit' className={style.login_info}>Log in</button>
    </form>
  </>
  )
}

export default Login;

// password 92702689
