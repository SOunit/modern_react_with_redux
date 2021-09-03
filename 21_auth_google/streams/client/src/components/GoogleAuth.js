import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '549099714827-ujmcj18mqjde2tfh4333bkjo78qkgv1p.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          if (this.auth) {
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
            this.auth.isSignedIn.listen(this.onAuthChange);
          }
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button'>
          <i className='google icon'></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui red google button'>
          <i className='google icon'></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
