const reducer = (state, action = { type: "" }) => {
  if (action.type == "INC") {
    state = state + action.count;
  } else if (action.type === "DEC") {
    state = state - action.count;
  } else {
    state = 0;
  }

  return state;
}

export default reducer;

//From reducer function whatever we retuen it will be updated in the state.