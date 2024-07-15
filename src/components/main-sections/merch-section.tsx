import Image from "next/image";
import Button from "../button";

const highlightedMerch = [
  {
    image: "/images/BAK_KK_FDJ.png",
    alt: "placeholder item",
  },
  {
    image: "/images/BAK_KK_FDJ.png",
    alt: "placeholder item",
  },
  {
    image: "/images/BAK_KK_FDJ.png",
    alt: "placeholder item",
  },
];

export default function MerchSection() {
  return (
    <div className="flex flex-col w-full p-10 bg-web-red">
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 [&>*:nth-child(n+2)]:hidden md:[&>*:nth-child(n+2)]:block">
        {highlightedMerch.map((item, index) => (
          <div className="border-8 border-cd-white p-8" key={index}>
            <Image src={item.image} width={512} height={800} alt={item.alt} />
          </div>
        ))}
      </div>
      <Button
        text="Mehr Merch!"
        className="bg-cd-white text-web-red w-fit text-3xl md:text-5xl mx-auto m-10"
      />
    </div>
  );
}
