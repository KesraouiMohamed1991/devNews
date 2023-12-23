import { Link, useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';

export default function ArticleData() {
  const { name } = useParams();

  // Use React Query to fetch user data with caching
  // const { isLoading, error, data } = useQuery(['userData', name], {
  //   staleTime: 300000,
  // });

  // if (isLoading) return <span className='w-screen h-screen flex items-center justify-center'>Loading....</span>;

  // if (error) return 'An error has occurred: ' + error.message;


  return (
    <div className='bg-red-400 z-10 h-screen w-screen flex flex-col justify-center items-center'>
      <Link to="/">Go Back to Home</Link>
      <div>
        <h1>article Details for {name}</h1>
        {/* Display other user details */}
      </div>
    </div>
  );
}
