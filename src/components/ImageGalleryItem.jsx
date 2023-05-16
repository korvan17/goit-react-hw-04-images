import PropTypes from 'prop-types';

function ImageGalleryItem({ pic, onClickPicture }) {
  return (
    <li className="imageGalleryItem">
      <img
        className="imageGalleryItem-image"
        src={pic.webformatURL}
        alt={pic.tags}
        onClick={() => onClickPicture(pic.largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  pic: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickPicture: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
