import React, { useState } from 'react';
import Swal from 'sweetalert2';
import PasswordDisplay from './PasswordDisplay';
import Fields from './Fields';
import { Services } from '../types';
import RegisterPassword from './RegisterPassword';
import './Form.css';

function Form() {
  const [show, setShow] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [registeredServices, setRegisteredServices] = useState<Services[]>([]);

  const elevateShow = (bol: boolean) => {
    setShow(bol);
  };

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

  const elevateRegisteredServices = (services: Services[]) => {
    setRegisteredServices(services);
  };

  const clearForm = () => {
    setService('');
    setLogin('');
    setPassword('');
    setUrl('');
    setShow(!show);
  };

  const fireAlert = () => {
    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
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
    fireAlert();
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
      <RegisterPassword
        changeShow={ elevateShow }
        changeRegisteredServices={ elevateRegisteredServices }
        registeredServices={ registeredServices }
      />
    );
  }

  return (
    <main>
      <div className="main-section">
        <Fields
          changeService={ elevateService }
          changeLogin={ elevateLogin }
          changePassword={ elevatePassword }
          changeUrl={ elevateUrl }
          changeShow={ elevateShow }
          changeRegisteredServices={ handleRegisteredServices }
          service={ service }
          login={ login }
          password={ password }
          url={ url }
          isChecked={ isChecked }
          show={ show }
        />
        <PasswordDisplay
          max={ passwordChecks.keyPasswordMaxLength }
          min={ passwordChecks.keyPasswordMinLength }
          specialChar={ passwordChecks.keyPasswordSpecial }
          alphanumeric={ passwordChecks.keyPasswordAlphanumeric }
        />
      </div>
    </main>
  );
}

export default Form;
