import React, { useEffect, useState } from 'react';
import { MainSection } from './App.styled';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
// import Button from 'components/Button';
import Modal from 'components/Modal';

const API_KEY = '34970421-6bdd1eba94b69d9d707497ac2';

export default function App() {
  const [request, setRequest] = useState(null);
  const [station, setStation] = useState('idle');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageGallerey, setPageGallerey] = useState([]);
  const [modal, setModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [err, setErr] = useState('');

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        loadMore();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    if (!request) {
      return;
    }
    setLoading(true);
    try {
      fetch(
        `https://pixabay.com/api/?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('No answer'));
        })
        .then(images => {
          setPageGallerey(state => [...state, ...images.hits]);
          setStation('resolved');
        });
    } catch (error) {
      setErr(error);
      setStation('rejected');
      console.log('error - ', err)
    } finally {
      setLoading(false);
    }
  }, [request, page, err]);

  function handleSubmit(request) {
    setRequest(request);
    setPage(1);
    setStation('idle');
    setPageGallerey([]);
  }

  // function nextPage() {
  //   setPage(state => state + 1);
  // };

  function handleOnClickPicture(largeImageURL) {
    setModal(true);
    setLargeImageURL(largeImageURL);
  }

  function toggleModalWindow() {
    if (modal) {
      setLargeImageURL('');
    }
    setModal(false);
  }

  function loadMore() {
    if (!loading) {
      setPage(state => state + 1);
    }
  }

  return (
    <MainSection>
      <Searchbar onSubmit={handleSubmit} />
      {station === 'resolved' && (
        <ImageGallery
          onClickPicture={handleOnClickPicture}
          pageGallerey={pageGallerey}
        />
      )}
      {/* {station === 'resolved' && !loading && (
        <Button onClick={this.nextPage} />
      )} */}
      {loading && <Loader />}
      {modal && (
        <Modal
          largeImageURL={largeImageURL}
          description={request}
          onClose={toggleModalWindow}
          // onPrevious={this.onPrevious}
          // onNext={this.onNext}
        />
      )}
    </MainSection>
  );
}

// export default class App extends Component {
//   state = {
//     request: null,
//     station: 'idle',
//     page: 1,
//     loading: false,
//     pageOfGallerey: [],
//     modal: false,
//     largeImageURL: '',
//   };

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
//       this.loadMore();
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { request, page } = this.state;
//     if (prevState.request !== request || prevState.page !== page) {
//       this.setState({ loading: true });
//       try {
//         fetch(
//           `https://pixabay.com/api/?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//         )
//           .then(response => {
//             if (response.ok) {
//               return response.json();
//             }
//             return Promise.reject(new Error('No answer'));
//           })
//           .then(pageOfGallerey =>
//             this.setState(prevState => ({
//               pageOfGallerey: [
//                 ...prevState.pageOfGallerey,
//                 ...pageOfGallerey.hits,
//               ],
//               station: 'resolved',
//             }))
//           );
//       } catch (error) {
//         this.setState({ error, station: 'rejected' });
//       } finally {
//         this.setState({ loading: false });
//       }
//     }
//   }

//   handleSubmit = request => {
//     this.setState({
//       request,
//       page: 1,
//       station: 'idle',
//       pageOfGallerey: [],
//     });
//   };

//   nextPage = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   handleOnClickPicture = largeImageURL => {
//     this.setState({ modal: true, largeImageURL });
//   };

//   toggleModalWindow = () => {
//     if (this.state.modal) {
//       this.setState({
//         largeImageURL: '',
//       });
//     }

//     this.setState(() => ({
//       modal: false,
//     }));
//   };

//   onPrevious = () => {
//     const { pageOfGallerey } = this.state;
//     const currentIndex = pageOfGallerey.findIndex(
//       pic => pic.largeImageURL === this.state.largeImageURL
//     );
//     if (currentIndex > 0) {
//       const previousImage = pageOfGallerey[currentIndex - 1];
//       this.setState({
//         largeImageURL: previousImage.largeImageURL,
//       });
//     }
//   };

//   onNext = () => {
//     const { pageOfGallerey } = this.state;
//     const currentIndex = pageOfGallerey.findIndex(
//       pic => pic.largeImageURL === this.state.largeImageURL
//     );
//     if (currentIndex < pageOfGallerey.length - 1) {
//       const nextImage = pageOfGallerey[currentIndex + 1];
//       this.setState({
//         largeImageURL: nextImage.largeImageURL,
//       });
//       if (currentIndex + 1 === pageOfGallerey.length - 1) {
//         this.loadMore();
//       }
//     }
//   };

//   loadMore = () => {
//     if (!this.state.loading) {
//       this.setState(prevState => ({
//         page: prevState.page + 1,
//       }));
//     }
//   };

//   render() {
//     const { request, station, loading, pageOfGallerey, modal, largeImageURL } =
//       this.state;
//     return (
//       <MainSection>
//         <Searchbar onSubmit={this.handleSubmit} />
//         {station === 'resolved' && (
//           <ImageGallery
//             onClickPicture={this.handleOnClickPicture}
//             pageOfGallerey={pageOfGallerey}
//           />
//         )}
//         {/* {station === 'resolved' && !loading && (
//           <Button onClick={this.nextPage} />
//         )} */}
//         {loading && <Loader />}
//         {modal && (
//           <Modal
//             largeImageURL={largeImageURL}
//             description={request}
//             onClose={this.toggleModalWindow}
//             // onPrevious={this.onPrevious}
//             // onNext={this.onNext}
//           />
//         )}
//       </MainSection>
//     );
//   }
// }
