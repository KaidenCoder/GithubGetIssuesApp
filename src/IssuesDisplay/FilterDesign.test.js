import { render, screen } from '@testing-library/react';
import FilterDesign from './FilterDesign';

test('placeholder text', () => {
  render(<FilterDesign />);
  const linkElement = screen.getByPlaceholderText('is:issue is:open')
  expect(linkElement).toBeInTheDocument();
});
