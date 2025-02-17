import SectionTitle from "../../Components/SectionTitle";
import Menu from "../../Pages/Shared/Menu";
import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
  const [items] = UseMenu();
  const popular = items.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <Menu key={item._id} item={item}></Menu>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        {" "}
        <button className="btn border-0 border-b-4 border-gray-600 hover:bg-[#1F2937] hover:text-white">
          Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
