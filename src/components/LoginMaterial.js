import "../styles/Modal.css";

export const SignInContainer = ({ signIn }) => {
  const containerClassName = `sign-in-container ${signIn ? "signin-in" : ""}`;
  return (
    <div className={containerClassName}>
      <form>
        <div className="title">Login</div>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <a href="/">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export const SignUpContainer = ({ signIn }) => {
  const containerClassName = `sign-up-container ${signIn ? "signin-in" : ""}`;

  return (
    <div className={containerClassName}>
      <form>
        <div className="title">Create Account</div>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export const Overlay = ({ signIn, onToggleRightClick, onToggleLeftClick }) => {
  const overlayContainerClassName = `overlay-container ${
    signIn ? "" : "signin-in"
  }`;
  const overlayClassName = `overlay ${signIn ? "" : "signin-in"}`;
  const leftPanelClassName = `overlay-panel left-overlay-panel ${
    signIn ? "" : "signin-in"
  }`;
  const rightPanelClassName = `overlay-panel right-overlay-panel ${
    signIn ? "" : "signin-in"
  }`;

  return (
    <div className={overlayContainerClassName}>
      <div className={overlayClassName}>
        <div className={leftPanelClassName}>
          <div className="title">Welcome Back!</div>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost-button" onClick={onToggleLeftClick}>
            Sign In
          </button>
        </div>
        <div className={rightPanelClassName}>
          <div className="title">Hello, Friend!</div>
          <p>Enter Your personal details and start journey with us</p>
          <button className="ghost-button" onClick={onToggleRightClick}>
            Sigin Up
          </button>
        </div>
      </div>
    </div>
  );
};

export const GhostButton = ({ signIn, isMobileScreen, onToggleClick }) => {
  const buttonClassName = `ghost-button ${isMobileScreen ? "mini" : "hidden"}`;
  const buttonWording = signIn ? "SIGN UP" : "SIGN IN";
  return (
    <button className={buttonClassName} onClick={onToggleClick}>
      {buttonWording}
    </button>
  );
};
