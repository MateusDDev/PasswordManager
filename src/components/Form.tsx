import React, { useState } from 'react';
import PasswordDisplay from './PasswordDisplay';
import Fields from './Fields';
import { Services } from '../types';

function Form() {
  const [show, setShow] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [registeredServices, setRegisteredServices] = useState<Services[]>([]);

  const elevateService = (str: string) => {
    setService(str);
  };

  const elevateLogin = (str: string) => {
    setLogin(str);
  };

  const elevatePassword = (str: string) => {
    setPassword(str);
  };

  const elevateUrl = (str: string) => {
    setUrl(str);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleDelete = (element: Services) => {
    const ar = registeredServices.filter((s) => s !== element);
    setRegisteredServices(ar);
  };

  const handleRegisteredServices = (e: React.MouseEvent<HTMLButtonElement,
  MouseEvent>) => {
    const serviceObj = {
      serviceName: service,
      serviceLogin: login,
      servicePassword: password,
      serviceUrl: url,
    };

    e.preventDefault();
    setRegisteredServices([...registeredServices, serviceObj]);
    clearForm();
  };

  const clearForm = () => {
    setService('');
    setLogin('');
    setPassword('');
    setUrl('');
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
        {registeredServices.length <= 0 && (<p>nenhuma senha cadastrada</p>)}
        {registeredServices.length > 0 && registeredServices.map((item, index) => (
          <div key={ index }>
            <a href={ item.serviceUrl }>{item.serviceName}</a>
            <p>{item.serviceLogin}</p>
            <p>{item.servicePassword}</p>
            <button
              data-testid="remove-btn"
              onClick={ () => handleDelete(item) }
            >
              Apagar Serviço
            </button>
          </div>
        ))}
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
          changeUrl={ elevateUrl }
          service={ service }
          login={ login }
          password={ password }
          url={ url }
        />
        <button
          disabled={ !isChecked }
          onClick={ handleRegisteredServices }
        >
          Cadastrar
        </button>
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
