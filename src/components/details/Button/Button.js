import React from 'react';
import classNames from 'classnames';
import Proptypes from 'prop-types';

const Button = ({ text, onClick = null, type = 'button', isLight, isBlack, size26957, size26357, size26346, size5757, fz24, fz18, fz14 }) => {
  const btnStyle = classNames('button', {
    button_light: isLight,
    button_black: isBlack,
    size_269_57: size26957,
    size_263_57: size26357,
    size_263_46: size26346,
    size_57_57: size5757,
    fz_24: fz24,
    fz_18: fz18,
    fz_14: fz14,
    // еще добавить классы для ховера и онклика
  })
  return (
    <button
      type={type}
      className={btnStyle}
      onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
  className: Proptypes.string,
  onClick: Proptypes.func,
  type: Proptypes.string,
  isLight: Proptypes.bool,
  isBlack: Proptypes.bool,
  size26957: Proptypes.bool,
  size26357: Proptypes.bool,
  size26346: Proptypes.bool,
  size5757: Proptypes.bool,
  fz24: Proptypes.bool,
  fz18: Proptypes.bool,
  fz14: Proptypes.bool
};

export default Button
