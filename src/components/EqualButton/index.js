
import { EqualButton } from './styles';

const Button = ({label, onClick}) => {
    return (
      <EqualButton onClick={onClick} type="button">
       {label}
      </EqualButton>
    );
  }
  
  export default Button;