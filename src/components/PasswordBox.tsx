import { useState } from 'react';
import { Services } from '../types';
import './PasswordBox.css';

type PasswordBoxProps = {
  changeRegisteredServices: (services: Services[]) => void;
  registeredServices: Services[];
  item: Services;
};

function PasswordBox(props: PasswordBoxProps) {
  const { changeRegisteredServices, registeredServices, item } = props;

  const [check, setCheck] = useState(false);

  const handleDelete = (element: Services) => {
    const ar = registeredServices.filter((s) => s !== element);
    changeRegisteredServices(ar);
  };

  const handleCheckbox = () => {
    setCheck(!check);
  };

  const turnPassword = (str: string) => {
    const splitted = str.split('');
    const ar = splitted.map((letter) => {
      letter = '*';
      return letter;
    });

    return ar.join('');
  };

  return (
    <div className="password-box">
      <div className="password-left">
        <img src="/images/icon-lock.jpg" alt="Cadeado Fechado Icon" />
        <p>Login</p>
        <hr />
        <p>Senha</p>
        <hr />
        <label>
          Esconder senhas
          <input
            type="checkbox"
            checked={ check }
            onChange={ handleCheckbox }
          />
        </label>
      </div>
      <div className="password-right">
        <a href={ item.serviceUrl }>
          <span><img src="/images/icon-link-2.jpg" alt="Link Icon" /></span>
          {item.serviceName}
        </a>
        <p>{item.serviceLogin}</p>
        {check && <p className="show-password">{turnPassword(item.servicePassword)}</p>}
        {check === false && <p className="show-password">{item.servicePassword}</p>}
        <button
          data-testid="remove-btn"
          onClick={ () => handleDelete(item) }
        >
          <img src="images/iconsax-bold-trash.svg" alt="Lixeira Vermelha Icon" />
        </button>
      </div>
    </div>
  );
}

export default PasswordBox;
