import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const currentPage = useLocation().pathname;

  return (
    <>
      <h1 className='fs-1 text-center'>Puffer Isle Inn</h1>
      <ul className='nav nav-tabs justify-content-end' roles='tablist'>
        <li className='nav-item' role='presentation'>
          <Link
            to='/'
            className={currentPage == '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/booking'
            className={
              currentPage == '/booking' ? 'nav-link active' : 'nav-link'
            }>
            Book a Room
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/about'
            className={
              currentPage == '/about' ? 'nav-link active' : 'nav-link'
            }>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className={
              currentPage == '/contact' ? 'nav-link active' : 'nav-link'
            }>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
