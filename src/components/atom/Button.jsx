import { children } from "react";

function Button(props) {
  const { className, children } = props;

  return (
    <button {...props} className={`${className} button`}>
      {children}
    </button>
  );
}

export default Button;
