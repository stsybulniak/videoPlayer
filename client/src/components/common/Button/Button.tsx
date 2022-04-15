import { FC } from 'react';
import cn from 'classnames';
import './Button.scss';

const Button: FC<Record<string, any>> = (props) => {

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
      onClick={!props.disabled ? props.onClick : null}
      type={props.type}
    >
      {props.children}
    </button>
  )
};

export default Button;
