import '../Header/Header.scss';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header>
      <img src={Logo} alt='Logo' width={180} />
    </header>
  );
};

export default Header;
