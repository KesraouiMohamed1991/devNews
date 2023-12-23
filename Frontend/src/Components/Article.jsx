/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Article = ({ imageUrl, title, author, date }) => {
  return (
    <div className="w-72 h-[420px]  bg-background shadow-md rounded-md overflow-hidden font-custom">
      <div className='overflow-hidden h-1/2'>
        <motion.img
          whileHover={{
            rotate: 2,
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          src={imageUrl}
          alt={title}
          className="w-full h-full  object-cover"
        />
      </div>
      <div className="h-1/2 p-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-md font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm ">By {author}</p>
          <p className="text-gray-500 mt-1 text-sm">{date.slice(0, 10)}</p>
        </div>
        <Link to={`/users/${author}`}>
          <button className="bg-primary cursor-pointer text-white px-6 py-2 mt-4 rounded-md border-2 hover:border-primary hover:bg-white hover:text-primary
          transition-colors duration-300">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
