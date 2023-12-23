import { useQuery } from 'react-query';
import Article from './Article'; // Import the Article component
import { fetcharticles } from '../api/api';

const Home = () => {
  const { data, isLoading, error } = useQuery('myData', fetcharticles, {
    staleTime: 300000, // 5 minutes (adjust as needed)
  });

  if (isLoading) return <p>Loading articles...</p>;

  if (error) return (
    <div>
      <p>An error has occurred: {error.message}</p>
    </div>
  );

    const articles = data ? data.articles : [];
    
    console.log(articles);
console.log(articles[0].publishedAt);
  return (
    <div className="w-4/5 mx-auto relative z-10 bg-accent min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center gap-4 flex-wrap mt-48">
        {articles.slice(0, 70).map((article, index) => (
          <Article
            key={index}
            imageUrl={article.urlToImage}
            title={article.title}
            author={article.author}
            date={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
