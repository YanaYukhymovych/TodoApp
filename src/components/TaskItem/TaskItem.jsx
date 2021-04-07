import React from 'react';
import './TaskItem.scss';
import { Icon, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, doneTask } from '../../store/listsSlice';

const TaskItem = (props) => {
  const listsState = useSelector((state) => state.listsReducer);
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(props.taskIndex));
  };

  const onDoneTask = () => {
    dispatch(doneTask(props.taskIndex));
  };

  const task =
    listsState.listsArray[listsState.activeListIndex].tasks[props.taskIndex];

  return (
    <Segment className={'task__item'}>
      <Icon
        className={'task__icon'}
        name={task.done ? 'check square outline' : 'square outline'}
        onClick={onDoneTask}
      />

      <div
        className={!task.done ? 'task__text' : 'task__text task__text--done'}
      >
        {task.title}
      </div>

      <Icon
        className={'task__icon task__icon--del'}
        name="delete"
        onClick={onDeleteTask}
      />
    </Segment>
  );
};

export default TaskItem;
