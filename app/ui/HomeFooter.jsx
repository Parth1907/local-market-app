import React from 'react'

export default function HomeFooter() {
  return (
		<div className="w-full bg-[#00379c] py-[40px] px-[30px] text-center">
			<button className="bg-[#004ddb] text-white border-none py-4 px-8 text-lg cursor-pointer transition duration-300 hover:bg-[#00313d]">
				<a href="/dashboard">EXPLORE AVAILABLE ITEMS</a>
			</button>
		</div>
	);
}