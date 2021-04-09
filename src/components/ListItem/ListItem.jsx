import React, { useState } from 'react';
import './ListItem.scss';
import ListItemTasks from '../ListItemTasks/ListItemTasks';
import {Input, Header, Segment} from 'semantic-ui-react';
import ListItemTitle from '../ListItemTitle/ListItemTitle';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from "../../store/listsSlice";


const ListItem = () => {
  // variables
  const dispatch = useDispatch();
  const listsState = useSelector((state) => state.listsReducer);

  //local state
  const [inputValue, setInputValue] = useState('');
  const [createTaskError, setCreateTaskError] = useState(false)

  // handlers
  const addTaskItem = () => {
    if (inputValue === '') {
      setCreateTaskError(true);
    } else {
      dispatch(addTask(inputValue));
      setInputValue('');
      setCreateTaskError(false);
    }
  };

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputValue === '') {
        setCreateTaskError(true);
      } else {
        dispatch(addTask(inputValue));
        setInputValue('');
        setCreateTaskError(false);
      }
    }
  }

  return (
    <div className={'list-item__wrapper'}>
      {listsState.activeListIndex !== null ? (
        <>
          <ListItemTitle />

          <Segment className={'list-item__tasks tasks'}>
            <Segment.Group className={'tasks__item'}>
              {listsState.listsArray[listsState.activeListIndex].tasks.map(
                (item, index) => {
                  return <ListItemTasks key={index} taskIndex={index} />;
                }
              )}
            </Segment.Group>

            <Input
              className={'tasks__creator'}
              type={'text'}
              style={{ marginTop: 'auto' }}
              fluid
              action={{
                icon: 'arrow up',
                onClick: addTaskItem
              }}
              onKeyDown={keyDown}
              placeholder='Click to quickly add a task'
              onChange={(e) => {setInputValue(e.target.value)}}
              value={inputValue}
              error={createTaskError}
            />
          </Segment>
        </>
      ) : listsState.listsArray.length ? (
        <div>
          <Header>Select a list or create a new one</Header>
        </div>
      ) : (
        <div>
          <Header>Create your new list</Header>
        </div>
      )}
    </div>
  );
};

export default ListItem;
