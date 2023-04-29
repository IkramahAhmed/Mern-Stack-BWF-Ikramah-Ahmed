import React from 'react';
import './App.css';

import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
function App() {

  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appoinment',
        day:'Feb at 2:00pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting Appoinment',
        day:'Feb at 3:00pm',
        reminder:true,
    },  {
        id:3,
        text:'Food Appoinment',
        day:'Feb at 4:00pm',
        reminder:false,
    }
]   
)

//Delete task
//ismen humnay sub say pehlay id ko bulwa lia array say uskay bad hun=may task id ko ondelete men bhej dia anb hum chahtay hen kay id or task match hon to dlete krday woh 
const deleteTask=(id)=>{
  console.log('dlete',)
  setTasks(tasks.filter((task)=>task.id !== id))
}


//Toggle Reminder
const toggleReminder =(id)=>{
  console.log('toggle',id);
  setTasks(tasks.map((task)=>task.id === id ?{...task,reminder:!task.reminder} :task))
   
}
  return (
    <div className="App">
      <h1>react</h1>
      <Header title='Task tracker'/>
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> ) : ('No task To show')}
    </div>
  );
}

let arr1 =[2,43,543,32];
let arr2=arr1.filter(x=> x%2==0);
console.log(arr2);
export default App;
