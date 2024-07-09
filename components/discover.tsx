import { Button } from "./ui/button";

export default function DiscoverSection() {
  return (
    <section className="w-full min-h-screen relative flex flex-col gap-4 px-8 text-black mt-8 select-none">
      <div className="w-full space-y-4">
        <span className="text-2xl text-red-700 font-bold text-center inline-block w-full">
          Bí Mật Chưa Bật Mí
        </span>
        <p className="text-center font-semibold text-gray-600">
          Những việc nhỏ có thể bạn chưa biết..
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Less sugar 🧂</span>
        <p className="font-semibold text-gray-600">
          Một số món là no-sugar. Tui thay thế đường mía bằng mật ong. Rất tốt
          cho ní và những người thân yêu.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Get higher 🙋‍♀️</span>
        <p className="font-semibold text-gray-600">
          Cao hơn và cao hơn. Tui sử dụng nước khoáng thiên nhiên để nấu ăn, có
          bổ sung canxi, vitamin K2 và D3.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Love earth 🌎</span>
        <p className="font-semibold text-gray-600">
          Sử dụng giấy tái chế và nhựa sinh học để bảo vệ trái đất - ngôi nhà
          chung của chúng ta.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Help others 👋</span>
        <p className="font-semibold text-gray-600">
          Mỗi phần ăn của bạn tui sẽ trích lợi nhuận công ty để góp phần nuôi
          một bạn nhỏ mồ côi.
        </p>
      </div>
      <div className="w-full space-y-2">
        <span className="text-xl font-bold">Be yourself 🥰</span>
        <p className="font-semibold text-gray-600">
          Được là chính bạn. Được hưởng tất cả những gì tốt đẹp nhất.
        </p>
      </div>
    </section>
  );
}
