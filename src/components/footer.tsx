import { FaInstagram, FaPaypal, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 bg-web-blue h-20 items-center">
      <div className=""></div>
      <div className="flex flex-row gap-3 mx-auto h-full p-3 text-cd-black justify-center items-center">
        <div className="bg-cd-white w-12 h-12 p-2">
          <FaTelegram className="w-full h-full" />
        </div>
        <div className="bg-cd-white w-12 h-12 p-2">
          <FaInstagram className="w-full h-full" />
        </div>
        <div className="bg-cd-white w-12 h-12 p-2">
          <FaTwitter className="w-full h-full" />
        </div>
        <div className="bg-cd-white w-12 h-12 p-2">
          <FaPaypal className="w-full h-full" />
        </div>
      </div>
      <div className="text-right px-5 text-cd-white uppercase">
        <a href="mailto:info@bak.red">info@bak.red</a>
      </div>
    </div>
  );
}
