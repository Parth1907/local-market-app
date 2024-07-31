"use client";
import React, {useState, useEffect} from "react";
import AddToCartButton from "../cart/AddToCartBtn";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import {BiSolidCategoryAlt} from "react-icons/bi";
import Link from "next/link";

export default function Dashboard() {
	const [items, setItems] = useState([]);
	const categories = [
		{name: "Electronics", image: "/electronics.png"}, 
		{name: "Footwear", image: "/footwear.png"},
		{name: "Fast Food", image: "/fastfood.png"},
		{name: "Clothing", image: "/clothing.png"}, 
		{name: "Chemist", image: "/chemist.png"}, 
		{name: "Stationery", image: "/stationery.png"},
		{name: "Books", image: "/books.png"}, 
		{name: "Furniture", image: "/furniture.png"}, 
		{name: "Toys", image: "/toys.png"}, 
		{name: "Grocery", image: "/groceries.png"}, 
		{name: "Home Appliances", image: "/homeappliances.png"},
		{name: "Sports", image: "/sports.png"}, 
		{name: "Jewelry", image: "/jewelry.png"}, 
		{name: "Beauty Products", image: "/beauty.png"},
		{name: "Gardening", image: "/gardening.png"},
		{name: "Musical Instruments", image: "/musicalinstruments.png"},
		{name: "Office Supplies", image: "/officesupplies.png"},
		{name: "Pet Supplies", image: "/petsupplies.png"},
		{name: "Outdoor Equipment", image: "/outdoor.png"},
		{name: "Kitchenware", image: "/kitchenware.png"},
		{name: "Health & Wellness", image: "/health.png"},
		{name: "Tools & Hardware", image: "/tools.png"},
		{name: "Travel Accessories", image: "/travel.png"},
		{name: "Baby Products", image: "/baby.png"},
		{name: "Bags & Luggage", image: "/bags.png"},
	];

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch("http://localhost:5001/api/item");
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchItems();
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-white to-[#203c9c] flex flex-col">
			<div className="mx-2 mt-24 flex-grow">
				<Typography variant="h3" className="text-center text-blue-800 mb-6">
					Items
				</Typography>
				{/* Categories Section */}
				<Typography variant="h4" className="text-center text-blue-800 mb-6">
					Categories
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
					{categories.map((category) => (
						<Link href={`/dashboard/${category.name}`}>
							<Card className="border-2 h-44" key={category.name}>
								<CardHeader className="bg-gray-500 mb-4" floated={false}>
									<img
										src={category.image}
										alt={`${category.name} Image`}
										className="object-contain h-full w-full"
									/>
								</CardHeader>
								<CardBody className="">
									<Typography className="font-bold text-lg text-center">
										{category.name}
									</Typography>
								</CardBody>
							</Card>
						</Link>
					))}
				</div>
				{/* Items Section */}
				<Typography variant="h4" className="text-center text-white mb-6">
					Available Items
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
					{items.map((item) => (
						<Card className="flex-row border-2 h-44" key={item.id}>
							<CardHeader className="bg-gray-500 mb-4" floated={false}>
								<img src="" alt="Store Image" className="object-contain" />
							</CardHeader>
							<CardBody className="">
								<Typography className="font-bold text-lg">
									{item.name}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm font-semibold">
									<BiSolidCategoryAlt />
									{item.category}
								</Typography>
								<Typography className="text-sm">
									<span className="font-semibold">Price</span> : ₹
									<span className="line-through">{item.price}</span>{" "}
									{item.finalPrice}
								</Typography>
								<Typography className="text-sm">
									<span className="font-semibold">In-stock</span> :{" "}
									{item.quantity}
								</Typography>
							</CardBody>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
