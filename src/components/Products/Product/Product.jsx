import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../features/products/productsSlice";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div>
      Product
      <p>
        {products.map((product) => {
          const isAlreadyLiked = product.likes.includes(user.user._id);
          return (
            <>
              <p>{product?.name}</p>
              <span>
                Price: {product?.price} Likes: {product?.likes.length}
              </span>
              {isAlreadyLiked ? (
                <button onClick={() => console.log("dislike")}>DisLike</button>
              ) : (
                <button onClick={() => dispatch(like(product?._id))}>
                  Dar like
                </button>
              )}
            </>
          );
        })}
      </p>
    </div>
  );
};

export default Product;
