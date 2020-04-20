import PropTypes from 'prop-types'
import React from 'react'

// import styles from './slide-styles';

function Slide(props) {
  return (
    // <article style={{ ...styles.root, ...props.style }}>
    <article className="dft__slide">
      <img src={props.image} alt={props.title} />
      {/* <footer style={styles.footer}> */}
      <footer className="dft__slide__footer">
        {/* <h2 style={styles.title}>{props.title}</h2> */}
        <h2 className="dft__slide__footer__title">{props.title}</h2>

        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
}

export default Slide
