import React from 'react'
import classNames from 'classnames'
import PropTypes, { oneOfType } from 'prop-types'

const Button = ({
  text = '' || {},
  onClick = null,
  type = 'button',
  isLight,
  isBlack,
  isIterSize,
  isIterColor,
  transparent,
  size26957,
  size26357,
  size26346,
  size5557,
  fz24,
  fz18,
  fz14,
  mrt55,
  mrt85,
  mrrauto,
  counter = false,
  paginateDecrem = false,
  paginateIncrem = false,

}) => {
  const btnStyle = classNames('button', {
    button_light: isLight,
    button_black: isBlack,
    button_iterator_size: isIterSize,
    button_iterator: isIterColor,
    size_5: isIterColor,
    button_paginate_left: paginateDecrem,
    button_paginate_right: paginateIncrem,
    button_transparent: transparent,
    button_counter: counter,
    size_269_57: size26957,
    size_263_57: size26357,
    size_263_46: size26346,
    size_55_57: size5557,
    fz_24: fz24,
    fz_18: fz18,
    fz_14: fz14,
    mr_t_55: mrt55,
    mr_t_85: mrt85,
    mr_r_auto: mrrauto,

    // еще добавить классы для ховера и онклика
  })
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: oneOfType([
    PropTypes.string,
    PropTypes.object]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isLight: PropTypes.bool,
  isBlack: PropTypes.bool,
  size26957: PropTypes.bool,
  size26357: PropTypes.bool,
  size26346: PropTypes.bool,
  size5757: PropTypes.bool,
  fz24: PropTypes.bool,
  fz18: PropTypes.bool,
  fz14: PropTypes.bool,
}

export default Button
