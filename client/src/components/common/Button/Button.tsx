import { FC } from 'react';
import cn from 'classnames';
import './Button.scss';

interface IButton {
  primary?: boolean;
  disabled?: boolean;
  large?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  medium?: boolean;
  className?: string;
  onClick: () => void;
  children: any;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
}

const Button: FC<IButton> = (props) => {
  const { type = 'button' } = props;

  const classes = {
    'Button--primary': props.primary,
    'Button--disabled': props.disabled,
    'Button--large': props.large,
    'Button--fullWidth': props.fullWidth,
    'Button--small': props.small,
    'Button--medium': props.medium,
  };

  return (
    <button
      id={props.id}
      className={cn('Button', props.className, classes)}
      disabled={props.disabled}
      onClick={!props.disabled ? props.onClick : undefined}
      type={type}
    >
      {props.children}
    </button>
  );
};

export default Button;
