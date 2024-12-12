import { FaInstagram, FaPaypal, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-web-blue min-h-20 items-center">
      <div className=""></div>
      <div className="flex flex-row gap-3 mx-auto h-full p-3 text-cd-black justify-center items-center">
        <a
          className="bg-cd-white w-12 h-12 p-2"
          href="https://t.me/+6BhTnMMolsc3MmNi"
          target="_blank"
        >
          <FaTelegram className="w-full h-full" />
        </a>
        <a
          className="bg-cd-white w-12 h-12 p-2"
          href="https://instagram.com/bak_klassenkampf"
        >
          <FaInstagram className="w-full h-full" />
        </a>
        <a
          className="bg-cd-white w-12 h-12 p-2"
          href="https://x.com/BAKKlassenkampf"
          target="_blank"
        >
          <FaTwitter className="w-full h-full" />
        </a>
        <a
          className="bg-cd-white w-12 h-12 p-2"
          href="https://paypal.me/bakklassenkampf"
          target="_blank"
        >
          <FaPaypal className="w-full h-full" />
        </a>
      </div>
      <div className="text-right px-5 text-cd-white uppercase">
        <a href="mailto:info@bak.red">info@bak.red</a>
      </div>
    </div>
  );
}
