import CSS from "csstype";

interface IconProps {
  style?: CSS.Properties;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const CloseIcon = (props: IconProps) => {
  const { variant, ...restProps } = props || {};
  switch (props?.variant) {
    case "primary":
      return <img src="icons/close.svg" {...restProps} />;
    case "secondary":
      return <img src="icons/blue-close.svg" {...restProps} />;
    default:
      return <img src="icons/close.svg" {...restProps} />;
  }
};

export const PrimaryCloseIcon = (props: IconProps) => (
  <img src="icons/blue-close.svg" {...props} />
);

export const MenuIcon = (props: IconProps) => (
  <img src="icons/burger-icon.svg" {...props} />
);

export const ArrowDownIcon = (props: IconProps) => (
  <img src="icons/arrow-down.svg" {...props} />
);

export const NetIcon = (props: IconProps) => (
  <img src="icons/net.svg" {...props} />
);

export const ApyIcon = (props: IconProps) => (
  <img src="icons/apy.svg" {...props} />
);

export const TextIcon = (props: IconProps) => (
  <img src="icons/text.svg" {...props} />
);

export const EmailIcon = (props: IconProps) => (
  <img src="icons/email.svg" {...props} />
);

export const UserIcon = (props: IconProps) => (
  <img src="icons/user.svg" {...props} />
);

export const CloseSerifIcon = (props: IconProps) => {
  const { variant, ...restProps } = props || {};
  switch (props?.variant) {
    case "primary":
      return <img src="icons/white-close.svg" {...restProps} />;
    case "secondary":
      return <img src="icons/closeSerif.svg" {...restProps} />;
    default:
      return <img src="icons/white-close.svg" {...restProps} />;
  }
};
