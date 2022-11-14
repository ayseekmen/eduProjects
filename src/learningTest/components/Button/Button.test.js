import React from "react";
import { render, fireEvent } from '@testing-library/react-native'
import Button from "./Button";

test('should match with snapshot', () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
    const testTitle = 'test';
    const comp = render(<Button title={testTitle} />);

    const buttonText = comp.getByTestId('button-title').children[0];
    expect(buttonText).toBe(testTitle);
})

test('should trigerr onPress', () => {
    const mockFunction = jest.fn()
    const comp = render(<Button onClick={mockFunction} />);

    const buttonTouchable = comp.getByTestId('button-touchable')
    fireEvent(buttonTouchable, 'press')

    expect(mockFunction).toBeCalled()
})