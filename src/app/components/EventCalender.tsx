"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];  

const EventCalender = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [mounted, setMounted] = useState(false); // 用來追蹤是否在客戶端已經渲染

  useEffect(() => {
    setMounted(true); // 當客戶端渲染完成後，設置為 true
  }, []);

  if (!mounted) {
    return null; // 在還沒客戶端渲染完成前不顯示日曆
  }

  return (
    <div className="bg-white p-4 rounded-md">
        {/* CALENDAR */}
        <Calendar onChange={setValue} value={value} />
        {/* EVENT */}
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image className="cursor-pointer" src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className="flex flex-col gap-4">
            {events.map(event =>(
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-michelinSky even:border-t-michelinPurple" key={event.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{event.title}</h1>
                        <span className="text-gray-400 text-xs">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-500 text-sm">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default EventCalender;