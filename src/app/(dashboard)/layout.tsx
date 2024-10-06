import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex"> {/* 垂直滿版、布局為水平*/}
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        {/* {w-[14%]: 在默認（小屏幕）狀態下，寬度是14%。
          md:w-[8%]: 在中等屏幕 (md，一般是指大約768px寬度及以上) 下，寬度變為8%，比例變小是讓他只顯示icon，防止溢出。
          lg:w-[16%]: 在大屏幕 (lg，一般是指大約1024px及以上) 下，寬度變為16%。
          xl:w-[14%]: 在超大屏幕 (xl，一般是指大約1280px及以上) 下，寬度回到14%。
          bg-red-200: 背景顏色是紅色的較淺色調。} */
        }
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
          {/* flex: 使用彈性盒子佈局，使內容水平排列 */}
          {/* items-center: 讓所有子元素在垂直方向居中對齊 */}
          {/* justify-center: 讓內容垂直居中對齊 */}
          {/* lg:justify-start: 在大螢幕 (lg) 上，內容向左對齊 */}
          {/* gap-2: 子元素之間的間距為 0.5rem (8px) */}
          {/* p-4: 設定內邊距為 1rem (16px)，四邊皆有相同的間距 */}
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <span className="hidden lg:block lg:text-lg font-bold">SchooLama</span>
          {/* hidden: 在小屏幕上隱藏此元素 */}
          {/* lg:block: 在大螢幕 (lg) 上顯示這個元素 */}
          {/* text-sm: 在小螢幕上字體大小為 14px */}
          {/* md:text-base: 在中等螢幕 (md) 上字體大小為 16px */}
          {/* lg:text-lg: 在大螢幕 (lg) 上字體大小為 18px */}
          {/* xl:text-xl: 在超大螢幕 (xl) 上字體大小為 20px */}
        </Link>

        <Menu/>
      </div>
        
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  )
}
