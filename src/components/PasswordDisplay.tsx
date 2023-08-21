type PasswordDisplayProps = {
  max: boolean;
  min: boolean;
  alphanumeric: boolean;
  specialChar: boolean;
};

function PasswordDisplay({ max, min, specialChar, alphanumeric }: PasswordDisplayProps) {
  const checks = (bool: boolean) => {
    if (bool) {
      return 'valid-password-check';
    }
    return 'invalid-password-check';
  };

  return (
    <div>
      <h2>A senha deve:</h2>
      <p className={ max ? checks(max) : checks(max) }>Possuir até 16 caracteres</p>
      <p className={ min ? checks(min) : checks(min) }>Possuir 8 ou mais caracteres</p>
      <p className={ specialChar ? checks(specialChar) : checks(specialChar) }>
        Possuir algum caractere especial
      </p>
      <p className={ alphanumeric ? checks(alphanumeric) : checks(alphanumeric) }>
        Possuir letras e números
      </p>
    </div>
  );
}

export default PasswordDisplay;
