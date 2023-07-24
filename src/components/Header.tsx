import '../scss/_header.scss';

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.text}</h1>
    </header>
  );
};

export default Header;
