import Image from "next/image";
import Button from "../button";

export default function MerchSection() {
  return (
    <div className="flex flex-col w-full p-10 bg-web-red">
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="border-8 border-cd-white p-8">
          <Image
            src={"/images/BAK_KK_FDJ.png"}
            width={512}
            height={800}
            alt="placeholder item"
          />
        </div>
        <div className="border-8 border-cd-white p-8">
          <Image
            src={"/images/BAK_KK_FDJ.png"}
            width={512}
            height={800}
            alt="placeholder item"
          />
        </div>
        <div className="border-8 border-cd-white p-8">
          <Image
            src={"/images/BAK_KK_FDJ.png"}
            width={512}
            height={800}
            alt="placeholder item"
          />
        </div>
      </div>
      <Button
        text="Jetzt bestellen!"
        className="bg-cd-white text-web-red w-fit text-3xl md:text-5xl mx-auto m-10"
      />
    </div>
  );
}
