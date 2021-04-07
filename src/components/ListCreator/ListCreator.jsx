import React from 'react';
import './ListCreator.scss'
import {useSelector, useDispatch} from "react-redux";
import {createList, showListContent } from '../../store/listsSlice'
import {Segment, Header, Button, List, Icon, ListItem} from 'semantic-ui-react';


const ListCreator = () => {
  const listsState = useSelector(state => state.listsReducer);
  const dispatch = useDispatch()

  const onCreateBtnClick = () => {
    dispatch(createList());
  };

  const onListItemClick = (index) => {
    dispatch(showListContent(index));
  }

  // for understanding action creator
  // function showListContent(index) {
  //   return {
  //     type: 'lists/showListContent',
  //     payload: index
  //   }
  // }

  return (
    <Segment className={'list-creator'}>
      <Button color={'violet'}
              onClick={onCreateBtnClick}
      >
        <Icon name={'plus'}/>
        Create a new list
      </Button>

      <div className={'list-creator__title title'}>
        <Header className={'title__text'} as='h2'>Your Lists</Header>
        <Icon className={'title__icon'} name="pencil"/>
      </div>

      <List
        className={'list-creator__catalog catalog'}
      >
        {
          listsState.listsArray.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => onListItemClick(index)}
                >
                  {item.title}
                </ListItem>
              )
            }
          )
        }
      </List>
    </Segment>
  )
}

export default ListCreator;
