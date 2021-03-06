import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.emailSignInStart(email, password);
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>Ya tengo una cuenta</h2>
        <span>Inicia sesión con tu correo electrónico y contraseña</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} label="correo electrónico" handleChange={this.handleChange} required />
          <FormInput name="password" type="password" value={this.state.password} label="contraseña" handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit">Iniciar sesión</CustomButton>
            <CustomButton type="button" isGoogleSignIn onClick={this.props.googleSignInStart}>Iniciar con Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);