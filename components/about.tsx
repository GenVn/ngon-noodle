import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen relative flex flex-col gap-8 px-8 text-black mt-8 select-none">
      <div className="w-full space-y-4">
        <span className="text-2xl text-red-700 font-bold text-center inline-block w-full">
          Ngon, Sạch Và Tiện Lợi
        </span>
        <p className="text-center font-semibold text-gray-600">
          Mì ngon không chỉ ở hương vị mà còn an toàn từ nguồn nguyên liệu, sạch
          sẽ từ khâu chế biến.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Nguyên liệu thượng hạng 🌳</span>
        <p className="font-semibold text-gray-600">
          Sử dụng nguồn nguyên liệu sạch, đạt chuẩn VietGAP từ những nhà cung
          cấp uy tín như Vissan, CJ, 3F.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">
          Chế biến an toàn và sạch sẽ 🤲
        </span>
        <p className="font-semibold text-gray-600">
          Bếp được vệ sinh tổng thể mỗi 8 tiếng, đầu bếp luôn đeo nón, khẩu
          trang, găng tay.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Phục vụ chu đáo tận nơi 😘</span>
        <p className="font-semibold text-gray-600">
          Bếp được vệ sinh tổng thể mỗi 8 tiếng, đầu bếp luôn đeo nón, khẩu
          trang, găng tay.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <span>
          Đăng ký thành viên mới để bắt đầu tích điểm lên đến 20% và miễn phí
          vận chuyển xuyên sao hoả 🚀
        </span>
        <Button className="bg-orange-500">Đăng Kí Thành Viên</Button>
      </div>
    </section>
  );
}
