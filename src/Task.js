import React, { useState } from 'react'
import { add_item,delete_item } from './action/action'
import {useSelector, useDispatch } from 'react-redux'
import reducer from './reducer/reducer'
import './App.css'
export const Task = () => {
    const[nameval,setNameval]=useState('')
    const [email,setEmail]=useState('')
    const[addres,setAddress]=useState('')
    const[number,setnumber]=useState('')
    const dispatch=useDispatch()
    const output=useSelector((state)=>state.list)
    console.log(output);
    console.log(output);
    const NameHandler=(e)=>{
        setNameval(e.target.value)
    }
     const EmailHandler=(e)=>{
        setEmail(e.target.value)
    }
    const addresHandler=(e)=>{
      setAddress(e.target.value)
    }
    const numberHandler=(e)=>{
      setnumber(e.target.value)
    }
    const SubmitHandler=()=>{
     
      var atposition=email.indexOf("@");
        var dotposition=email.lastIndexOf(".");
        if(nameval===""){
          alert("name should not be empty")
          document.form.name.focus();
        }
        else if(!isNaN(nameval)){
          alert("Name Should not be integer");
          document.form.name.focus();
        }
        else if(email===""){
          alert("Plese enter your email");
          document.form.email.focus();
        }
        else if ((atposition<1 || email.lastIndexOf(".")<atposition+2 || dotposition+2>=email.length)) {
          alert("please enter valid email");
          document.form.email.focus();
        }
        else if(addres==='')
        {
         alert("address field must be filled")
        }
        else if(number===""){
          alert("Enter mobile number")
          document.form.number.focus();
        }
        else if(isNaN(number)){
          alert("number should be integer")
          document.form.number.focus();
       }
      
        else{
          dispatch(add_item(nameval,email,addres,number),setNameval(' '),setnumber(' '),setAddress(' '),setEmail(' '))
        }
    }
  return (
    <>
    <div className="ContactList">
    <div  className='InputDiv' >
                <h2>Add contact</h2>
       <div>
        <label>Name</label>
        <input type="text"placeholder='name' value={nameval} onChange={NameHandler}/>
        </div> 
       <br />
        <div>
        <label>Email</label>
          <input type="text" placeholder='email' value={email} onChange={EmailHandler}/></div>
        <br />
        <div>
          <label htmlFor="">Address</label>
          <input type="text" placeholder='Addres' value={addres} onChange={addresHandler} /></div>
        <br />
        <div>
        <label htmlFor="">MOb no</label>
          <input type="text" placeholder='Phone no' value={number} onChange={numberHandler} maxLength={10} minLength={10} /></div>
        <br />
        <button className='SubmitButton' onClick={SubmitHandler} >Submit</button>
       </div>
       <table>
        <tr><th>Name</th><th>Address</th><th>Delete</th></tr>
       {output.map((item)=><tr><td>{item.data}</td><td>{item.email}</td><button onClick={()=>dispatch(delete_item(item.id))} className="deleteButton">delete</button><td></td></tr>)}
       </table>
       </div> 
     </>
  )
}
