import React from 'react';
import Proptypes from 'prop-types'

export const FavIcon = ({ iconColor = '#ffffff', onClick = null }) => {
  return (
  <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.934 3.215C13.164 1.61 15.048.594 17.01.594c3.475 0 6.204 3.035 6.204 6.899 0 4.737-3.828 8.598-9.63 14.448l-.014.015-1.636 1.655-1.635-1.643-.045-.045c-5.784-5.845-9.6-9.7-9.6-14.43 0-3.864 2.73-6.9 6.204-6.9 1.963 0 3.847 1.017 5.076 2.622zm0 17.009l.113-.126c5.37-5.406 8.911-8.98 8.911-12.606 0-2.509-1.692-4.39-3.948-4.39-1.737 0-3.429 1.241-4.015 2.96h-2.11c-.598-1.719-2.29-2.96-4.027-2.96-2.256 0-3.948 1.881-3.948 4.39 0 3.625 3.542 7.2 8.911 12.606l.113.126z" fill={iconColor}/>
  </svg>
  )
}
FavIcon.propTypes = {
  iconColor: Proptypes.string,
  onClick: Proptypes.func,
};

export default FavIcon
