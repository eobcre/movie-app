import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
  return (
    <>
      <Header text='Movie App' />
      <Search />
    </>
  );
};

export default App;
