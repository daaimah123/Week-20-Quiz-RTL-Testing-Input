import React from 'react';
import ChangeInput from '../ChangeInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('displays the correct greeting', () => {
  // set a rendered `ChangenInput` to a deconstructed `getByLabelText` and `getByTestId`
  const { getByLabelText, getByTestId } = render(<ChangeInput />);
  // set `input` variable to label text "user-name"
  const input = getByLabelText("user-name");
  // set `greeting` variable to ID "change-input-greeting"
  const greeting = getByTestId("change-input-greeting");
  // assert that expected input value should be empty
  expect(input.value).toBe("");
  // assert that expected greeting text should be "Welcome, Anonymous User!"
  expect(greeting.textContent).toBe("Welcome, Anonymous User!")
  // simulate a change input event where text value is changed
  fireEvent.change(input, { target: { value: "Rafael" }});
  // verify that the changed input value text is as expected
  expect(input.value).toBe("Rafael");
  // verify that the greeting text has replaced "Anonymous User" with the changed input value
  expect(greeting.textContent).toBe("Welcome, Rafael!");
});