import Image from "next/image";
import Button from "../button";

export default function PostsSection() {
  return (
    <div className="w-full bg-cd-white py-20 px-5 md:px-[auto]">
      <div className="container flex flex-col gap-5 mx-auto">
        <h3 className="text-web-blue text-6xl uppercase text-right">
          Unsere letzten Beiträge
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-web-blue">
            {/* <Image
              src={null}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image> */}
          </div>
          <div className="bg-web-blue">
            {/* <Image
              src={null}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image> */}
          </div>
          <div className="bg-web-blue">
            {/* <Image
              src={null}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image> */}
          </div>
        </div>
        <Button
          text="Mehr Beiträge"
          className="bg-web-blue text-cd-white w-fit text-3xl md:text-5xl"
        />
      </div>
    </div>
  );
}
