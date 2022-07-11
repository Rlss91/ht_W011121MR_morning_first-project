import { createSlice } from "@reduxjs/toolkit";

// create variable that we want redux to store for us
const initalDateState = {
  date: new Date(),
};

/*
    this is a redux toolkit pattern to create the store for redux it self
    redux toolkit also create reducres/actions to manipulate the state.
*/
const dateSlice = createSlice({
  //for redux use
  name: "date",
  //initial state
  initialState: initalDateState,
  //functions to munipuldate the state
  //the functions inside the reducers called actions.
  reducers: {
    //we will call this function when use logged in
    //to update the loggedIn state
    setNewDate(state) {
      state.date = new Date();
    },
  },
});

//export the actions so we can use them from other components/pages
//to update the state
export const dateActions = dateSlice.actions;

//export the configuration/state/actions to the index.js of redux
//so redux can configure the state
export default dateSlice.reducer;
