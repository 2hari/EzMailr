import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Logo({
  type,
  justifyContent,
}: {
  justifyContent: string;
  type?: "iconAndText";
}) {
  return (
    <Link href="/">
      <div className={`${justifyContent} align-center flex`}>
        <EnvelopeIcon
          width={size === "lg" ? 40 : 30}
          className={`${
            colorTheme === "light" ? "text-white" : "text-blue-600"
          } mr-2`}
        />
        {type === "iconAndText" && (
        <h3 className="tracking-loose mb-0 pb-0 text-2xl font-bold text-gray-900">
          EzMailr
        </h3>
      )}
      </div>
    </Link>
  );
}
