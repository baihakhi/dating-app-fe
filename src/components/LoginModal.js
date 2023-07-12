import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as Components from "./LoginMaterial";
import "../styles/Global.css";
import "../styles/Modal.css";

const Login = () => {
  const [signIn, toggle] = useState(true);
  const isMobileScreen = useMediaQuery({
    query: "(max-width: 530px)",
  });
  const coverClassName = `cover ${isMobileScreen ? "" : "hidden"}`;

  return (
    <div className="login-modal-container">
      <Components.SignUpContainer signIn={signIn}></Components.SignUpContainer>
      <Components.SignInContainer signIn={signIn}></Components.SignInContainer>

      <Components.Overlay
        signIn={signIn}
        onToggleRightClick={() => toggle(false)}
        onToggleLeftClick={() => toggle(true)}
      ></Components.Overlay>
      <div className={coverClassName}>
        <Components.GhostButton
          signIn={signIn}
          isMobileScreen={isMobileScreen}
          onToggleClick={() => toggle(!signIn)}
        ></Components.GhostButton>
      </div>
    </div>
  );
};

export default Login;
