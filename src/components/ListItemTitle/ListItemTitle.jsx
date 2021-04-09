import React, {useState, useRef, useEffect} from 'react';
import './ListItemTitle.scss';
import { Input } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { updateListTitle } from '../../store/listsSlice';

const ListItemTitle = () => {
  const dispatch = useDispatch();

  // Refs
  const titleInputRef = useRef();

  // State
  const listsState = useSelector((state) => state.listsReducer);
  const [inputValue, setInputValue] = useState(
    listsState.listsArray[listsState.activeListIndex].title
  );
  const [focusTitle, setFocusTitle] = useState(false);
  const [createTaskError, setCreateTaskError] = useState(false)

  useEffect(() => {
    setInputValue(listsState.listsArray[listsState.activeListIndex].title)
  }, [listsState.activeListIndex, listsState.listsArray])


  // handlers

  const onTitleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updateTitle = () => {
    if (inputValue === '') {
      setCreateTaskError(true);
      titleInputRef.current.focus();
    } else {
      dispatch(updateListTitle(inputValue));
      setCreateTaskError(false);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateTitle();
      event.target.blur();
    }
  };

  const focusTitleInput = () => {
    setFocusTitle((prev) => !prev);
    titleInputRef.current.focus();
  };

  return (
    <div className={'list-title'}>
      <Input
        ref={titleInputRef}
        className={'list-title__input'}
        fluid
        type={'text'}
        id={''}
        style={{ marginTop: 'auto' }}
        action={{
          icon: 'pencil',
          onClick: focusTitleInput,
        }}
        placeholder="Enter a title"
        onChange={onTitleChange}
        value={inputValue}
        onBlur={updateTitle}
        onKeyDown={onKeyDown}
        error={createTaskError}
      />
    </div>
  );
};

export default ListItemTitle;
