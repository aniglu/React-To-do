import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  Input  from './components/input';
import  Task  from './components/task';
import  SaveTask  from './components/savet';

function App() {
  const [tasks, setTasks] = useState([]);

 const piesekTropiacy = (props) =>{
console.log(props);
setTasks([... tasks, props]);
 }     
 
        return (
    <div className="App">
     <div className="elements">
        <div className="naq">
        To-do-React      
      </div>
      <Input onAccept={piesekTropiacy}>        
      </Input>
      <SaveTask tasks={tasks}></SaveTask>
        </div>
      </div>
  );
}

export default App;
