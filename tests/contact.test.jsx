import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../src/components/forms/ContactForm';

describe('Contact Form Validation & Simulation', () => {
  it('displays validation errors when submitting an empty form', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Subject is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message content is required/i)).toBeInTheDocument();
  });

  it('validates email format properly', () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });

    const submitBtn = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/Please provide a valid email address/i)
    ).toBeInTheDocument();
  });

  it('validates message length minimum', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const messageInput = screen.getByLabelText(/Message & Project Details/i);

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Project Quote' } });
    fireEvent.change(messageInput, { target: { value: 'Too short' } }); // < 15 chars

    const submitBtn = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/Please provide at least 15 characters describing your project/i)
    ).toBeInTheDocument();
  });

  it('simulates submission successfully when inputs are valid', async () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const messageInput = screen.getByLabelText(/Message & Project Details/i);

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Project Scope' } });
    fireEvent.change(messageInput, {
      target: { value: 'We need a scalable React and Node.js application built.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Send Inquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(
      () => {
        expect(
          screen.getByText(/Message Simulated Successfully/i)
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
