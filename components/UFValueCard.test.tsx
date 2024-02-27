// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UFValueCard } from '@/components/UFValueCard';
import { formatDate } from '@/utils/date';

describe('UFValueCard', () => {
  const mockDate: Date = new Date(2023, 0, 1);
  const formattedDate: string = formatDate(mockDate);

  it('should display loading indicator when loading', () => {
    render(<UFValueCard date={mockDate} ufValue={null} loading={true} />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  it('should display the UF value and the formatted date when not loading and ufValue is provided', () => {
    render(<UFValueCard date={mockDate} ufValue="30.000" loading={false} />);
    expect(screen.getByText('Valor de la UF')).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
    expect(screen.getByText('$ 30.000')).toBeInTheDocument();
  });

  it('should not render the component when not loading and ufValue is null', () => {
    const { container } = render(<UFValueCard date={mockDate} ufValue={null} loading={false} />);
    expect(container).toBeEmptyDOMElement();
  });
});
