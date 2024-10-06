import Image from "next/image"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-base rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={24} height={24} />
        </div>
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={24} height={24} />
          <div className="absolute rounded-full -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg leading-3 font-medium">Kun Lin</span>
          <span className="text-base text-gray-500 text-right">Yu</span>
        </div>
        <Image src="/avatar.png" alt="" width={48} height={48} className="rounded-full items-center"/>
      </div>
      
    </div>
  )
}

export default Navbar