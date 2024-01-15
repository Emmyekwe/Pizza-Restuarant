import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


const LinkButton = ({ children, to }) => {
    const navigate = useNavigate();
    const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

    if (to === "-1")
        return  <button className={className} onClick={() => navigate(-1)}>&larr; Go back</button>


  return (
    <Link to={to} className={className}>{children}</Link>
  )
}

LinkButton.propTypes = {
    children: PropTypes.string, 
    to: PropTypes.string,
  };

export default LinkButton