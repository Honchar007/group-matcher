// styles
import './StyledButton.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  afterIcon?: string;
  preIcon?: string;
  classNames?: string;
}

export type Ref = HTMLButtonElement;

const StyledButton = (props: ButtonProps) => {
  const {
    type = 'button',
    onClick,
    disabled,
    children = null,
    style,
    classNames,
  } = props;

  return (
    <button
      type={type}
      className={classNames ? `button ${classNames}` : 'button'}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <span className="button-text">{children}</span>
    </button>
  );
};

export default StyledButton;
