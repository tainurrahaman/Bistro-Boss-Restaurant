const Menu = ({ item }) => {
  const { name, recipe, price, image } = item;

  return (
    <div className="flex">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-28"
          src={image}
          alt="Menu Image"
        />
      </div>
      <div className="pl-8">
        <h3 className="text-[20px]">{name}-----------------</h3>
        <p className="text-[16px]">{recipe}</p>
      </div>
      <p className="pl-2 text-yellow-500 text-[20px]">${price}</p>
    </div>
  );
};

export default Menu;
