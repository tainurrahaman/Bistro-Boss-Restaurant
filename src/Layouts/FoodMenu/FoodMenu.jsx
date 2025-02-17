import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover";
import menuBg from "../../assets/assets/menu/banner3.jpg";
const FoodMenu = () => {
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
    </div>
  );
};

export default FoodMenu;
