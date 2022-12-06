import store from "./app/store.js";
import { cakeSlice } from "./features/cakeSlice.js";
import { iceCreamSlice } from "./features/iceCreamSlice.js";
import { fetchUsers, userSlice } from "./features/userSlice.js";

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State ", store.getState());
});

// store.dispatch(cakeSlice.actions.ordered());
// store.dispatch(cakeSlice.actions.ordered());
// store.dispatch(cakeSlice.actions.ordered());
// store.dispatch(cakeSlice.actions.restocked(3));

// store.dispatch(iceCreamSlice.actions.ordered());
// store.dispatch(iceCreamSlice.actions.ordered());
// store.dispatch(iceCreamSlice.actions.ordered());
// store.dispatch(iceCreamSlice.actions.restocked(3));

store.dispatch(fetchUsers());

unsubscribe();
