import { ImHtmlFive } from "react-icons/im";
import { RiJavascriptFill, RiCss3Fill } from "react-icons/ri";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export const Icons = () => {
  return (
    <div>
      <ImHtmlFive size={40} color="white" style={{ marginRight: '15px' }}/>
      <RiCss3Fill size={40} color="white" style={{ marginRight: '15px' }}/>
      <RiJavascriptFill size={40} color="white" style={{ marginRight: '15px' }}/>
      <FaReact size={40} color="white" style={{ marginRight: '15px' }}/>
      <SiVite size={40} color="white" style={{ marginRight: '15px' }}/>
      <FaGithub size={40} color="white" />
    </div>
  );
};
