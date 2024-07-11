"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return <nav>{pathname === "/" ? <BigHeader /> : <DefaultHeader />}</nav>;
}

export function BigHeader() {
  return (
    <div className="absolute flex h-1/4 backdrop-blur-lg bg-web-blue/55 w-full z-10 p-5 justify-center align-middle">
      <Image
        src="/images/header-logo.svg"
        alt="logo"
        width={1080}
        height={1080}
        className="h-4/5 my-auto"
      />
    </div>
  );
}

export function DefaultHeader() {
  function HeaderLink(props: { text: string; href: string }) {
    return (
      <Link href={props.href} className="uppercase">
        {props.text}
      </Link>
    );
  }

  return (
    <div className="sticky h-20 bg-web-blue text-cd-white text-xl sm:text-2xl md:text-4xl xl:text-6xl flex top-0">
      <div className="container flex flex-row justify-between w-full m-auto px-10">
        <HeaderLink text="Ziele" href="/ziele" />
        <HeaderLink text="News" href="/news" />
        <HeaderLink text="Merch" href="/merch" />
        <HeaderLink text="Mach mit" href="/mitmachen" />
      </div>
    </div>
  );
}
