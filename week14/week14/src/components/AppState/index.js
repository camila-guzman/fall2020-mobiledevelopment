// create store/state
let state = {
  count: 0,
  goal: -1,
};

// create reducer with at least two action types per property value
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    case "goal-reached":
      return { goal: (state.goal = 1) };
    case "goal-not-reached":
      return { goal: (state.goal = 0) };
    default:
      throw new Error();
  }
}

export { state, reducer };
