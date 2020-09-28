import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import EmailForm from '../components/EmailForm';

const Container = styled.section`
  justify-content: center;
  align-items: top;
  height: 100%;
  font-weight: bold;
  overflow-y: auto;
`;
const GreyArea = styled.div`
  display: grid;
  grid-gap: 30px;
  height: 80%;
  max-height: 600px;
  min-height: 500px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'contact map'
    'form form';
  /* max-width: 1300px; */
  background-color: var(--lightGrey);
  margin: 10vh 10vw 0 10vw;
  padding: 30px;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'contact'
      'form'
      'map';
    width: 100vw;
    margin: 0;
    padding: 10vw;
    padding-top: 30px;
    background-color: #00000000;
  }
  @media (max-width: 480px) {
    margin: 0;
    padding: 5vw;
    width: 100vw;
  }
`;
const ContactInfo = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  grid-area: contact;
  padding-left: 2rem;
  line-height: 3rem;
  font-size: 2rem;
  background-color: var(--lightGrey);
`;
const Maps = styled.div`
  grid-area: map;
  background-color: var(--lightGrey);
  @media (max-width: 770px) {
    height: 250px;
    padding-bottom: 30px;
  }
`;
const Form = styled.div`
  grid-area: form;
  align-self: end;
  /* background-color: var(--lightGrey); */
`;

export default function Contact() {
  return (
    <Layout>
      <Container>
        <GreyArea>
          <ContactInfo>
            Launch Pad Creative
            <br />
            351 Carson Drive
            <br />
            Kitchener, On
            <br />
          </ContactInfo>
          <Maps>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.0014647942376!2d-80.45018255848193!3d43.46056661085598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8b517f22d729%3A0x3b6fd266d2e3745d!2s351%20Carson%20Dr%2C%20Kitchener%2C%20ON%20N2B%202W3!5e0!3m2!1sen!2sca!4v1595794074216!5m2!1sen!2sca"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              // tabindex="0"
            />
          </Maps>
          <Form>
            <EmailForm />
          </Form>
        </GreyArea>
      </Container>
    </Layout>
  );
}
