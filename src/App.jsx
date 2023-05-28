import { fetchImgsInstance } from 'utils/themoviedbApi';

export const App = () => {
  const aaa = async () => {
    const request = await fetchImgsInstance.getImgs();
    console.log('aaa  request:', request);
  };

  aaa();

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmE2OTViZjhjZDk3YzJlZjFjMmE4YTIwN2E1MDc5MSIsInN1YiI6IjY0NzI1YzdiYmUyZDQ5MDBhN2Q1ZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lPU0wQ1y9n834eQ_fI0wPgzW-vuaEfLFb91z2AfAWd0',
  //   },
  // };

  // fetch(
  //   'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  //   options
  // )
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
