import React from 'react'

export default function Sidenav() {
    return (
        <div className="h-full w-[200px] fixed top-[60px] right-0 bg-black overflow-x-hidden pt-[20px]">
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer hover:text-white text-gray-500 block' href="SORTBY:">SORT BY:</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer hover:text-white text-gray-500 block' href="Distance">Distance</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer hover:text-white text-gray-500 block' href="Price">Price</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer hover:text-white text-gray-500 block' href="Rating">Rating</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer hover:text-white text-gray-500 block' href="vendor">vendor</a>
        </div>
    )
}
