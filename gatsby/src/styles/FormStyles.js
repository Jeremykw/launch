import styled from 'styled-components';

export const FormMessage = styled.div`
  display: grid;
  grid-area: form_error;
  align-content: center;
  justify-content: center;
  font-size: 1.5rem;
  background-color: var(--brown);
  color: var(--white);
  @media (max-width: 770px) {
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-area: form;
  align-self: end;
  grid-template-areas:
    'form_error form_error'
    'form1 form2';
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
  .mapleSyrup {
    display: none;
  }
  @media (max-width: 770px) {
    grid-template-areas:
      'form1'
      'form_error'
      'form2';
    grid-gap: 0;
  }
`;

export const FormSection1 = styled.div`
  grid-area: form1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const FormSection2 = styled.div`
  grid-area: form2;
  display: grid;
  grid-template-rows: auto 1fr;
`;
