"use client";
import React from "react";
import {
	Typography,
	Card,
	CardHeader,
	CardBody,
	Button,
} from "@material-tailwind/react";
import {BiSolidCategoryAlt} from "react-icons/bi";
import Footer from "../ui/footer";

export default function Cart() {
	const itemSampleData = [
		{
			name: "Organic Apples",
			category: "Grocery",
			price: 249.99,
			quantity: 5,
			discount: 5,
		},
		{
			name: "Cotton T-Shirt",
			category: "Clothing",
			price: 159.99,
			quantity: 1,
			discount: 10,
		},
		{
			name: "Bluetooth Earphones",
			category: "Electronics",
			price: 4999.99,
			quantity: 1,
			discount: 50,
		},
		{
			name: "The Great Gatsby",
			category: "Books",
			price: 300,
			quantity: 1,
			discount: 25,
		},
		{
			name: "Coffee Table",
			category: "Furniture",
			price: 1499.99,
			quantity: 1,
			discount: 10,
		},
	];

	return (
		<div className="w-full flex flex-col items-center mt-24 gap-4">
			<Typography variant="h3" color="blue">
				Shopping Cart
			</Typography>
			<div className="w-3/4">
				{itemSampleData.map((item) => (
					<Card className="flex-row border-2 h-44 mb-4" key={item.id}>
						<CardHeader className="bg-gray-500 mb-4" floated={false}>
							<img src="" alt="Store Image" className="object-contain" />
						</CardHeader>
						<CardBody className="">
							<Typography className="font-bold text-lg">{item.name}</Typography>
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
						</CardBody>
					</Card>
				))}

				<div className="flex justify-end">
					<Button className="mb-14" color="blue">Proceed to Buy</Button>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
