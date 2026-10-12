import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from '../src/pages/Blog';

describe('Blog Search, Filtering & Pagination', () => {
  it('renders initial blog posts and search input', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Search by topic, keyword, or title/i)).toBeInTheDocument();
  });

  it('filters articles when search input is typed', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search by topic, keyword, or title/i);
    fireEvent.change(searchInput, { target: { value: 'Microservices' } });

    expect(
      screen.getByText(/Microservices vs Modular Monoliths/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/Mastering Tailwind CSS/i)
    ).not.toBeInTheDocument();
  });

  it('displays empty state when search finds zero matches and allows filter reset', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Search by topic, keyword, or title/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistentqueryxyz123' } });

    expect(screen.getByText(/No matching articles found/i)).toBeInTheDocument();

    const resetBtn = screen.getByRole('button', { name: /Reset All Filters/i });
    fireEvent.click(resetBtn);

    // After reset, articles reappear
    expect(screen.queryByText(/No matching articles found/i)).not.toBeInTheDocument();
  });
});
