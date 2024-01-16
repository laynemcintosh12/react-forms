import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "10", width = "10", color = "peachpuff") {
  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Width:");
  const backgroundInput = boxList.getByLabelText("Background Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const boxList = render(<BoxList />);

  // No boxes yet
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);

  // Expect to see a box
  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 10px;
    height: 10px;
    background: peachpuff;
  `);

  // Expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(1);

  // Uncomment the line below if you want to include form snapshot
  // expect(asFragment()).toMatchSnapshot();
});

it("can remove a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("X");

  // Click the remove button, and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
