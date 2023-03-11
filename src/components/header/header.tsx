import { HeaderStyled } from "./header.style";
import Logo from "../../assets/Logo.svg";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <img src={Logo} alt="Logo To-do App" />
    </HeaderStyled>
  );
};
