import React, { useRef, useState } from 'react'
import { add_item,delete_item } from './action/action'
import {useSelector, useDispatch } from 'react-redux'
import './App.css'
export const Task = () => {
    // const[nameval,setNameval]=useState('')
    // const [email,setEmail]=useState('')
    // const[addres,setAddress]=useState('')
    // const[number,setnumber]=useState('')
    const dispatch=useDispatch()
    const output=useSelector((state)=>state.list)
    const nameval=useRef('');
    const email=useRef('');
    const addres=useRef('')
    const number=useRef('')
    const SubmitHandler=(e)=>{
      console.log(output);
      var atposition=email.current.value.indexOf("@");
        var dotposition=email.current.value.lastIndexOf(".");
        if(nameval.current.value===""){
          alert("name should not be empty")
          nameval.current.focus()
        }
        else if(!isNaN(nameval.current.value)){
          alert("Name Should not be integer");
          nameval.current.focus()
        }
        else if(email.current.value===""){
          alert("Plese enter your email");
          email.current.focus()
        }
        else if ((atposition<1 || email.current.value.lastIndexOf(".")<atposition+2 || dotposition+2>=email.current.value.length)) {
          alert("please enter valid email");
          email.current.focus()
        }
        else if(addres.current.value==='')
        {
         alert("address field must be filled")
         addres.current.focus()
        }
        else if(number.current.value===""){
          alert("Enter mobile number")
          number.current.focus()
        }
        else if(isNaN(number.current.value)){
          alert("number should be integer")
          number.current.focus()
       }
      
        else{
          dispatch(
            add_item
              (
              nameval.current.value,
              email.current.value,
              addres.current.value,
              number.current.value
              ),
              nameval.current.value='',
              email.current.value='',
              addres.current.value='',
              number.current.value=''
            
            )
        }
    }
  return (
    <>
    <div className="ContactList">
    <div  className='InputDiv' >
                <h2>Add contact</h2>
       <div>
        <label>Name</label>
        {/* <input type="text"placeholder='name' value={nameval} onChange={NameHandler}/> */}
        <input type="text"placeholder='name' ref={nameval} />
        </div> 
       <br />
        <div>
        <label>Email</label>
          <input type="text" placeholder='email' ref={email}/></div>
        <br />
        <div>
          <label htmlFor="">Address</label>
          <input type="text" placeholder='Addres' ref={addres}/></div>
        <br />
        <div>
        <label htmlFor="">MOb no</label>
          <input type="text" placeholder='Phone no' ref={number} maxLength={10} minLength={10} /></div>
        <br />
        <button className='SubmitButton' onClick={SubmitHandler} >Submit</button>
       </div>
       <table>
        <tr><th>Name</th><th>Address</th><th>Delete</th></tr>
       {output.map((item)=><tr><td>{item.nameval}</td><td>{item.email}</td><button onClick={()=>dispatch(delete_item(item.id))} className="deleteButton">delete</button><td></td></tr>)}
       </table>
       </div> 
     </>
  )
}
