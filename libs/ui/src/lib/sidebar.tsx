import React, { SyntheticEvent, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import './sidebar.module.css';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [textArea, settextArea] = useState("");

  return (
    <>
      <div className='h-full w-full'>
        <div className="bg-zinc-50 flex flex-col w-60 h-3/4 mt-2 ml-2 mb-5 pr-6 pl-6">
          <div className='flex justify-end mt-10 mb-5'>
            <div className='w-11 h-11 rounded-lg font-thin bg-red-500 flex text-white items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold'>Duration</span>
            <select className='w-20 bg-zinc-50 mt-2.5 text-zinc-400'>
              <option>30 min</option>
            </select>
          </div>
          <div className='mt-5 mb-6 flex flex-col'>
            <div className='flex items-center'>
              <span className='font-bold mr-2.5'>Event type</span>
                <FontAwesomeIcon icon={faInfoCircle} color="blue"/>
            </div>
            <select className='bg-zinc-50 mt-2.5 text-zinc-400'>
              <option >Share slots</option>
            </select>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <span className='font-bold'>Save placeholders</span>
              <input type="checkbox" className='w-5 h-5 rounded-sm'></input>
            </div>
            <textarea placeholder='Type placeholder name here' className='w-48 mt-2 px-3 py-2 bg-zinc-50 border border-zinc-400 text-xs rounded-lg h-14'></textarea>
            <textarea value={textArea} placeholder="Start selecting availabilities you would like to share on the calendar" onChange={(e) => settextArea(e.target.value)} className='w-48 px-3 py-1 bg-zinc-50 border text-xs border-zinc-400 rounded-lg h-40 mt-3 mb-4'></textarea>
            <CopyToClipboard text={textArea}>
              <button className='px-4 py-2 h-11 bg-zinc-50 text-blue-600 w-48 text-lg font-semibold rounded-xl border border-blue-600'>Copy to clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
