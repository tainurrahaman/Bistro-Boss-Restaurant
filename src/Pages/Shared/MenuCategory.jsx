import { Link } from "react-router-dom";
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
      <div className="mb-10 flex justify-center">
        {" "}
        <Link to={`/order/${title}`}>
          {" "}
          <button className="btn border-0 border-b-4 border-gray-600 hover:bg-[#1F2937] hover:text-white">
            Order your Favourite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
