import { render, screen } from '@testing-library/react';
import App from './App';

test('main app', () => {
  render(<App/>);
  const linkElement = screen.getByTestId('main')
  expect(linkElement).toBeInTheDocument();
});
