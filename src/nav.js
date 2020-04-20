// import PropTypes from 'prop-types'
// import React from 'react'
// import styles from './nav-styles'

// function getPrevStyles(props) {
//   return props.hasPrevious ? styles.prev : styles.prevHidden
// }

// function getNextStyles(props) {
//   return props.hasNext ? styles.next : styles.nextHidden
// }

// function Nav(props) {
//   return (
//     <div style={styles.root}>
//       <button style={getPrevStyles(props)} onClick={props.onPrevious}>
//         &#10094;
//       </button>
//       <button style={getNextStyles(props)} onClick={props.onNext}>
//         &#10095;
//       </button>
//     </div>
//   )
// }

// Nav.propTypes = {
//   onPrevious: PropTypes.func.isRequired,
//   onNext: PropTypes.func.isRequired,
//   hasPrevious: PropTypes.bool,
//   hasNext: PropTypes.bool,
// }

// export default Nav

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

function getPrevClassName(props) {
  return classnames('dft__nav__btn', 'dft__nav__btn--prev', {
    'dft__nav__btn--hidden': !props.hasPrevious,
  })
}

function getNextClassName(props) {
  return classnames('dft__nav__btn', 'dft__nav__btn--next', {
    'dft__nav__btn--hidden': !props.hasNext,
  })
}

function Nav(props) {
  return (
    <div className="dft__nav">
      <button className={getPrevClassName(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={getNextClassName(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
}

export default Nav
