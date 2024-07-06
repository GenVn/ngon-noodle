"use client";
import { MobileNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationSectionProps {
  items: MobileNavItem[];
}

export default function NavigationSection({ items }: NavigationSectionProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="w-full h-16 fixed bottom-4 px-4 z-50">
      <div className="w-full h-full py-2 rounded-full bg-slate-100 shadow-rounded flex gap-2 justify-around">
        {items.map((item, index) => {
          const Icon = Icons[item.icon!];
          return (
            <Link
              href={item.href!}
              key={index}
              className="flex flex-col justify-between items-center cursor-pointer"
            >
              <Icon
                className={cn(
                  "w-6 h-6",
                  path == item.href
                    ? "text-blue-600 font-bold"
                    : "text-gray-600"
                )}
              />
              <span
                className={cn(
                  "font-bold text-xs",
                  path == item.href
                    ? "text-blue-500 font-bold"
                    : "text-gray-600"
                )}
              >
                {item.title}
              </span>
              <span
                className={cn(
                  "w-[24px] h-1 bg-blue-500 rounded-full scale-up-hor-left",
                  path == item.href ? "visible" : "invisible"
                )}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
