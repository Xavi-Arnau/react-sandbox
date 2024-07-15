import { useSelector } from "react-redux";

const Footer = () => {
  const clock = useSelector((state) => state.clock.value);
  return (
    <div className="bg-black text-white flex justify-center items-center p-4">
      <div className="text-xl">{clock}</div>
    </div>
  );
};

export default Footer;
