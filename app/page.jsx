import React from 'react'
import Footer from './ui/HomeFooter'

export default function Page() {
  return (
		<div className="">
			<div className="flex justify-between items-center py-[100px] px-[20px] w-full max-w-[1200px] flex-[1] box-border">
				<div className="max-w-[50%] ml-12 text-left">
					<h1 className="text-[72px] m-0 font-bold leading-none text-[#00379c]">
						SUPPORT LOCAL
					</h1>
					<h2 className="text-[127px] -mt-7 font-bold text-[#00379c]">
						VENDORS
					</h2>
					<p className="text-2xl mt-5 font-normal text-[#00379c] ml-5">
						Your one-stop shop for local goods and services. Discover products
						from vendors in your community, and support small businesses by
						shopping locally.
					</p>
				</div>
				<div className="flex gap-[100px] relative">
					<div className="w-[200px] h-[200px] bg-[#00379c] flex justify-center items-center text-white text-[24px] font-bold absolute z-[3] top-0 left-[-20px]">
						<img
							src="picture1.jpg"
							alt="PICTURE 1"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-[200px] h-[200px] bg-[#00379c] flex justify-center items-center text-white text-[24px] font-bold absolute z-[2] top-[-50px] left-[-150px] ">
						<img
							src="picture2.jpg"
							alt="PICTURE 2"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="w-[200px] h-[200px] bg-[#00379c] flex justify-center items-center text-white text-[24px] font-bold absolute z-[1] top-[-100px] left-[-300px] ">
						<img
							src="picture3.jpg"
							alt="PICTURE 3"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
      <Footer></Footer>
		</div>
	);
}
