import '../scss/_header.scss';
import Logo from '../assets/logo.png';

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <img src={Logo} alt='Logo' width={400} />
    </header>
  );
};

export default Header;
