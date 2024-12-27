import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import stats from './data/stats.json';
import article from './data/article.json';
import forbes from './data/forbes.json';
import transactions from './data/transactions.json';
//import LandingSection from './components/LandingSection/LandingSection';
import Landing from './components/Landing/Landing';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />

        <BlogCard
          key={article.id}
          description={article.description}
          name={article.name}
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory transaction={transactions} />

        <Heading title="Task 5 Landing" top bottom />
        <Landing />
      </Container>
    </Section>
  );
};
