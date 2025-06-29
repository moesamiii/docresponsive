import { configureStore } from "@reduxjs/toolkit";
import specializationReducer, {
  fetchSpecializations,
} from "./specializationSlice";
import doctorsReducer, { fetchDoctors } from "./doctorsSlice";
import languageReducer from "./languageSlice";
import uiReducer from "./uiSlice"; //

const store = configureStore({
  reducer: {
    specializations: specializationReducer,
    doctors: doctorsReducer,
    language: languageReducer,
    ui: uiReducer,
  },
});

export function initializeStoreData() {
  store.dispatch(fetchDoctors());
  store.dispatch(fetchSpecializations());
}

export default store;
