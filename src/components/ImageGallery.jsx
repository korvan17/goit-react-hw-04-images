import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ pageGallerey, onClickPicture }) {
  return (
    <div>
      <ul className="imageGallery">
        {pageGallerey.map(pic => {
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
  pageGallerey: PropTypes.arrayOf(
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
