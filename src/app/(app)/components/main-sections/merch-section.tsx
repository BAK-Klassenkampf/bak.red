import Image from "next/image";
import Button from "../button";
import config from "@payload-config";
import { getPayload } from "payload";
import { Media } from "@/payload-types";
import Link from "next/link";

const payload = await getPayload({ config });

export const dynamic = "force-dynamic";

export default async function MerchSection() {
  let highlightedMerch = await payload.find({
    collection: "merch",
    pagination: false,
    depth: 2,
    where: {
      and: [
        {
          featured: {
            equals: true,
          },
        },
      ],
    },
  });

  return (
    <div className="flex flex-col w-full p-10 bg-web-red">
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-10 [&>*:nth-child(n+2)]:hidden md:[&>*:nth-child(n+2)]:block">
        {highlightedMerch.docs.map((item) => (
          <Link
            href={`/merch/${item.id}`}
            key={item.name}
            className="border-8 border-cd-white aspect-square"
          >
            <Image
              src={(item.picture && (item.picture as Media).url) || "/"}
              width={1024}
              height={1024}
              alt={item.picture ? (item.picture as Media).alt : item.name}
              className="object-cover h-full"
            />
          </Link>
        ))}
      </div>
      <Button
        text="Mehr Merch!"
        link="/merch"
        className="bg-cd-white text-web-red w-fit text-3xl md:text-5xl mx-auto m-10"
      />
    </div>
  );
}
