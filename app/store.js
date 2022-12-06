import redux from "@reduxjs/toolkit";
import { cakeSlice } from "../features/cakeSlice.js";
import { iceCreamSlice } from "../features/iceCreamSlice.js";
import reduxLogger from "redux-logger";
import { userSlice } from "../features/userSlice.js";
const logger = reduxLogger.createLogger();
const { configureStore } = redux;
const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    iceCream: iceCreamSlice.reducer,
    user: userSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
