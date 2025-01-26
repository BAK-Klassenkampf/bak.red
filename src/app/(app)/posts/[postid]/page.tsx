import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

const payload = await getPayload({ config });

export const dynamic = "force-dynamic";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postid: string }>;
}) {
  const postid = (await params).postid;

  const post = await payload.findByID({
    collection: "post",
    id: postid,
    depth: 2,
  });

  return (
    <div className="w-full bg-cd-white text-cd-black">
      <div className="container mx-auto py-10 px-5">
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-10">
          <Image
            src={(post.picture as Media).url || "/"}
            alt={(post.picture as Media).alt}
            width={1024}
            height={1024}
            className="flex-1 flex-grow border-8 border-cd-black object-contain aspect-square"
          />
          <div className="md:col-span-2 h-fit my-auto">
            <h1 className="text-4xl md:text-6xl uppercase">{post.title}</h1>
            <h3 className="text-2xl md:text-3xl uppercase">{post.subtitle}</h3>
          </div>
        </div>
        <div className="py-10 md:px-10">
          <RichText data={post.text} />
        </div>
      </div>
    </div>
  );
}
