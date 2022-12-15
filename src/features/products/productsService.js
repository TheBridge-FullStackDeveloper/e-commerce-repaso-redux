import axios from "axios";
const API_URL = "http://localhost:8080";

const getProducts = async () => {
  const res = await axios.get(API_URL + "/products/getAllProducts");
  return res.data;
};

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/products/like/"+_id,{}, {
        headers: {
          authorization: user?.token,
        },
      } );
    return res.data;
  };

const productsService = {
  getProducts,
  like
};
export default productsService;
