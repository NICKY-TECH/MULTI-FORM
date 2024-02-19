import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import pageNumber from "./features/page.ts";
import planOption from "./features/planOption.ts";
import addOn from "./features/addOn.ts";
import selectedPlan from "./features/selectedPlan.ts";
import submitForm from "./features/isSubmitted.ts";
import planValue from "./features/plan.ts"

const store = configureStore({
  reducer: {
    pageNumber,
    planOption,
    addOn,
    selectedPlan,
    planValue,
    submitForm
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
