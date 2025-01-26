import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";
import { Media } from "@/payload-types";

const payload = await getPayload({ config });

export const dynamic = "force-dynamic";

export default async function MerchPage({
  params,
}: {
  params: Promise<{ merchid: string }>;
}) {
  let merchId = (await params).merchid;
  let merch = await payload.findByID({
    collection: "merch",
    id: merchId,
    depth: 2,
  });

  return (
    <div className="bg-cd-white w-full h-full text-cd-black">
      <div className="container mx-auto py-10">
        <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-10 px-5 md:p-0 ">
          <Image
            src={(merch.picture && (merch.picture as Media).url) || "/"}
            alt={merch.picture ? (merch.picture as Media).alt : merch.name}
            width={1024}
            height={1024}
            className="flex-1 flex-grow border-8 border-cd-black object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl uppercase">{merch.name}</h1>
            <p className="text-2xl">
              Spendenempehlung: {merch["donation-recommendation"]}€
            </p>
            <p className="text-sm">
              Wir haben keinen festen Preis für unser Material. Stattdessen
              empfehlen wir eine Spende and den BAK.
            </p>
            <p>{merch.description}</p>
            <p className="text-2xl mt-5">
              Für die Bestellung, melde dich bitte bei{" "}
              <a
                href="https://t.me/Dggf789"
                target="_blank"
                className="text-cd-blue"
              >
                @Dggf789
              </a>{" "}
              auf Telegram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
