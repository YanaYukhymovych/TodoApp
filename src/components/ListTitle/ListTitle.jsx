import React, { useEffect, useState } from 'react'
import './ListTitle.scss'
import { Input } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const ListTitle = () => {
  const listsState = useSelector((state) => state.listsReducer)
  const [inputValue, setInputValue] = useState(
    listsState.listsArray[listsState.activeListIndex].title
  )

  useEffect(() => {
    setInputValue(listsState.listsArray[listsState.activeListIndex].title);
  }, [listsState.activeListIndex, listsState.listsArray])

  return (
    <div className={'list__title'}>
      <Input
        fluid
        type={'text'}
        id={''}
        style={{ marginTop: 'auto' }}
        action={{ icon: 'pencil' }}
        placeholder="Enter a title"
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        value={inputValue}
      />
    </div>
  )
}

export default ListTitle
