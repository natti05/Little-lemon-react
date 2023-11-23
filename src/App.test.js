import { render, screen } from '@testing-library/react';
import Reservation from './assets/components/Reservation';

test('Renders the Reservation Form heading', () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});