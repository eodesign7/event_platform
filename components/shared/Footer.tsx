import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        {/* <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link> */}
        <h1 className="text-3xl font-bold">
          <span className="text-rose-600">.í</span>venty
        </h1>
        <p className="text-sm text-gray-400">
          ©2023 Evently. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}
