import Image from "next/image";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <header className="w-full h-16 px-4 mt-5 absolute">
      <div className="w-full h-full flex">
        {/* Logo Icon */}
        <Link href={"/"} className="flex justify-center gap-2 items-center">
          <Image
            src={"/logo.png"}
            width={64}
            height={64}
            className="rounded-full relative"
            alt="logo icon"
          ></Image>
          {/* Restaurant Status */}
          <div className="w-full h-full flex flex-col justify-center">
            <span className="text-black text-lg font-extrabold">
              Ngon Noodle
            </span>
            <p className="text-green-400 text-sm font-semibold">Đang mở cửa</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
