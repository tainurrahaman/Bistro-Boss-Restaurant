const Menu = ({ item }) => {
  const { name, recipe, price, image } = item;

  return (
    <div className="flex px-10">
      <div className="w-2/6">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-28 h-24 object-cover"
          src={image}
          alt="Menu Image"
        />
      </div>
      <div className="pl-4 w-4/6">
        <h3 className="text-[20px]">{name}--------</h3>
        <p className="text-[16px]">{recipe}</p>
      </div>
      <p className="pl-2 text-yellow-500 text-[20px]">${price}</p>
    </div>
  );
};

export default Menu;
