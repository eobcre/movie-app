import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App: React.FC = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

  return (
    <>
      <Header />
      <Search />
    </>
  );
};

export default App;
