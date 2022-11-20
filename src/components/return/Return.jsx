import { IoIosArrowBack } from 'react-icons/io';
import { StyledLink } from './Return.styled';

const Return = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <IoIosArrowBack size="24" />
      {children}
    </StyledLink>
  );
};

export default Return;
