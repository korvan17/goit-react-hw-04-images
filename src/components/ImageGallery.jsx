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

export default ImageGallery;
