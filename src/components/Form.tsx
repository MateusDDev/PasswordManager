import React, { useState } from 'react';

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

  const isChecked = () => {
    const checks = {
      keyService: service.length > 0,
      keyLogin: login.length > 0,
      keyPassword: password.length >= 8 && password.length <= 16,
      keyPasswordSpecial: /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
      keyPasswordLetterNumber: /[a-zA-Z]/.test(password) && /[0-9]/.test(password),
    };

    return Object.values(checks).every((key) => key === true);
  };

  console.log(isChecked());

  if (show === true) {
    return (
      <div>
        <button onClick={ handleClick }>Cadastrar nova senha</button>
      </div>
    );
  }

  return (
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

      {isChecked() ? <button>Cadastrar</button> : <button disabled>Cadastrar</button>}
      <button onClick={ handleClick }>Cancelar</button>
    </form>
  );
}

export default Form;
