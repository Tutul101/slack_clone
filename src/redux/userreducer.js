const initialState = [
  {
    user: null,
  },
];
const userreducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      const newState = { user: action.payload };
      state = [...state, newState];
      return state;
    }
    default: {
      return state;
    }
  }
};
export default userreducer;
