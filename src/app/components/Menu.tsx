import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-base'>
      {/* mt-4: 上邊距為 1rem (16px) */}
      {/* text-sm: 字體大小為 14px */}
      {menuItems.map(i => (
        <div className="flex flex-col gap-2" key={i.title}>
          {/* flex: 使用彈性盒子佈局，使內容水平排列 */}
          {/* flex-col: 讓子項垂直排列，即icon跟label */}
          {/* gap-2: 子元素之間的間距為 0.5rem (8px) */}
          {/* key: 使用 i.title 作為每個元素的唯一鍵，便於 React 追蹤列表的變化 */}
          
          <span className="hidden lg:block text-gray-400 font-light m-4 text-lg">
            {/* hidden: 在小螢幕上隱藏此元素 */}
            {/* lg:block: 在大螢幕 (lg) 上顯示此元素 */}
            {/* text-gray-400: 字體顏色為淺灰色 */}
            {/* font-light: 設定字體為輕量級 */}
            {/* m-4: 這個元素的邊距為 1rem (16px)，讓它不會貼著其他元素 */}
            {i.title}
          </span>
          
          {i.items.map(item => (
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-4">
              {/* href: 點擊時導向的路徑 */}
              {/* key: 使用 item.label 作為唯一鍵 */}
              {/* flex: 使用彈性盒子佈局，使內容水平排列 */}
              {/* items-center: 讓所有子元素在垂直方向居中對齊 */}
              {/* justify-center: 讓內容垂直居中對齊 */}
              {/* lg:justify-start: 在大螢幕 (lg) 上，內容向左對齊 */}
              {/* gap-4: 子元素之間的間距為 1rem (16px) */}
              {/* text-gray-500: 字體顏色為灰色 */}
              {/* py-2: 上下內邊距為 0.5rem (8px) */}
              {/* px-4: 左右內邊距為 1rem (16px) */}
              
              <Image src={item.icon} alt="" width={20} height={20} />
              {/* Image: 顯示項目的圖標 */}
              
              <span className="hidden lg:block">{item.label}</span>
              {/* hidden: 在小螢幕上隱藏此元素 */}
              {/* lg:block: 在大螢幕 (lg) 上顯示此元素 */}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu