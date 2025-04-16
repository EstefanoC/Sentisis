import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TableComponent from "./index.tsx";
import { Data } from "../../utils/data";

// Types
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

describe("TableComponent", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      units: {
        unitsById: {},
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders table columns", () => {
    render(
      <Provider store={store}>
        <TableComponent />
      </Provider>
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Release date")).toBeInTheDocument();
    expect(screen.getByText("Unit")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
  });

  test("renders data rows", () => {
    render(
      <Provider store={store}>
        <TableComponent />
      </Provider>
    );

    Data.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("opens modal on row click", () => {
    render(
      <Provider store={store}>
        <TableComponent />
      </Provider>
    );

    const firstRow = screen.getByText(Data[0].title);
    fireEvent.click(firstRow);

    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("cart button is not shown when no units", () => {
    render(
      <Provider store={store}>
        <TableComponent />
      </Provider>
    );

    expect(screen.queryByText("Cart")).not.toBeInTheDocument();
  });

  test("cart button is shown when units exist", () => {
    store = mockStore({
      units: {
        unitsById: {
          [Data[0].id]: 2,
        },
      },
    });
    render(
      <Provider store={store}>
        <TableComponent />
      </Provider>
    );

    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
