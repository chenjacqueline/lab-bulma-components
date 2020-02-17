import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a
              className="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Docs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/modifiers/syntax/"
              >
                Modifiers
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                className="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <CoolButton isSmall isDanger className="is-rounded my-class">
              Log in
            </CoolButton>
            <a href="#">
              <CoolButton isSmall isSuccess>
                Sign up
              </CoolButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className="input"
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

const CoolButton = props => {
  console.log(props);

  const classes = {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white"
  };

  let styling = "button  ";
  Object.keys(classes).forEach(key => {
    if (props[key]) {
      styling += classes[key] + " ";
    }
  });

  if (props.className) {
    styling += props.className;
  }
  console.log(styling);
  //   if (Object.keys(props).includes("isDanger")) {
  //     return (
  //       <button className="button is-rounded my-class is-danger is-small">
  //         {props.children}
  //       </button>
  //     );
  //   } else {
  return <button className={styling}>{props.children}</button>;
  //   }
};

const Signup = () => {
  return (
    <div>
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="Password" />
        <CoolButton isSmall isSuccess className="is-rounded my-class">
          Submit
        </CoolButton>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Signup />
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      /> */}

      {/* <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>

      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </div>
  );
};

export default App;
