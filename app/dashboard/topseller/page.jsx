"use client";
import React from "react";
import Sidenav from "@/app/ui/sidenav";
import {
	Typography,
	Card,
	CardHeader,
	CardBody,
	Button,
} from "@material-tailwind/react";
import AddToCartBtn from "@/app/cart/AddToCartBtn";
import {BiSolidCategoryAlt} from "react-icons/bi";

export default function Topseller() {
	const itemSampleData = [
		{
			name: "Organic Apples",
			category: "Grocery",
			price: 244.99,
			quantity: 50,
			discount: 5,
		},
		{
			name: "Cotton T-Shirt",
			category: "Clothing",
			price: 150,
			quantity: 100,
			discount: 10,
		},
		{
			name: "The Great Gatsby",
			category: "Books",
			price: 320,
			quantity: 20,
			discount: 25,
		},
		{
			name: "Coffee Table",
			category: "Furniture",
			price: 1499.99,
			quantity: 10,
			discount: 10,
		},
	];
	return (
		<div>
			<div className="w-3/4 ml-4">
				<Typography
					variant="h3"
					className="text-center mb-6 mt-10 text-blue-800"
				>
					Top Sellers
				</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
					{itemSampleData.map((item) => (
						<Card className="flex-row border-2 h-44 mb-4" key={item.id}>
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
									{(item.price - item.price * (item.discount / 100)).toFixed(2)}
								</Typography>
								<Typography className="text-sm">
									<span className="font-semibold">Quantity</span> :{" "}
									<input type="number" value={item.quantity} />
								</Typography>
                <AddToCartBtn />
							</CardBody>
						</Card>
					))}
				</div>
			</div>
			<Sidenav />
		</div>
	);
}
