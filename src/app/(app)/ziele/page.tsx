import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

const payload = await getPayload({ config });

export default async function GoalsPage() {
  const goals = await payload.find({
    collection: "goal",
    pagination: false,
    sort: "-weight",
    depth: 2,
  });

  return (
    <div className="bg-cd-white w-full h-full text-cd-black">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-4xl md:text-6xl uppercase">Unsere Ziele</h1>
        <div className="flex flex-col gap-16 py-10">
          {goals.docs.map((goal) => (
            <div
              className="grid grid-cols-3 w-full h-full gap-10"
              key={goal.title}
            >
              <div className="aspect-video">
                <Image
                  src={(goal.picture as Media).url || "/"}
                  alt={(goal.picture as Media).alt || ""}
                  width={1024}
                  height={1024}
                  className="border-8 border-cd-black h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2">
                <h2 className="text-4xl">{goal.title}</h2>
                <RichText data={goal.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
