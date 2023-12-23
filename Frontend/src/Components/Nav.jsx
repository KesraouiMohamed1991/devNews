import { Link } from 'react-router-dom';

const Nav = () => {
  let navlinks = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Bookmark',
      link: '/bookmark',
    },
    {
      name: 'Profile',
      link: '/profile',
    },
  ];

  return (
    <div className="h-20 z-20 rounded-3xl backdrop-blur-lg bg-background/50 flex justify-evenly items-center w-3/5 mx-auto fixed top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">

      {/* Logo */}
      <div className="w-1/3 p-4 text-primary font-custom2 text-3xl">
        DevNews
      </div>

      {/* Navigation Links */}
      <nav className="w-2/3 flex items-center justify-evenly flex-wrap">
        {navlinks.map((link) => (
          <Link
            className="px-4 py-2 rounded-3xl bg-white hover:bg-primary hover:text-white transition-colors duration-300 text-primary mt-2 md:mt-0" 
            key={link.name}
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
