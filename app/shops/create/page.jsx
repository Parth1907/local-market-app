'use client'
import React from 'react'
import {
	Card,
	Input,
	Button,
	Typography,
} from "@material-tailwind/react";

export default function CreateShop() {
  return (
		<div className="w-full flex justify-center mt-4">
			<Card color="transparent" shadow={false}>
				<Typography variant="h4" color="blue-gray" className='text-center'>
					Create Shop
				</Typography>
				<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					<div className="mb-1 flex flex-col gap-6">
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Shop Name
						</Typography>
						<Input
							size="lg"
							placeholder="Eg. Fresh Mart"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Location
						</Typography>
						<Input
							size="lg"
							placeholder="Eg. 456 Oak Avenue, Townsville, XYZ"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Catgory
						</Typography>
						<Input
							size="lg"
							placeholder="Eg. Grocery"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Coordinates
						</Typography>
						<Input
							size="lg"
							placeholder="Eg. 34.123456, -78.987654"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
					</div>
					<Button className="mt-6" fullWidth>
						Create Shop
					</Button>
				</form>
			</Card>
		</div>
	);
}
