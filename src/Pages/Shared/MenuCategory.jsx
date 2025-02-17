import Cover from "../../Components/Cover";
import Menu from "./Menu";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
