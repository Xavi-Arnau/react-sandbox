import axios from "axios";
import { useEffect, useState } from "react";
import catImg from "../assets/cat.jpg";
import dogImg from "../assets/dog.jpg";
import { useCartProductsContext } from "../contexts/CartProductsContext";

const SomeFetches = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [state, dispatch] = useCartProductsContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        //console.log(response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        if (search.length > 2) {
          const response = await axios.get(
            `https://dummyjson.com/products/search?q=${search}`
          );
          //console.log(response.data.products);
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search]);

  const handlePost = async () => {
    const response = await axios.post("https://dummyjson.com/products/add", {
      title: "new cat",
      category: "pets",
      images: [catImg],
    });
    setProducts([response.data, ...products]);
    //console.log(response);
  };
  const handleUpdate = async () => {
    const response = await axios.put("https://dummyjson.com/products/1", {
      title: "updated dog",
      category: "pets",
      images: [dogImg],
    });
    setProducts([response.data, ...products]);
    //console.log(response);
  };

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch({ type: "ADD_PRODUCT", data: [...state.cart, item] });
  };

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold">Products</h2>
      <div className="p-4">
        <input
          className="bg-slate-300 w-60 py-1 px-2"
          type="text"
          name=""
          id=""
          placeholder="Search some stuff..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="p-4">
        <button
          onClick={handlePost}
          className="py-2 px-4 bg-orange-400 text-white rounded-lg active:scale-110"
        >
          Upload cat product
        </button>
      </div>
      <div className="p-4">
        <button
          onClick={handleUpdate}
          className="py-2 px-4 bg-green-400 text-white rounded-lg active:scale-110"
        >
          Update dog product
        </button>
      </div>
      <div className="flex flex-row flex-wrap">
        {products.map((product) => (
          <div
            className="flex flex-col w-1/5 p-4 justify-center items-center"
            key={product.title}
          >
            <div className="">
              <img
                className="object-cover h-48 w-48"
                src={product.images[0]}
                alt=""
              />
            </div>
            <div>{product.title}</div>
            <div>
              <button
                className="py-2 px-4 bg-green-700 text-white rounded-lg active:scale-110"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeFetches;
