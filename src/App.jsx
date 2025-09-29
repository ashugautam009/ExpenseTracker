
import { useEffect, useState } from 'react'
import './App.css'
import fakedata from './data/fakedata'
import {genrateRandomNo} from './assets/constants/constant'
function App() {
  const[data,Setdata]=useState([]);//Hold the Whole data


  const[title,SetTitle]=useState('');
  const[amount,SetAmount]=useState();
  const[date,SetDate]=useState('');
  const[category,SetCateogry]=useState('');
  const[CaptureuserInput,SetCaptureuserInput]=useState('')
  useEffect(()=>{
    Setdata(fakedata)
  },[])

  console.log(data);

  //Delete Function
  const handleDelete=(id)=>{
    const RemoveRecord=data.filter((check)=>check.id!==id)
    Setdata(RemoveRecord)

  }

  //Function don't allow delete last list item 
  const disabledcheck=()=>{
    const CheckLastitem=data.length==1;
    return CheckLastitem
  }

  //Add Function 
  const handleAdd=()=>{
    const payload={
      id:genrateRandomNo(),//function to create random id 
      amount:amount,
      date:date,
      title:title,
      category:category,
    }
    console.log('payload',payload)
    if(amount>0 && title.length>0 && date && category){
      Setdata([...data,payload])
      alert('User Informatoin Added')
    }
    else{
      alert(' Invalid Data Pleasec correct it ')
    }
    SetTitle('')
    SetAmount('');
    SetDate('');


  }

  //Total Budget
  const FIndTotalBudget=data.map((check)=>check.amount)
  const AddingsumOfAmount=FIndTotalBudget.reduce((acc,curr)=>{
    return acc+curr
  },0)
  

  //set value which is input by user 
  function CaptureInpuValueByuser(e){
    SetCaptureuserInput(e.target.value)
  }
  //Search The data from List
  const handlesearch=()=>{
    if(CaptureuserInput){
      const find=data.filter((check)=>check.title==CaptureuserInput)
      console.log('find',find)
      Setdata(find)
    }
  }

  //Handle Reset
  function handleReset(){
    Setdata(data)
  }
  
  return (
    <div>
      {/*<h2>Expense Tracker</h2>*/}
      
      <div>
        <h2>Total Budget: -{AddingsumOfAmount}</h2>

      </div>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text' onChange={(e)=>SetTitle(e.target.value)} value={title}/>
        <label htmlFor='amount'>Amount</label>
        <input id='amount' type='number' min={0} onChange={(e)=>SetAmount(e.target.value)} value={amount}/>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' onChange={(e)=>SetDate(e.target.value)} value={date}/>
        <label htmlFor='category'>Category</label>
        <select value={category} onChange={(e)=>SetCateogry(e.target.value)} >
        {data.map((check)=>{
          return(
            <option value={check.category} key={check.id}>
              {check.category}
            </option>
          )
        })}
        </select>
        <button onClick={()=>handleAdd()}>Submit</button>
      </div>
      <div className='Search-Funcanality'>
        <label htmlFor='search'>Search Here </label>
        <input id='search' type='text' placeholder='Search Here for anything ' onChange={(e)=>CaptureInpuValueByuser(e)}/>
        <button onClick={()=>handlesearch()}>Search</button>
        <button onClick={()=>handleReset()}>Reset</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((check,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{check.title}</td>
                <td>{check.amount}</td>
                <td>{check.category}</td>
                <td>{check.date}</td>
                <td><button disabled={disabledcheck()} onClick={()=>handleDelete(check.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      
  )
}

export default App
