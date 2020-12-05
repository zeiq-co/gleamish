/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Add custom css or scripts here */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
          />
          <script
            defer
            src="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <script src="/js/scripts.js" />
          {/* Add custom css or scripts here */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};
