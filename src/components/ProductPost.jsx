import PropTypes from "prop-types";
import './product.css';

const ProductPost = ({ avatar, lastName, firstName, phoneNumber }) => {
  return (
    <div className='card'>
        <img src={avatar} alt="img" />
        <div className='text_all'>
          <h2 className='text'>Familiya: <span>{lastName}</span></h2>
          <h2 className='text'>Ism: <span>{firstName}</span></h2>
          <h2 className='text'>Raqam: <span className="line-clamp">{phoneNumber}</span></h2>
        </div>
    </div>
  );
};

ProductPost.propTypes = {
  
  avatar: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  phoneNumber: PropTypes.number,
};

export default ProductPost;