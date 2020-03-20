import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  it('renders Form element', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('ContactForm')).toBeInTheDocument();
  });
});
