import PropTypes from 'prop-types';

function ImageGallery({ pageOfGallerey, onClickPicture }) {
  return (
    <div>
      <ul className="imageGallery">
        {pageOfGallerey.map(pic => {
          return (
            <li className="imageGalleryItem" key={pic.id}>
              <img
                className="imageGalleryItem-image"
                src={pic.webformatURL}
                alt={pic.tags}
                onClick={() => onClickPicture(pic.largeImageURL)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  pageOfGallerey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickPicture: PropTypes.func.isRequired,
};

export default ImageGallery;
