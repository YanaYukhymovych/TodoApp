import React, {useState} from 'react';
import './ListContent.scss';
import TaskItem from '../TaskItem/TaskItem';
import TaskCreator from '../TaskCreator/TaskCreator';
import { Segment } from 'semantic-ui-react';
import ListTitle from '../ListTitle/ListTitle';
import { useSelector } from 'react-redux';


const ListContent = () => {
  const listsState = useSelector((state) => state.listsReducer);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={'list__item-wrap'}>
      {listsState.activeListIndex !== null ? (
        <>
          <ListTitle />

          <Segment className={'list__item'}>
            <Segment.Group>
              {listsState.listsArray[listsState.activeListIndex].tasks.map(
                (item, index) => {
                  return (
                    <TaskItem
                      key={index}
                      taskIndex={index}
                    />
                  );
                }
              )}
            </Segment.Group>

            <TaskCreator
              onInputChange={(e) => setInputValue(e.target.value)}
              inputValue={inputValue}
            />
          </Segment>
        </>
      ) : listsState.listsArray.length ? (
        <div>
          <span>Select list</span>
        </div>
      ) : (
        <div>
          <span>Create list</span>
        </div>
      )}
    </div>
  );
};

export default ListContent;
