import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../../images/hauskey/hauskey_logo.svg';

export default function SEO({ children }) {
  return (
    <Helmet>
      <html lang="en" />
      <title>Home | Hausekey</title>
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <meta
        name="description"
        content="Hausekey, Your Pre-Construction Condo Marketplace. Earn up to 3% Cash Back"
      />
      <link rel="icon" href={Logo} />

      {children}
    </Helmet>
  );
}
