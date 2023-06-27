import logo from './logo.svg';
import './App.css';

import { Button,Alert,Navbar,Container,InputGroup,FormControl, Card,CardChecklist } from 'react-bootstrap';
import { useState } from 'react';

function Todo() {
  return [
    {name:'abc',isCheck:false,id:1},
    {name:'ppp',isCheck:true,id:2},
    {name:'kyl',isCheck:false,id:3}
  ]
}

function Item(props) {
  const [todo,setTodo] = useState(Todo()) 
  return( <InputGroup >
    <InputGroup.Checkbox checked={props.isCheck} onChange={props.onToggle}></InputGroup.Checkbox>
        <FormControl  value={props.name} style={{textDecoration:props.isCheck?"line-through 4px":"none"}}></FormControl>
        <Button onClick={props.onDelete} >
          
          {/* <Trash></Trash> */}
          删除
        </Button>
    </InputGroup>)
  
  
 
}

function App() {
  const [todo,setTodo] = useState(Todo()) 
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
       <Container>
          <Navbar.Brand>
             待办事项
          </Navbar.Brand>
       </Container>
         
      </Navbar>


      <Container>
      {
          todo.map(item=>(
            <Container>
             <Item 
             id = {item.id}
             isCheck = {item.isCheck}
             name = {item.name}
             onToggle = {()=>{
              setTodo(todo.map((x)=>x.name === item.name ? {...x,isCheck:!x.isCheck}:x))
             }}
             onDelete={
          ()=>{
          setTodo(todo.filter((x) => x.name !== item.name)) 
        }}></Item>
           
        </Container>
          ))
        }
      </Container>
 
    </>
    
    // <div className="App">
    //   {
    //     todo.map((item)=>(
    //       <>
    //       <input type='checkbox' defaultChecked={todo.isCheck}></input>
    //       <label>{item.name}</label>
    //       </>
    //     ))
    //   }





    // </div>
  );
}

export default App;
