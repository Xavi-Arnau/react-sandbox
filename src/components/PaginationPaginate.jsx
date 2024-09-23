import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";

const PaginationPaginate = () => {
  const [pageCount, setPageCount] = useState(10);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/products?skip=${offset}&limit=${itemsPerPage}`
        );
        console.log(response.data.products);
        setProducts(response.data.products);
        setPageCount(Math.ceil(response.data.total / itemsPerPage));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    }
    fetchData();
  }, [offset]);

  const handlePageClick = (event) => {
    console.log(event.selected);
    setOffset(event.selected * itemsPerPage);
  };
  return (
    <div>
      <h2 className="text-3xl py-8">react-paginate</h2>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaCaretSquareRight size={40} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<FaCaretSquareLeft size={40} />}
        renderOnZeroPageCount={null}
        className="bg-red-100 flex flex-row gap-4 p-4 items-center w-fit rounded-xl"
        pageClassName="bg-red-500 text-white py-2 px-4 rounded-lg"
        activeClassName="scale-125 bg-red-800 font-bold"
      />
      {isLoading ? (
        <div className="flex justify-center items-center">
          {" "}
          <BeatLoader />
        </div>
      ) : (
        <div className="flex flex-row gap-4 mt-10">
          {products &&
            products.map((item) => (
              <div
                key={item.id}
                className=" w-1/5 p-4 border-2 border-black rounded-xl"
              >
                <h3>{item.title}</h3>
                <img src={item.thumbnail} alt="" />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PaginationPaginate;
