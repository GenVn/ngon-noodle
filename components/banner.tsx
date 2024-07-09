import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section className="w-full min-h-screen relative select-none">
      <div className="absolute w-full h-full -z-50">
        <div className="w-full h-full">
          <Image fill={true} src={"/banner2.png"} alt="banner"></Image>
        </div>
      </div>
      <div className="absolute w-full h-full px-8 z-10">
        {/* Banner Title */}
        <div className="w-full flex flex-col gap-2 pt-[6.5rem]">
          <p className="uppercase font-bangers text-6xl text-[#C35123] text-outline w-full">
            Ngon Noodle
          </p>
          <p className="uppercase font-bangers text-5xl text-black text-outline w-full  ">
            Vietnamese Noodles
          </p>

          <p className="font-dancing_script text-xl w-3/4 text-black pt-2">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Một thương hiệu dành riêng cho những "ní" thích ăn mì.
          </p>
          <p className="font-dancing_script text-xl w-3/4 text-black">
            Ấn xem menu để chọn món mì riêng của bạn hoặc lắc xí ngầu để ra món
            ngẫu nhiên.
          </p>
        </div>
        <div className="w-full flex gap-4 mt-4 items-center">
          <Link
            href={"/menu"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "text-white bg-[#C35123] font-extrabold"
            )}
          >
            Menu
          </Link>
          <Button className="relative bg-transparent w-24 h-14 heart-beat">
            <Image src={"/play.png"} fill={true} alt=""></Image>
          </Button>
        </div>
      </div>
    </section>
  );
}
