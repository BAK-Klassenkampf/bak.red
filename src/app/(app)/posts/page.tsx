import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";
import Image from "next/image";
import { Media } from "@/payload-types";

const payload = await getPayload({ config });

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  const posts = await payload.find({
    collection: "post",
    pagination: false,
    depth: 2,
  });

  return (
    <div className="bg-cd-white w-full h-full text-cd-black">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-4xl md:text-6xl uppercase">Unsere Beiträge</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-10">
          {posts.docs.map((post) => (
            <Link
              className="w-full h-full "
              href={`/posts/${post.id}`}
              key={post.title}
            >
              <div className="aspect-square">
                <Image
                  src={(post.picture && (post.picture as Media).url) || "/"}
                  alt={
                    post.picture
                      ? (post.picture as Media).alt
                      : "placeholder item"
                  }
                  width={1024}
                  height={1024}
                  className="border-8 border-cd-black h-full w-full"
                />
              </div>
              <h2 className="text-2xl">
                {post.title} - {post.subtitle}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
