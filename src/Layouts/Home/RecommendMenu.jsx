import SectionTitle from "../../Components/SectionTitle";

const RecommendMenu = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        subHeading="---Should Try---"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="card bg-[#F3F3F3]">
          <figure>
            <img
              src="https://i.ibb.co.com/kgxGhRgC/slide1.jpg"
              alt="Shoes"
              className="w-full max-h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" font-semibold text-[24px]">Caeser Salad!</h2>
            <p className="text-[16px]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions">
              <button className="btn text-[#BB8506] uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3]">
          <figure>
            <img
              src="https://i.ibb.co.com/B5r251XJ/slide2.jpg"
              alt="Shoes"
              className="w-full max-h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" font-semibold text-[24px]">Supreme Pizza!</h2>
            <p className="text-[16px]">
              Cheese,Sausage, Bell Peppers, Onions, Mushrooms, Olives
            </p>
            <div className="card-actions">
              <button className="btn text-[#BB8506] uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3]">
          <figure>
            <img
              src="https://i.ibb.co.com/7dS8HhW5/slide4.jpg"
              alt="Shoes"
              className="w-full max-h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" font-semibold text-[24px]">Chocolate Dessert!</h2>
            <p className="text-[16px]">
              Cocoa powder, chocolate chips, dark chocolate, milk chocolate
            </p>
            <div className="card-actions">
              <button className="btn text-[#BB8506] uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3]">
          <figure>
            <img
              src="https://i.ibb.co.com/VWW9wm86/slide3.jpg"
              alt="Shoes"
              className="w-full max-h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" font-semibold text-[24px]">Vegetables Soup!</h2>
            <p className="text-[16px]">
              Onions, carrots, tomatoes, garlic, mushrooms, peppers
            </p>
            <div className="card-actions">
              <button className="btn text-[#BB8506] uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendMenu;
