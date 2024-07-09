import { Button } from "./ui/button";

export default function DiscountSection() {
  return (
    <section className="w-full min-h-screen relative flex flex-col gap-8 px-8 text-black select-none">
      <div className="w-full space-y-4">
        <span className="text-2xl text-red-700 font-bold text-center inline-block w-full">
          Khuyến Mãi Quanh Năm
        </span>
        <p className="text-center font-semibold text-gray-600">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Tui biết ní "ngân lượng" có hạn, mà dùng gì cũng mong tốt nhất, nên
          tui tặng ní ngập tràn khuyến mãi
        </p>
      </div>
      <div></div>
      <div className="w-full flex flex-col gap-4">
        <p>
          <span className="underline italic font-bold">Lưu ý</span>: Khuyến mãi
          khác loại <span className="font-bold italic">luôn luôn</span> được áp
          dụng đồng thời, với tích điểm lên đến 20% nữa nha.
        </p>
        <Button className="bg-orange-500">Xem khuyến mãi</Button>
      </div>
      <div>
        <span>Tải App: Google Play | App Store</span>
      </div>
    </section>
  );
}
