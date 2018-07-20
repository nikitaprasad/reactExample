import React from 'react';
import ReactDOM from 'react-dom';
import { resolveDomElement, getPageProps } from './pageUtils';

export default function renderPage(ReactElement, domElement, props) {
  if (domElement) {
    if (typeof domElement === 'object' && !(domElement instanceof Element)) {
      props = domElement;
      domElement = null;
    }
  }
  domElement = resolveDomElement(domElement);

  if (!ReactElement) {
    throw new Error('No ReactElement used to render.');
  } else if (typeof ReactElement === 'function') {
    let pageProps = getPageProps(domElement);
    ReactElement = <ReactElement {...pageProps} {...props} />;
  }

  ReactDOM.render(
    ReactElement,
    domElement
  );
}
