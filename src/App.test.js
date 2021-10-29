import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('main test suite', () => {
  test('renders all components', () => {
    render(<App />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test("adds new task", () => {
    render(<App/>);
    const box = screen.getByRole('textbox');
    fireEvent.change(box, {
        target: {value: 'test task'}
    });
    const button = screen.getByRole('button');
    fireEvent.click(button, {});
    expect(screen.getByText('test task')).toBeInTheDocument();
  })
})
