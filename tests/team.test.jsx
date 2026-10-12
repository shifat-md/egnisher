import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from '../src/pages/About';

describe('Team Pagination & Display', () => {
  it('renders initial team members on page 1', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    expect(screen.getByText('Marcus Vance')).toBeInTheDocument();
    expect(screen.getByText('Elena Rostova')).toBeInTheDocument();
    expect(screen.getByText('David Kim')).toBeInTheDocument();
    expect(screen.getByText('Sophia Martinez')).toBeInTheDocument();

    // 5th member should not be visible on page 1
    expect(screen.queryByText('Liam Chen')).not.toBeInTheDocument();
  });

  it('navigates to page 2 when clicking page 2 button', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const page2Button = screen.getByRole('button', { name: 'Page 2' });
    fireEvent.click(page2Button);

    // Liam Chen and Amara Okafor should now be displayed
    expect(screen.getByText('Liam Chen')).toBeInTheDocument();
    expect(screen.getByText('Amara Okafor')).toBeInTheDocument();

    // Page 1 members should not be displayed
    expect(screen.queryByText('Marcus Vance')).not.toBeInTheDocument();
  });

  it('disables previous button on page 1 and next button on last page', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const prevBtn = screen.getByRole('button', { name: /Previous Page/i });
    expect(prevBtn).toBeDisabled();

    // Click next page
    const nextBtn = screen.getByRole('button', { name: /Next Page/i });
    expect(nextBtn).not.toBeDisabled();
    fireEvent.click(nextBtn);

    // Now on last page (page 2 of 2)
    expect(nextBtn).toBeDisabled();
    expect(prevBtn).not.toBeDisabled();
  });
});
