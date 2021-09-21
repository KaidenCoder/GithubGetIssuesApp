import { render, screen } from '@testing-library/react';
import NavbarGithub from './NavbarGithub';

test('navbar app', () => {
  render(<NavbarGithub/>);
  const linkElement = screen.getByTestId('navbar')
  expect(linkElement).toBeInTheDocument();
});
