"use client";
import { MobileNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

interface NavigationSectionProps {
  items: MobileNavItem[];
}

export default function NavigationSection({ items }: NavigationSectionProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }
  return (
    <nav className="w-full h-12 fixed bottom-4 px-8">
      <div className="w-full h-full rounded-full shadow-lg flex gap-2 justify-between">
        {items.map((item, index) => {
          const Icon = Icons[item.icon!];
          return (
            <div key={index} className="flex flex-col items-center">
              <Icon
                className={cn(
                  "w-5 h-5",
                  path == item.href ? "text-blue-500" : ""
                )}
              />
              <span className="font-bold text-sm">{item.title}</span>
              <span
                className={cn(
                  "w-1/2 h-1 bg-blue-500",
                  path == item.href ? "visible" : "invisible"
                )}
              ></span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
