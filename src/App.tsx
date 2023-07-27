import Header from './components/Header/Header';
import Search from './components/Search/Search';

const App: React.FC = () => {
  return (
    <>
      <Header text='Movie App' />
      <Search />
    </>
  );
};

export default App;
