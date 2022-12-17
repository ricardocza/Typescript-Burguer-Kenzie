import logo from "../../imgs/logo.png";
import loginicon from "../../imgs/loginicon.png";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
      <div>
        <figure>
          <img src={loginicon} alt="" />
        </figure>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </StyledHeader>
  );
};
