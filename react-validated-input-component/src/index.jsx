import React from 'react';
import ReactDOM from 'react-dom/client';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  getIconName() {
    const passwordInput = this.state.password;
    if (passwordInput.length === 0 || passwordInput.length < 8) {
      return 'fa-x';
    } else {
      return 'fa-check';
    }
  }

  getMessage() {
    const passwordInput = this.state.password;

    if (passwordInput.length === 0) { return 'A password is required.'; }
    if (passwordInput.length < 8) { return 'Your password is too short.'; }
    if (passwordInput.length >= 8) {
      const number = /\d/;
      const capLetter = /\[A-Z]/;
      const symbol = /[!@#$%^&*()]/;
      if (passwordInput.search(number) === -1) {
        return 'Your password must contain at least 1 integer.';
      } else if (passwordInput.search(capLetter) === -1) {
        return 'Your password must contain at least 1 capital letter.';
      } else if (passwordInput.search(symbol) === -1) {
        return 'Your password must contain at least 1 symbol.';
      } else {
        return '';
      }
    }
  }

  // requirePassword() {
  //   const passwordInput = this.state.password;
  //   const number = /\d/;
  //   const capLetter = /\[A-Z]/;
  //   const symbol = /[!@#$%^&*()]/;
  //   if (!passwordInput.test(number)) { return 'Your password must contain at least 1 integer.'; }
  //   if (!passwordInput.test(capLetter)) { return 'Your password must contain at least 1 capital letter.'; }
  //   if (!passwordInput.test(symbol)) { return 'Your password must contain at least 1 symbol.'; }
  // }

  render() {
    const iconName = this.getIconName();
    const message = this.getMessage();
    // const requirement = this.requirePassword();
    return (
      <form>
        <label className="label-text">
          Password
        <div className="mid-row">
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <i className={`fa-solid ${iconName}`}></i>
        </div>
        </label>
        <p>{message}</p>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PasswordInput />);
