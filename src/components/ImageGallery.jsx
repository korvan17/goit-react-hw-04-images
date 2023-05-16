import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ pageOfGallerey, onClickPicture }) {
  return (
    <div>
      <ul className="imageGallery">
        {pageOfGallerey.map(pic => {
          return (
            <ImageGalleryItem
              key={pic.id}
              pic={pic}
              onClickPicture={onClickPicture}
            />
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
