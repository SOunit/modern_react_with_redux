import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '549099714827-ujmcj18mqjde2tfh4333bkjo78qkgv1p.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
