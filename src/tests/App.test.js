import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


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
  });

  test("add multiple tasks", () => {
    render(<App/>);
    const box = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(box, {
        target: {value: 'test task'}
    });
    fireEvent.click(button, {});
    fireEvent.change(box, {
      target: {value: 'test task 2'}
    });
    fireEvent.click(button, {});
    expect(screen.getByText('test task')).toBeInTheDocument();
    expect(screen.getByText('test task 2')).toBeInTheDocument();
  });

  test("complete a task", () => {
    render(<App/>);
    const box = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(box, {
        target: {value: 'test task to be deleted'}
    });
    fireEvent.click(button, {});
    fireEvent.change(box, {
      target: {value: 'test task to be preserved'}
    });
    fireEvent.click(button, {});
    expect(screen.getByText('test task to be deleted')).toBeInTheDocument();
    expect(screen.getByText('test task to be preserved')).toBeInTheDocument();
    const completeButtons = screen.getAllByTestId('CheckBoxIcon');
    fireEvent.click(completeButtons[0], {})
    expect(screen.queryByText('test task to be deleted')).toBeNull();
    expect(screen.getByText('test task to be preserved')).toBeInTheDocument();
  });
})
