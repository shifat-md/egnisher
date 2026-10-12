import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

describe('Phase 2 Extended Routes & Slug Fallbacks', () => {
  it('renders Service Detail for valid slug', () => {
    render(
      <MemoryRouter initialEntries={['/services/full-stack-web-development']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: 'Full-Stack Web Development', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Our Development Approach/i)).toBeInTheDocument();
  });

  it('renders graceful fallback for unknown service slug', () => {
    render(
      <MemoryRouter initialEntries={['/services/unknown-service-xyz']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Service Not Found/i)).toBeInTheDocument();
  });

  it('renders Portfolio Detail for valid slug', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio/cloudscale-analytics-dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /CloudScale Real-Time Analytics Dashboard/i, level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Our Solution & Technical Approach/i)).toBeInTheDocument();
  });

  it('renders graceful fallback for unknown portfolio slug', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio/unknown-project-xyz']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Case Study Not Found/i)).toBeInTheDocument();
  });

  it('renders Blog Article for valid slug', () => {
    render(
      <MemoryRouter initialEntries={['/blog/architecting-scalable-react-applications-2025']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /Building Scalable React Applications/i, level: 1 })
    ).toBeInTheDocument();
  });

  it('renders graceful fallback for unknown blog slug', () => {
    render(
      <MemoryRouter initialEntries={['/blog/unknown-post-xyz']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Article Not Found/i)).toBeInTheDocument();
  });

  it('renders FAQ page with accordion items at "/faq"', () => {
    render(
      <MemoryRouter initialEntries={['/faq']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: 'Frequently Asked Questions', level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/What types of projects does Egnisher specialize in\?/i)
    ).toBeInTheDocument();
  });

  it('renders Careers page at "/careers"', () => {
    render(
      <MemoryRouter initialEntries={['/careers']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /Join the Egnisher Developer Collective/i, level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/Senior React \/ Full-Stack Developer/i).length
    ).toBeGreaterThan(0);
  });

  it('renders Process page at "/process"', () => {
    render(
      <MemoryRouter initialEntries={['/process']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: /Predictable, Transparent Software Delivery/i, level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/Discovery & Planning/i).length
    ).toBeGreaterThan(0);
  });

  it('renders Legal policy page at "/legal/privacy-policy"', () => {
    render(
      <MemoryRouter initialEntries={['/legal/privacy-policy']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', { name: 'Privacy Policy', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Legal Draft Notice/i)).toBeInTheDocument();
  });

  it('renders graceful fallback for unknown legal policy slug', () => {
    render(
      <MemoryRouter initialEntries={['/legal/non-existent-policy']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Policy Document Not Found/i)).toBeInTheDocument();
  });
});
