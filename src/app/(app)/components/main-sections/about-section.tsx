import { getPayload } from "payload";
import config from "@payload-config";
import clsx from "clsx";

const payload = await getPayload({ config });

export const dynamic = "force-dynamic";

export default async function AboutSection() {
  let aboutTexts = await payload.find({
    collection: "about-texts",
    pagination: false,
    sort: "weight",
  });

  return (
    <div className="flex flex-col w-full py-20 px-5 bg-web-blue">
      <div className="flex flex-col gap-5 container mx-auto">
        {aboutTexts.docs.map((aboutText, index) => (
          <div key={aboutText.heading}>
            <h2
              className={clsx(
                "text-cd-red text-6xl uppercase",
                index % 2 == 1 ? "text-right" : "text-left"
              )}
            >
              {aboutText.heading}
            </h2>
            <p
              className={clsx(
                "text-cd-white md:w-5/6 w-6/7 text-2xl",
                index % 2 == 1 ? "ml-auto text-right" : "text-left"
              )}
            >
              {aboutText.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
