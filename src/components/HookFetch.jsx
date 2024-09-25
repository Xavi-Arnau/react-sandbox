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
      {pending ? <BeatLoader size={40} /> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
};

export default HookFetch;
