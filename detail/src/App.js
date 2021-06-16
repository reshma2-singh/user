import React,{useState,useEffect} from 'react';
import './App.css';
import InfoBox  from './InfoBox';
function App() {
  const [users,setUsers] = useState([])
  const [name,setName] = useState("user");
  useEffect(async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos ");
    const data = await response.json();
    
    setUsers(data)
  })
   

  return (
  
    <div className="app">
    
      
     {
       users.map((data)=>(
        <InfoBox
        id = {data.id}
        title = {data.title}
        image ={data.thumbnailUrl}
     
        />
         
          
       ))
     }
    
    </div>
    
  );
}

export default App;
