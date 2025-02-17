import bgImg from "../../assets/assets/home/chef-service.jpg";

const Description = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-cover bg-center h-screen p-28 flex justify-center items-center mb-20"
    >
      <div className="bg-white w-full px-30 py-20 text-center">
        <h3 className="text-5xl">Bistro Boss</h3>
        <p className="text-[16px] mt-2">
          Bistro Boss Restaurant offers a diverse menu with fresh salads,
          wood-fired pizzas, soups, and desserts. With quality ingredients and a
          cozy ambiance, it’s perfect for any occasion. Experience delicious
          food and warm hospitality at Bistro Boss.
        </p>
      </div>
    </div>
  );
};

export default Description;
