import Banner from "./Banner";
import Category from "./Category";
import Contact from "./Contact";
import Description from "./Description";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import RecommendMenu from "./RecommendMenu";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Description></Description>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <RecommendMenu></RecommendMenu>
      <Featured></Featured>
      <Review></Review>
    </div>
  );
};

export default Home;
