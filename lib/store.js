import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosSlice from "./features/todos/todosSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: todosSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

const exportObj = { store, persistor };
export default exportObj;
