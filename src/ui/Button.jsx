import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {

    const base = "inline-block text-sm bg-yellow-400 rounded-full font-semibold uppercase text-stone-800 hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    
    const styles = {
      primary: base + " px-4 py-3 md:px-6 md:py-4",
      small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
      secondary: 'text-sm px-4 py-2.5 md:px-6 md:py-3.5 hover:bg-stone-300 focus:text-stone-800 hover:text-stone-800 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase text-stone-400  focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed'
    }

    if (to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick) return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
              {children}
      </button>
    )

  return (
    <button disabled={disabled} className={styles[type]}>
            {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.string, // or PropTypes.element, depending on what you expect
    disabled: PropTypes.element,
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.string
  };

export default Button