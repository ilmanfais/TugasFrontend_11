import Hero from "../components/Hero";
import Movies from "../components/Movies/Movies";

const Home = (props) => {
  const { item, setItem } = props;

  return (
    <div>
      <Hero />
      <Movies item={item} setItem={setItem} />
    </div>
  );
};

export default Home;
