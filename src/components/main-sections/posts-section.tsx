import Image from "next/image";
import Button from "../button";

export default function PostsSection() {
  return (
    <div className="w-full bg-cd-white py-20">
      <div className="container flex flex-col gap-5 mx-auto">
        <h3 className="text-web-blue text-6xl uppercase text-right">
          Unsere letzten Beiträge
        </h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
          </div>
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
          </div>
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
          </div>
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
          </div>
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
          </div>
          <div className="bg-web-blue">
            <Image
              src={""}
              alt="cover image"
              width={1080}
              height={1080}
            ></Image>
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
