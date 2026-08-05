import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the site title and changes tabs', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /hamish sullivan/i })).toBeInTheDocument();
  expect(screen.getByText(/economist/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: /dsge notes/i }));
  expect(screen.getAllByText(/coming soon\./i)[0]).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: /experience/i }));
  expect(screen.getByText(/qualifications and work history/i)).toBeInTheDocument();
});
