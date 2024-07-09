import Link from "next/link";
import { Button } from "./ui/button";

export default function FooterSection() {
  return (
    <section className="w-full relative min-h-screen flex flex-col gap-8 px-8  select-none bg-gray-900">
      <div className="w-full flex flex-col gap-4 mt-12 mb-8">
        <span className="text-lg font-bold uppercase">
          Công ty cổ phần Ngon Noodle
        </span>
        <span className="text-gray-400">MST: 999999999999</span>
        <span className="text-gray-400">
          Thương hiệu{" "}
          <span className="text-gray-200 font-semibold">#ngonnoodle</span> là
          thương hiệu đã được đăng ký.
        </span>
      </div>
      <div className="w-full flex flex-col gap-4">
        <span className="font-bold text-lg uppercase">Các chương trình</span>
        <div className="w-full flex flex-col gap-4 text-gray-400">
          <Link href={"/"}>Chương trình Thẻ Thành Viên</Link>
          <Link href={"/"}>Chương trình Giới Thiệu Nhận Quà</Link>
          <Link href={"/"}>Dành cho KOC, KOL</Link>
          <Link href={"/"}>Nhượng quyền thương hiệu</Link>
          <Link href={"/"}>Quan hệ đầu tư</Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <span className="italic">
          Từ nay muốn ăn mì ngon thì ghé{" "}
          <span className="font-semibold text-gray-400">#ngonnoodle</span> bạn
          nhé.
        </span>
      </div>
    </section>
  );
}
