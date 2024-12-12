"use client";

import clsx from "clsx";
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
  const pathname = usePathname();

  function HeaderLink(props: { text: string; href: string }) {
    return (
      <Link href={props.href} className="uppercase">
        {props.text}
      </Link>
    );
  }

  return (
    <div className="sticky h-20 justify-center bg-web-blue text-cd-white text-xl sm:text-2xl md:text-4xl xl:text-6xl top-0">
      <div
        className={clsx(
          "container h-20  justify-center m-auto px-10 ",
          pathname !== "/" && "grid grid-cols-5 gap-5"
        )}
      >
        {pathname !== "/" && (
          <Link href="/" className="max-h-14 w-fit my-auto col-span-1">
            <Image
              src={"/images/small-logo.png"}
              alt="BAK Logo"
              width={200}
              height={200}
              className="my-auto max-h-14 w-auto"
            ></Image>
          </Link>
        )}
        <div className=" grid grid-cols-2 grid-rows-2 md:flex md:flex-row justify-between w-full my-auto col-span-4">
          <HeaderLink text="Ziele" href="/ziele" />
          <HeaderLink text="News" href="/news" />
          <HeaderLink text="Merch" href="/merch" />
          <HeaderLink text="Mach mit" href="/mitmachen" />
        </div>
      </div>
    </div>
  );
}
