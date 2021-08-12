import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
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
          <CustomButton type="submit">Iniciar sesión</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;