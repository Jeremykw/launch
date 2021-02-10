import React, { useState } from 'react';

export default function useEmail({ values }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function sendMail(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/sendEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const text = JSON.parse(await res.text());
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage(
        'Your message has been sent to one of the Launch Pad developers!'
      );
    }
  }

  return {
    sendMail,
    loading,
    error,
    message,
  };
}
