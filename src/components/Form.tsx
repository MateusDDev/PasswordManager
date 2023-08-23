import React, { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';
import Fields from './Fields';

function Form() {
  const [show, setShow] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const elevateService = (str: string) => {
    setService(str);
  };

  const elevateLogin = (str: string) => {
    setLogin(str);
  };

  const elevatePassword = (str: string) => {
    setPassword(str);
  };

  const handleClick = () => {
    setShow(!show);
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
        <Fields
          changeService={ elevateService }
          changeLogin={ elevateLogin }
          changePassword={ elevatePassword }
          service={ service }
          login={ login }
          password={ password }
        />
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
