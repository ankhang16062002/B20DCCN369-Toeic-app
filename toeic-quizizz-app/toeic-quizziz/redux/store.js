import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import settingsReducer from "./slices/settings";
import quizReducer from "./slices/quiz";
import statsReducer from "./slices/stats";

const statsPersistConfig = {
  key: "stats",
  storage: AsyncStorage,
};

const settingsPersistConfig = {
  key: "settings",
  storage: AsyncStorage,
};

const reducers = combineReducers({
  settings: persistReducer(settingsPersistConfig, settingsReducer),
  quiz: quizReducer,
  stats: persistReducer(statsPersistConfig, statsReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
