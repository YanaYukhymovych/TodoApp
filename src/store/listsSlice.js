import { createSlice } from '@reduxjs/toolkit';

const TEST_LIST_ARRAY = [
  {
    title: 'Some very long title so Yana could test her layout on it',
    tasks: [
      {
        title: 'Short title',
        done: true,
      },
      {
        title: 'Very-very long task title for testing layout and stuff',
        done: false,
      },
    ],
  },
  {
    title: 'Short',
    tasks: [
      {
        title: 'Task 1',
        done: false,
      },
      {
        title: 'Task 2',
        done: false,
      },
    ],
  },
];

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    activeListIndex: null,
    listsArray: TEST_LIST_ARRAY,
    // listsArray: []
  },

  reducers: {
    createList(state) {
      state.listsArray.push({ title: 'New list', tasks: [] });
      state.activeListIndex = state.listsArray.length - 1;
    },
    updateListTitle(state, action) {
      state.listsArray[state.activeListIndex].title = action.payload;
    },
    showListContent(state, action) {
      state.activeListIndex = action.payload;
    },
    deleteList(state, action) {
      state.listsArray.splice(action.payload, 1);
    },
    addTask(state, action) {
      state.listsArray[state.activeListIndex].tasks.push({
        title: action.payload,
        done: false,
      });
    },
    doneTask(state, action) {
      state.listsArray[state.activeListIndex].tasks[
        action.payload
      ].done = !state.listsArray[state.activeListIndex].tasks[action.payload]
        .done;
    },
    deleteTask(state, action) {
      doneTask();
      state.listsArray[state.activeListIndex].tasks.splice(action.payload, 1);
    },
  },
});

export const {
  addTask,
  createList,
  deleteList,
  deleteTask,
  doneTask,
  showListContent,
  updateListTitle,
} = listsSlice.actions;

export default listsSlice.reducer;
