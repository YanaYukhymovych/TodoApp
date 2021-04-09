import React, { useState } from 'react';
import './SideBar.scss'
import {useSelector, useDispatch} from "react-redux";
import {createList, deleteList, showListContent } from '../../store/listsSlice'
import {Segment, Header, Button, List, Icon, ListItem} from 'semantic-ui-react';

import UserInfo from "../UserInfo/UserInfo";
import Auth from "../Auth/Auth";

const SideBar = () => {

  const listsState = useSelector(state => state.listsReducer);
  const dispatch = useDispatch()

  //local state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteListIndex, setDeleteListIndex] = useState();
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false)

  const onCreateBtnClick = () => {
    dispatch(createList());
  };

  const onListItemClick = (index) => {
    dispatch(showListContent(index));
  }

  const onChangeLists = () => {
    setDisplayDeleteBtn(displayDeleteBtn => !displayDeleteBtn)
  }

  const onDeleteClick = (e, index) => {
    e.stopPropagation();
    setIsModalOpen(true);
    setDeleteListIndex(index);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setDisplayDeleteBtn(false);
  }

  const onDeleteListBtn = () => {
    dispatch(deleteList(deleteListIndex));
    setIsModalOpen(false);
    setDeleteListIndex(null);
    setDisplayDeleteBtn(false);
  }

  return (
    <div className={'sidebar'}>
      <Segment className={'sidebar__sign-in-form sign-in-form'}>
        <UserInfo />

        {/*show auth form or user info*/}
        <Auth />
      </Segment>

      <Segment className={'sidebar__list-menu lists-menu'}>
        <Button primary
                onClick={onCreateBtnClick}
        >
          <Icon name={'plus'}/>
          Create a new list
        </Button>

        <div className={'lists-menu__title title'}>
          <Header className={'title__text'} as='h2'>Your Lists</Header>
          <Icon
            className={'title__icon'}
            name="pencil"
            onClick={onChangeLists}
          />
        </div>

        <List className={'lists-menu__catalog catalog'}>
          {
            listsState.listsArray.map((item, index) => {
                return (
                  <ListItem
                    className={'catalog__list-title'}
                    key={index}
                    onClick={() => onListItemClick(index)}
                  >
                    <div>{item.title}</div>
                    { displayDeleteBtn ?
                      <Icon
                        className={'catalog__list-icon'}
                        name="delete"
                        onClick={(e) => onDeleteClick(e, index)}
                      /> : null
                    }
                  </ListItem>
                )
              }
            )
          }
        </List>
      </Segment>

      <div className={isModalOpen ? 'sidebar__modal sidebar__modal--open modal' : 'sidebar__modal modal'}>
         <Segment className={'modal__box'}>
        <div className={'modal__text'}>
          Are you sure you want to delete this list
          (it may contain uncompleted tasks)?
        </div>
        <div className={'modal__button'}>
          <Button
            fluid
            primary
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            fluid
            color={'red'}
            onClick={onDeleteListBtn}
          >
            Delete
          </Button>
        </div>
      </Segment>
      </div>
    </div>
  )
}

export default SideBar;
