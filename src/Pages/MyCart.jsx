import {
  FaAd,
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaMobile,
  FaPaypal,
  FaSearch,
  FaWallet,
} from "react-icons/fa";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyCart = () => {
  return (
    <div className="min-h-screen ">
      <div className="bg-[#D1A054] w-3/12 px-6 pt-10">
        <ul className="space-y-4 uppercase">
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaHome></FaHome> User Home
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaCalendar></FaCalendar> Reservation
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaWallet></FaWallet> payment history
            </Link>
          </li>
          <li>
            <Link className="flex btn btn-primary items-center gap-2 font-medium">
              <FaCartShopping></FaCartShopping> my cart
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaAd></FaAd> add review
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaCalendarCheck></FaCalendarCheck> my booking
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/" className="flex items-center gap-2 font-medium">
              <FaHome></FaHome> Home
            </Link>
          </li>{" "}
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaSearch></FaSearch> Menu
            </Link>
          </li>{" "}
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaShop></FaShop> Shop
            </Link>
          </li>{" "}
          <li>
            <Link className="flex items-center gap-2 font-medium">
              <FaMobile></FaMobile> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-8/12"></div>
    </div>
  );
};

export default MyCart;
