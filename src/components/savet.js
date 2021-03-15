import React, {Fragment, useState} from 'react';
import Task from './task';

function SaveTask(props) { 
   
    const listOfTasks = props.tasks.map((element, index) =>{
           return  <React.Fragment key={element + index}><Task name={element}></Task></React.Fragment>
    })
    const onDelete=(glupiTask)=>{
        let newArray = tasks.filter((element)=>{glupiTask !== element});
        setTasks(newArray);
    }
        
    return (<>
             {listOfTasks}
             </>
    );
}
export default SaveTask;