import { useState } from 'react';

function Form() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

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
        <input type="text" />
      </label>

      <label>
        Login
        <input type="text" />
      </label>

      <label>
        Senha
        <input type="password" />
      </label>

      <label>
        URL
        <input type="text" />
      </label>

      <button>Cadastrar</button>
      <button onClick={ handleClick }>Cancelar</button>
    </form>
  );
}

export default Form;
