
import { OperationButton } from './styles';

const Button = ({label, onClick}) => {
    return (
      <OperationButton onClick={onClick} type="button">
       {label}
      </OperationButton>
    );
  }
  
  export default Button;