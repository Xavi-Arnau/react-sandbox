import useFetchData from "../hooks/useFetchData";
import BeatLoader from "react-spinners/BeatLoader";

const HookFetch = () => {
  const { data, error, pending } = useFetchData(
    "https://dummyjson.com/products",
    {}
  );
  console.log(data, error, pending);

  return (
    <div>
      <h2 className="text-2xl p-4 text-white bg-blue-600">useFetchData</h2>
      {pending ? (
        <div className="flex justify-center">
          <BeatLoader size={40} />
        </div>
      ) : null}
      {error ? <h3>{error}</h3> : null}
      <div className="flex flex-wrap gap-4">
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <div className="w-1/5" key={item.id}>
                {item.title}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default HookFetch;
