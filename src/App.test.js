import { render, screen } from '@testing-library/react';
import Presentation from './Presentation/Presentation';

test('renders learn react link', () => {
  render(<Presentation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
