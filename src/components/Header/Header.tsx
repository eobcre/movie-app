import '../Header/Header.scss';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <a href='./'>
        <img src={Logo} alt='Logo' width={180} />
      </a>
    </header>
  );
};

export default Header;
