import React, { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';

function Form() {
  const [show, setShow] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setShow(!show);
  };

  const handleService = (event: React.ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const passwordChecks = {
    keyService: service.length > 0,
    keyLogin: login.length > 0,
    keyPasswordMaxLength: password.length <= 16,
    keyPasswordMinLength: password.length >= 8,
    keyPasswordSpecial: /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
    keyPasswordAlphanumeric: /[a-zA-Z]/.test(password) && /[0-9]/.test(password),
  };

  const isChecked = Object.values(passwordChecks).every((key) => key === true);

  if (show === true) {
    return (
      <div>
        <button onClick={ handleClick }>Cadastrar nova senha</button>
      </div>
    );
  }

  return (
    <>
      <form>
        <label>
          Nome do serviço
          <input type="text" onChange={ handleService } />
        </label>

        <label>
          Login
          <input type="text" onChange={ handleLogin } />
        </label>

        <label>
          Senha
          <input type="password" onChange={ handlePassword } />
        </label>

        <label>
          URL
          <input type="text" />
        </label>

        <button disabled={ !isChecked }>Cadastrar</button>
        <button onClick={ handleClick }>Cancelar</button>
      </form>
      <PasswordDisplay
        max={ passwordChecks.keyPasswordMaxLength }
        min={ passwordChecks.keyPasswordMinLength }
        specialChar={ passwordChecks.keyPasswordSpecial }
        alphanumeric={ passwordChecks.keyPasswordAlphanumeric }
      />
    </>
  );
}

export default Form;
