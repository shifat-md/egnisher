import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('App Route Rendering & Navigation', () => {
  it('renders Home page hero headline at root route "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/We Build Digital Experiences That/i)
    ).toBeInTheDocument();
  });

  it('renders About page at "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/We are full-stack developers, designers, and web builders/i)
    ).toBeInTheDocument();
  });

  it('renders Services page at "/services"', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Comprehensive Full-Stack Web Development/i)
    ).toBeInTheDocument();
  });

  it('renders Portfolio page at "/portfolio"', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Case Studies & Delivered Web Projects/i)
    ).toBeInTheDocument();
  });

  it('renders Blog page at "/blog"', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Articles, Guides & Full-Stack Patterns/i)
    ).toBeInTheDocument();
  });

  it('renders Contact page at "/contact"', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Start Your Project With Egnisher/i)
    ).toBeInTheDocument();
  });

  it('renders 404 Not Found page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-random-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
