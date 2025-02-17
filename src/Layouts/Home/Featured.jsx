import featuredImg from "../../assets/assets/home/featured.jpg";
import SectionTitle from "../../Components/SectionTitle";
const Featured = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${featuredImg})`,
      }}
      className="relative bg-cover bg-fixed bg-center mb-20 text-gray-200"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 pt-2">
        {" "}
        <SectionTitle
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
        ></SectionTitle>
        <div className="flex mx-48 gap-14 pb-20">
          <div>
            <img className="max-w-md" src={featuredImg} alt="Featured Image" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-[24px]">
              March 20, 2023 <br /> WHERE CAN I GET SOME?
            </h2>
            <p className="text-[20px] pb-6">
              A restaurant food menu is a detailed list of meals and beverages
              available for customers, often categorized into starters, main
              courses, desserts, and drinks, with prices and descriptions for
              each item.
            </p>
            <button className="btn border-0 w-fit border-b-4 border-gray-600 hover:bg-gray-500 hover:text-white">
              Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
