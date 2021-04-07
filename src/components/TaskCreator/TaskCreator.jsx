import React, {useState} from 'react';
import './TaskCreator.scss'
import { Input } from "semantic-ui-react";
import {useDispatch} from "react-redux";
import { addTask } from '../../store/listsSlice';


const TaskCreator = () => {
  // const listsState = useSelector((state) => state.listsReducer);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const addTaskItem = () => {
    dispatch(addTask(inputValue))
    setInputValue('');
  }

  return (
      <Input
        type={'text'}
        style={{ marginTop: 'auto' }}
        fluid
        action={{
          icon: 'arrow up',
          onClick: addTaskItem
        }}
        placeholder='Click to quickly add a task'
        onChange={(e) => {setInputValue(e.target.value)}}
        value={inputValue}
      />
  )
}

export default TaskCreator;