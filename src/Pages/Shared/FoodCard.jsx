import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const FoodCard = ({ item }) => {
  const { price, name, recipe, image, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const axisoSecure = UseAxiosSecure();

  const handleAddtoCart = (food) => {
    if (user && user?.email) {
      const newItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
      };
      axisoSecure.post("/carts", newItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added in your Cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You're not Logged in.",
        text: "Please Login first for Add to Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-[#F3F3F3]">
        <figure>
          <img src={image} alt="Shoes" className="w-full max-h-[300px]" />
        </figure>
        <p className="absolute right-0 mt-3 mr-3 font-semibold text-[16px] bg-slate-900 text-white py-2 px-3 rounded-md">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className=" font-semibold text-[24px]">{name}</h2>
          <p className="text-[16px]">{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddtoCart(item)}
              className="btn text-[#BB8506] border-0 uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
