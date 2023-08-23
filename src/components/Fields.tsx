import React from 'react';

type FieldsProps = {
  changeService: (param: string) => void;
  changeLogin: (param: string) => void;
  changePassword: (param: string) => void;
  changeUrl: (param: string) => void;
  service: string;
  login: string;
  password: string;
  url: string;
};

function Field(props: FieldsProps) {
  const {
    changeService, changeLogin,
    changePassword, changeUrl,
    service, login,
    password, url } = props;

  const handleService = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeService(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    changePassword(event.target.value);
  };

  const handleUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeUrl(event.target.value);
  };

  return (
    <>
      <label>
        Nome do serviço
        <input
          type="text"
          value={ service }
          onChange={ handleService }
        />
      </label>

      <label>
        Login
        <input
          type="text"
          value={ login }
          onChange={ handleLogin }
        />
      </label>

      <label>
        Senha
        <input
          type="password"
          value={ password }
          onChange={ handlePassword }
        />
      </label>

      <label>
        URL
        <input
          type="text"
          value={ url }
          onChange={ handleUrl }
        />
      </label>
    </>
  );
}

export default Field;