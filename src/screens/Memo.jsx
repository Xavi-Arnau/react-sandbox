import Memo1 from "../components/Memo1";
import Memo2 from "../components/Memo2";

//https://medium.com/picus-security-engineering/optimization-with-react-memo-7e0b0ffb7536

const Memo = () => {
  return (
    <div className="mt-20 min-h-screen">
      <Memo1 />
      <Memo2 />
    </div>
  );
};

export default Memo;
