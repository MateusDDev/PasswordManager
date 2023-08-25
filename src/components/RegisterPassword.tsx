import { Services } from '../types';
import './RegisterPassword.css';
import PasswordBox from './PasswordBox';

type RegisterPasswordProps = {
  changeShow: (bol: boolean) => void;
  changeRegisteredServices: (services: Services[]) => void;
  registeredServices: Services[];
};

function RegisterPassword(props: RegisterPasswordProps) {
  const { changeShow, changeRegisteredServices, registeredServices } = props;

  const elevateRegisteredServices = (services: Services[]) => {
    changeRegisteredServices(services);
  };

  const handleClick = () => {
    changeShow(false);
  };

  return (
    <section className="register-section">
      <button onClick={ handleClick }>Cadastrar nova senha</button>
      <hr />
      {registeredServices.length <= 0 && (<p>Não há nenhuma senha cadastrada...</p>)}
      <img src="/images/icon-unlock.png" alt="Icon Cadeado" />
      <div className="register-passwords-list">
        {registeredServices.length > 0 && registeredServices.map((item, index) => (
          <PasswordBox
            key={ index }
            changeRegisteredServices={ elevateRegisteredServices }
            registeredServices={ registeredServices }
            item={ item }
          />
        ))}
      </div>
    </section>
  );
}

export default RegisterPassword;
