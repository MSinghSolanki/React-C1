import {useState} from "react"


 const Items =() =>{
const [counter1, setCounter1] = useState(13)
const [counter2, setCounter2] = useState(78)
const [counter3, setCounter3] = useState(44)
const [counter4, setCounter4] = useState(15)
const [total,settotal] = useState(0)

const handlechange1=(value)=>{
  setCounter1(counter1+value)
}
const handlechange2=(value)=>{
  setCounter2(counter2+value)
}
const handlechange3=(value)=>{
  setCounter3(counter3+value)
}
const handlechange4=(value)=>{
  setCounter4(counter4+value)
}

  return (

    <div>

    <h1>Books:{counter1}</h1>
  <button onClick = {()=>{
  handlechange1(1)
}}> + </button>
<button onClick = {()=>{
  handlechange1(-1)
}}> - </button>




    <h1>InkPen:{counter2}</h1>
  <button onClick = {()=>{
  handlechange2(1)
}}> + </button>
<button onClick = {()=>{
  handlechange2(-1)
}}> - </button>


    <h1>NoteBook:{counter3}</h1>
  <button onClick = {()=>{
  handlechange3(1)
}}> + </button>
<button onClick = {()=>{
  handlechange3(-1)
}}> - </button>



    <h1>Pen:{counter4}</h1>
  <button onClick = {()=>{
  handlechange4(1)
}}> + </button>
<button onClick = {()=>{
  handlechange4(-1)
}}> - </button>

<h1>Total:{counter1+counter2+counter3+counter4}</h1>
    </div>


  )
}

export {Items}