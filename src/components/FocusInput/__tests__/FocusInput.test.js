import React from 'react';
import FocusInput from '../FocusInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('FocusInput matches snapshot', () => {
  // set a rendered `ChangenInput` to a deconstructed `container`
  const { container } = render(<FocusInput />)
  // verify that the first instance of the component in the container matches the populated snapshot
  expect(container.firstChild).toMatchSnapshot();
});

test('clicking on button trigger focus on input', () => {
  // set a rendered `ChangenInput` to a deconstructed `getByPlaceholderText` and `getByText`
  const { getByPlaceholderText, getByText } = render(<FocusInput />)
  // simulate a click event on button text "Click to Focus"
  fireEvent.click(getByText("Click to Focus"));
  // verify that the active element within the document has the text "Focus me!"
  expect(document.activeElement).toBe(getByPlaceholderText('Focus me!'));
});