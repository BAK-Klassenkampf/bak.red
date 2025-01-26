import { DefaultHeader } from "@/app/(app)/components/header";
import AboutSection from "@/app/(app)/components/main-sections/about-section";
import MerchSection from "@/app/(app)/components/main-sections/merch-section";
import PostsSection from "@/app/(app)/components/main-sections/posts-section";
import Image from "next/image";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <div className="bg-web-blue -z-10">
        <Image
          src={"/images/main-background.jpg"}
          alt="Background image"
          width={1920}
          height={1080}
          className="object-cover w-screen supports-[height:100svh]:h-svh h-screen opacity-80"
        ></Image>
      </div>
      <h1 className="sr-only">BAK Klassenkampf</h1>
      <div className="absolute flex justify-center w-full bottom-0 h-20 bg-gradient-to-b from-web-red/20 to-web-red backdrop-blur-md">
        <p className="text-cd-white uppercase text-3xl md:text-4xl lg:text-6xl my-auto text-center">
          Atzig? Genau wie unser Merch!
        </p>
      </div>
      <Suspense fallback={<noscript>Please enable Javascript</noscript>}>
        <MerchSection />
        <DefaultHeader />
        <AboutSection />
        <PostsSection />
      </Suspense>
    </>
  );
}
