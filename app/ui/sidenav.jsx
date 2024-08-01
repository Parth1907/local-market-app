import React from 'react'

export default function Sidenav() {
    return (
        <div className="h-full w-[200px] fixed top-[100px] right-0 bg-blue-500 overflow-x-hidden pt-[20px]">
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer text-white block' href="SORTBY:">SORT BY:</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer text-white block' href="Distance">Distance</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer text-white block' href="Price">Price</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer text-white block' href="Rating">Rating</a>
            <a className='p-y-[6px] pr-[8px] pl-[16px] border-0 text-[20px] bg-none w-full text-left cursor-pointer text-white block' href="vendor">vendor</a>
        </div>
    )
}
