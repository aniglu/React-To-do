import {useState} from 'react';

function Input(props) {
  const [value, setValue] = useState('');

  const handleOnChange = (event) =>{
    setValue(event.target.value)
  }
  const handleOnClick = () =>{
    console.log(value)
    if(props.onAccept){
      props.onAccept(value);
    }
  }
    return (
      <div id="typeTask">
        <input type="text" id="addMe" onChange={handleOnChange}></input> 
        <button className="adBtn" onClick={handleOnClick}>Add</button> 
        
      </div>
    );
}
export default Input;


/*const [addedTask, ] = useState(' ')*/