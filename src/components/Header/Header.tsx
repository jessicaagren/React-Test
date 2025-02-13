import Heading from '../Heading/Heading';
import Subheading from '../Subheading/Subheading';
import './Header.scss';

function Header() {
  return (
    <>
      <header>
        <Heading title='React test!' />
        <Subheading title='- ett övningsprojekt 🐈' />
      </header>
    </>
  );
}

export default Header;
