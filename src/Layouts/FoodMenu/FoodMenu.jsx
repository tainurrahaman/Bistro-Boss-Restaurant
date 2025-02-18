import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import menuBg from "../../assets/assets/menu/banner3.jpg";
import dessertImg from "../../assets/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/assets/menu/soup-bg.jpg";
import saladImg from "../../assets/assets/menu/salad-bg.jpg";
import SectionTitle from "../../Components/SectionTitle";
import UseMenu from "../../Hooks/UseMenu";
import MenuCategory from "../../Pages/Shared/MenuCategory";
const FoodMenu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro_Boss || Menu</title>
      </Helmet>
      <Cover
        img={menuBg}
        title="OUR MENU"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="---Don't miss---"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
    </div>
  );
};

export default FoodMenu;
