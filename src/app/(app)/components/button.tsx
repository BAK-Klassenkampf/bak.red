import clsx from "clsx";
import Link from "next/link";

export default function Button(props: {
  text: string;
  className: string;
  onClick?: () => void;
  link?: string;
}) {
  function InternalButton() {
    return (
      <button
        onClick={props.onClick}
        className={clsx("p-4 uppercase", props.className)}
      >
        {props.text}
      </button>
    );
  }

  return (
    <>
      {props.link && (
        <Link href={props.link} passHref>
          <InternalButton />
        </Link>
      )}
      <InternalButton />
    </>
  );
}
