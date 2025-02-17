import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import Menu from "../../Pages/Shared/Menu";

const PopularMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setItems(popular);
      });
  }, []);

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {" "}
        <button className="btn border border-b-4 border-gray-600">
          Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
