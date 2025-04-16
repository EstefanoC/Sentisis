import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import testStore from "./store/testStore";
import App from "./App";

// Types
import "@testing-library/jest-dom";

test("renders header text", () => {
  render(
    <Provider store={testStore}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/Estefano Chacón/i);
  expect(headerElement).toBeInTheDocument();
});
