import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Portfolio from '../src/pages/Portfolio';
import { portfolioData } from '../src/data/portfolioData';

describe('Portfolio Filtering & Interaction', () => {
  it('renders all initial projects when "All" is active', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    // Should display all projects
    portfolioData.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('filters projects dynamically when a category filter is clicked', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    // Click on 'E-commerce' filter
    const ecommerceBtn = screen.getByRole('button', { name: /^E-commerce$/i });
    fireEvent.click(ecommerceBtn);

    // Should show NordicCraft
    expect(
      screen.getByText(/NordicCraft Headless E-commerce Store/i)
    ).toBeInTheDocument();

    // Should NOT show CloudScale (which is Full-Stack)
    expect(
      screen.queryByText(/CloudScale Real-Time Analytics Dashboard/i)
    ).not.toBeInTheDocument();
  });

  it('resets to show all projects when "All Projects" is clicked', () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    // Click Frontend filter first
    const frontendBtn = screen.getByRole('button', { name: /^Frontend$/i });
    fireEvent.click(frontendBtn);

    expect(
      screen.getByText(/PulseFlow API Management Portal/i)
    ).toBeInTheDocument();

    // Now click All Projects
    const allBtn = screen.getByRole('button', { name: /All Projects/i });
    fireEvent.click(allBtn);

    // All should be back
    expect(
      screen.getByText(/CloudScale Real-Time Analytics Dashboard/i)
    ).toBeInTheDocument();
  });
});
