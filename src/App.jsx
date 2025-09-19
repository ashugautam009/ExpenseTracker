
import { useEffect, useState } from 'react'
import './App.css'
import fakedata from './data/fakedata'

function App() {
  const[data,Setdata]=useState([]);//Hold the Whole data


  const[title,SetTitle]=useState('');
  const[age,SetAge]=useState(0)
  const[date,SettDate]=useState('');
  useEffect(()=>{
    Setdata(fakedata)
  },[])

  console.log(data);

  //Delete Function
  const handleDelete=(id)=>{
    const RemoveRecord=data.filter((check)=>check.id!==id)
    Setdata(RemoveRecord)

  }
  return (
    <div>
      {/*<h2>Expense Tracker</h2>*/}
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' type='text'/>
        <label htmlFor='amount'>Amount</label>
        <input id='amount' type='number' min={0}/>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date'/>
        <button>Submit</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
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
                <button onClick={()=>handleDelete(check.id)}>Delete</button>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
      
  )
}

export default App
