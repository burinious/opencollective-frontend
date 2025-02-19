import React, { Component, Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import StripeProvider from '../src/components/StripeProvider';
import theme from '../src/constants/theme';
import { IntlProvider } from 'react-intl';

const StyleguideGlobalStyles = createGlobalStyle`
  body {
    font-size: 14px;
  }
`;

const STRIPE_KEY = process.env.STRIPE_KEY || 'pk_test_5aBB887rPuzvWzbdRiSzV3QB';

export default class ThemeWrapper extends Component {
  render() {
    return (
      <Fragment>
        <StyleguideGlobalStyles />
        <ThemeProvider theme={theme}>
          <IntlProvider locale="en">
            <StripeProvider token={STRIPE_KEY} loadOnMount>
              {this.props.children}
            </StripeProvider>
          </IntlProvider>
        </ThemeProvider>
      </Fragment>
    );
  }
}
