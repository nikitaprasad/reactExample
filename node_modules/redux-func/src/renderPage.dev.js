import React from 'react';
import { AppContainer } from 'react-hot-loader';
import renderPageImpl from './renderPage.prod';
import { resolveDomElement, getPageProps } from './pageUtils';

export default function renderPage(ReactElement, domElement, props) {
  if (domElement) {
    if (typeof domElement === 'object' && !(domElement instanceof Element)) {
      props = domElement;
      domElement = null;
    }
  }
  domElement = resolveDomElement(domElement);

  if (typeof ReactElement === 'function') {
    let pageProps = getPageProps(domElement);
    ReactElement = <ReactElement {...pageProps} {...props} />;
  }

  renderPageImpl(
    <AppContainer>
      {ReactElement}
    </AppContainer>,
    domElement
  );
}
