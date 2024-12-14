import { Media } from "@/payload-types";
import Button from "../button";
import config from "@payload-config";
import { getPayload } from "payload";
import Image from "next/image";
import Link from "next/link";

const payload = await getPayload({ config });

export default async function PostsSection() {
  const highlitedPosts = await payload.find({
    collection: "post",
    pagination: false,
    depth: 2,
    limit: 3,
  });

  return (
    <div className="w-full bg-cd-white py-20 px-5 md:px-[auto]">
      <div className="container flex flex-col gap-5 mx-auto">
        <h3 className="text-web-blue text-6xl uppercase text-right">
          Unsere letzten Beiträge
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlitedPosts.docs.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="bg-web-blue aspect-square"
            >
              <Image
                src={(post.picture && (post.picture as Media).url) || "/"}
                alt={post.picture ? (post.picture as Media).alt : post.title}
                width={1024}
                height={1024}
                className="object-cover h-full border-8 border-cd-black"
              />
            </Link>
          ))}
        </div>
        <Button
          link="/posts"
          text="Mehr Beiträge"
          className="bg-web-blue text-cd-white w-fit text-3xl md:text-5xl"
        />
      </div>
    </div>
  );
}
