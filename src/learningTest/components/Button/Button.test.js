import React from "react";
import { render } from '@testing-library/react-native'
import Button from "./Button";

test('should match with snapshot', () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
})

test('check number', () => {
    expect(5 + 6).toBe(9)
})