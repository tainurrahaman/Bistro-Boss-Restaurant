import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCart = () => {
  const axisoSecure = UseAxiosSecure();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axisoSecure.get("/carts");
      return res.data;
    },
  });
  return [data];
};

export default UseCart;
