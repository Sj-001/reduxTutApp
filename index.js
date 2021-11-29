// import redux from "redux";
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

{
  type: BUY_CAKE;
  info: "First redux action";
}

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// (previousState, action) => newState

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();