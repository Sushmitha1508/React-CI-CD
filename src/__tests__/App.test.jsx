import {render, screen} from '@testing-library/react';
import App from '../App';
import { fireEvent } from '@testing-library/react';

test('renders vite and react text', () => { 
    render(<App />);
    const headerElement = screen.getByText(/Get/i);
    expect(headerElement).toBeInTheDocument();
});

test('renders the count button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Count is 0/i );
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Count is 2');
});