import trash from './trash.png';

function Task(props) {
    return (
        <div id="listOfTasks">
          <div id="task"><input className="check" type="checkbox"></input><span id ="addedTask">{props.name}</span> 
          <img id ="trash" src={trash} onClick="onDelete()"></img></div>
          </div>        
    );
}
export default Task;