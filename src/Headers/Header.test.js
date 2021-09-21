import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Text is present', () => {
  render(<Header/>);
  const linkElement = screen.getByText('octocat/Hello-World')
  expect(linkElement).toBeInTheDocument();
});
