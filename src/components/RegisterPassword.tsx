import { useState } from 'react';
import { Services } from '../types';

type RegisterPasswordProps = {
  changeShow: (bol: boolean) => void;
  changeRegisteredServices: (services: Services[]) => void;
  registeredServices: Services[];
};

function RegisterPassword(props: RegisterPasswordProps) {
  const [check, setCheck] = useState(false);

  const { changeShow, changeRegisteredServices, registeredServices } = props;

  const handleClick = () => {
    changeShow(false);
  };

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
    <div>
      <button onClick={ handleClick }>Cadastrar nova senha</button>
      {registeredServices.length <= 0 && (<p>nenhuma senha cadastrada</p>)}
      {registeredServices.length > 0 && registeredServices.map((item, index) => (
        <div key={ index }>
          <a href={ item.serviceUrl }>{item.serviceName}</a>
          <p>{item.serviceLogin}</p>
          <div>
            {check && <p>{turnPassword(item.servicePassword)}</p>}
            {check === false && <p>{item.servicePassword}</p>}
            <label>
              Esconder senhas
              <input
                type="checkbox"
                checked={ check }
                onChange={ handleCheckbox }
              />
            </label>
          </div>
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

export default RegisterPassword;
