import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-areas: 'form1 form2';
  grid-gap: 30px;
  height: auto;
  width: 100%;
  input,
  label,
  textarea,
  button {
    width: 100%;
    display: block;
    font-size: 1.4rem;
  }
  input,
  textarea,
  button {
    background: var(--lightGrey);
    border: 1px solid var(--black);
  }
  input,
  button {
    height: 4rem;
  }
  input,
  textarea {
    padding: 1em;
    font-family: inherit;
    letter-spacing: 2px;
    color: var(--white);
  }
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    background-color: var(--lightBrown);
  }
  input:hover,
  textarea:hover,
  button:hover {
    border: 1.5px solid var(--brightBlue);
  }

  label {
    padding: 1em;
    padding-bottom: 0.25em;
  }
  button {
    color: var(--red);
    background-color: var(--white);
    margin-top: 1rem;
    font-weight: bold;
  }
  @media (max-width: 770px) {
    grid-template-areas:
      'form1'
      'form2';
    grid-gap: 0;
  }
`;

const Form1 = styled.div`
  grid-area: form1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;
const Form2 = styled.div`
  grid-area: form2;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default function EmailForm() {
  return (
    <Form>
      <Form1>
        <div>
          <label>Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
      </Form1>
      <Form2>
        <label>Message</label>
        <textarea name="message" id="message">
          Email Form is Temporarily Out of Order
        </textarea>
        <button type="submit">Send</button>
      </Form2>
    </Form>
  );
}
