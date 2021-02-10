import React from 'react';
import {
  Form,
  FormSection1,
  FormSection2,
  FormMessage,
} from '../styles/FormStyles';
import useEmail from '../utilities/useEmail';
import useForm from '../utilities/useForm';

export default function EmailForm() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
    mapleSyrup: '',
  });
  const { sendMail, loading, error, message } = useEmail({ values });

  // if their is a message, ie. 'email sent' display message
  if (message) {
    return <FormMessage>{message}</FormMessage>;
  }

  return (
    <Form onSubmit={sendMail}>
      {error ? <FormMessage>{error}</FormMessage> : ''}
      <FormSection1>
        <input
          disabled={loading}
          className="mapleSyrup"
          type="mapleSyrup"
          name="mapleSyrup"
          id="mapleSyrup"
          value={values.mapleSyrup}
          onChange={updateValue}
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            disabled={loading}
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            disabled={loading}
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            disabled={loading}
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            onChange={updateValue}
          />
        </div>
      </FormSection1>
      <FormSection2>
        <label htmlFor="message">Message</label>
        <textarea
          disabled={loading}
          name="message"
          id="message"
          value={values.message}
          onChange={updateValue}
        />
        <button type="submit">{loading ? 'Loading...' : 'Send'}</button>
      </FormSection2>
    </Form>
  );
}
