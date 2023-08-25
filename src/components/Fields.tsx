import React, { useState } from 'react';
import './Fields.css';

type FieldsProps = {
  changeService: (param: string) => void;
  changeLogin: (param: string) => void;
  changePassword: (param: string) => void;
  changeUrl: (param: string) => void;
  changeShow: (param: boolean) => void;
  changeRegisteredServices: (e: React.MouseEvent<HTMLButtonElement,
  MouseEvent>) => void;
  service: string;
  login: string;
  password: string;
  url: string;
  show: boolean;
  isChecked: boolean;
};

function Field(props: FieldsProps) {
  const [type, setType] = useState('password');

  const {
    changeService, changeLogin,
    changePassword, changeUrl,
    changeShow, changeRegisteredServices, show,
    service, login,
    password, url, isChecked } = props;

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

  const handleUrlType = () => {
    if (type === 'password') {
      setType('text');
    } else if (type === 'text') {
      setType('password');
    }
  };

  return (
    <form className="fields">
      <label>
        Nome do serviço
        <input
          type="text"
          value={ service }
          onChange={ handleService }
        />
      </label>

      <div className="fields-container">
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
            type={ type }
            value={ password }
            onChange={ handlePassword }
          />
          <button
            type="button"
            data-testid="show-hide-form-password"
            onClick={ handleUrlType }
          >
            {type === 'password' ? 'Exibir Senha' : 'Ocultar senha'}
          </button>
        </label>
      </div>

      <label>
        URL
        <input
          type="text"
          value={ url }
          onChange={ handleUrl }
        />
      </label>

      <div className="fields-buttons">
        <button
          className="cancel-button"
          onClick={ () => changeShow(!show) }
        >
          Cancelar
        </button>
        <button
          disabled={ !isChecked }
          onClick={ changeRegisteredServices }
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}

export default Field;
