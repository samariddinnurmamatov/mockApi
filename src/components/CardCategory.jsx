import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './card.css';

const CardCategory = ({ id, avatar, lastName, firstName, phoneNumber, email }) => {
  return (
    <div className='card'>
        <img src={avatar} alt="img" />
        <div className='text_all'>
          <h2 className='text'>Familiya: <span>{lastName}</span></h2>
          <h2 className='text'>Ism: <span>{firstName}</span></h2>
          <h2 className='text'>Raqam: <span className="line-clamp">{phoneNumber}</span></h2>
          <h2 className='text'>Pochta: <span className="line-clamp">{email}</span></h2>
          <div className="link">
            <Link to={`${id}/product`}>See product 👳‍♀ {id}</Link>
          </div>
        </div>
    </div>
  );
};

CardCategory.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  phoneNumber: PropTypes.number,
  email: PropTypes.string,
};

export default CardCategory;