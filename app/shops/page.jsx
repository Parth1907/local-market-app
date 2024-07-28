"use client";
import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import {FaLocationDot, FaMapLocationDot} from "react-icons/fa6";
import {BiSolidCategoryAlt} from "react-icons/bi";
// import shopImg from "./public/pexels-pixabay-264636.jpg";

export default function Shops() {
	const shopSampleData = [
		{
			name: "Fresh Mart",
			location: "456 Oak Avenue, Townsville, XYZ",
			category: "Grocery",
			geoLocation: {
				type: "Point",
				coordinates: [34.123456, -78.987654],
			},
		},

		{
			name: "Fashionista",
			location: "789 Elm Street, Fashion City, PQR",
			category: "Clothing",
			geoLocation: {
				type: "Point",
				coordinates: [56.789012, -23.456789],
			},
		},

		{
			name: "Tech Hub",
			location: "101 Tech Avenue, Silicon Valley, DEF",
			category: "Electronics",
			geoLocation: {
				type: "Point",
				coordinates: [78.901234, -12.345678],
			},
		},

		{
			name: "Bookworm Books",
			location: "222 Library Lane, Reading Town, GHI",
			category: "Books",
			geoLocation: {
				type: "Point",
				coordinates: [90.123456, -45.678901],
			},
		},

		{
			name: "Home Comfort",
			location: "333 Main Boulevard, Furnishville, JKL",
			category: "Furniture",
			geoLocation: {
				type: "Point",
				coordinates: [0.123456, 0.987654],
			},
		},
	];
	return (
		<div className="mx-4">
			<h1 className="text-2xl font-bold text-center mb-6">Shops</h1>
			<Button className="mb-4">
				<a href="/shops/create">Create Shop</a>
			</Button>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
				{shopSampleData.map((shop, index) => (
					<a href={`/shops/${index}`} key={index}>
						<Card className="flex-row border-2">
							<CardHeader className="bg-gray-500 mb-4" floated={false}>
								<img src="" alt="Store Image" className="object-contain" />
							</CardHeader>
							<CardBody className="">
								<Typography className="font-bold text-lg">
									{shop.name}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm font-semibold">
									<BiSolidCategoryAlt />
									{shop.category}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm">
									<FaLocationDot />
									{shop.location}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm">
									<FaMapLocationDot />
									{shop.geoLocation.coordinates}
								</Typography>
							</CardBody>
						</Card>
					</a>
				))}
			</div>
		</div>
	);
}
