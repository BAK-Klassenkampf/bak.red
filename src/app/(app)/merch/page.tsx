import { getPayload } from "payload";
import config from "@payload-config";
import { Media } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

const payload = await getPayload({ config });

export default async function MerchPage() {
  let merch = await payload.find({
    collection: "merch",
    pagination: false,
    depth: 2,
  });

  return (
    <div className="bg-cd-white w-full h-full text-cd-black">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-4xl md:text-6xl uppercase">Unser Merch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-10">
          {merch.docs.map((item) => (
            <Link
              className="w-full h-full"
              href={`/merch/${item.id}`}
              key={item.name}
            >
              <div className="aspect-square h-full w-full">
                <Image
                  src={(item.picture && (item.picture as Media).url) || "/"}
                  alt={
                    item.picture
                      ? (item.picture as Media).alt
                      : "placeholder item"
                  }
                  width={1024}
                  height={1024}
                  className="border-8 border-cd-black h-full w-full object-cover"
                />
              </div>
              <h2 className="text-2xl">
                {item.name} - {item["donation-recommendation"]}€
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
