import { useState } from 'react'
import { ChartBarIcon, ChartPieIcon, Square2StackIcon, UserIcon, UserCircleIcon, HomeIcon, CreditCardIcon, DocumentIcon, PaperClipIcon, ChartBarSquareIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowRightIcon,ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { BsArrowLeftShort } from "react-icons/bs"

const Menus = [
  {title: "Home", icon: <HomeIcon />},
  {title: "My Account", icon: <UserCircleIcon />},
  {title: "Payment", spacing: true, icon: <CreditCardIcon />},
  
  {title: "Documents", icon: <PaperClipIcon />},
  {title: "Analytics", spacing: true, icon: <ChartBarSquareIcon />},
  
  {title: "Settings", icon: <Cog6ToothIcon />},
  {title: "Help & support", spacing: true, icon: <QuestionMarkCircleIcon />},
]
const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="flex">
        <div className={`bg-purple-400 h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} relative`}>
          {/*<ArrowLeftCircleIcon className="w-[35px] h-[35px] rounded-full -right-3.5 cursor-pointer absolute" onClick={() => setOpen(!open)} />*/}
          <BsArrowLeftShort className={`text-3xl cursor-pointer absolute -right-3 top-9 bg-white rounded-full border border-black duration-300 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
          
          <div className="inline-flex">
            <HomeIcon className="w-[40px] h-[40px] float-left mr-2 rounded" />
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>LC bank</h1>
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => (
               <div key={index}>
                 <li className={`flex text-gray-300 text-sm items-center gap-x-2 cursor-pointer p-2 hover:bg-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                   <span className="w-[40px] h-[40px] block float-left">
                     <UserCircleIcon className=""/>
                   </span>
                   <span className={` text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                     {menu.title}
                   </span>
                 </li>
               </div>
            ))}
          </ul>
        </div>
        <div className="p-7">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  )
}

export default Sidebar

/*
 <ArrowRightIcon />
      <UserIcon />
      <UserCircleIcon />
      <HomeIcon />
      <CreditCardIcon />
      <DocumentIcon />
      <PaperClipIcon />
      <ChartBarSquareIcon />
      <Cog6ToothIcon />
      <QuestionMarkCircleIcon />
*/