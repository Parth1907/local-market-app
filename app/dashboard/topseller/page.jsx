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
	// const itemSampleData = [
	// 	{
	// 		name: "Organic Apples",
	// 		category: "Grocery",
	// 		price: 244.99,
	// 		quantity: 50,
	// 		discount: 5,
	// 	},
	// 	{
	// 		name: "Cotton T-Shirt",
	// 		category: "Clothing",
	// 		price: 150,
	// 		quantity: 100,
	// 		discount: 10,
	// 	},
	// 	{
	// 		name: "The Great Gatsby",
	// 		category: "Books",
	// 		price: 320,
	// 		quantity: 20,
	// 		discount: 25,
	// 	},
	// 	{
	// 		name: "Coffee Table",
	// 		category: "Furniture",
	// 		price: 1499.99,
	// 		quantity: 10,
	// 		discount: 10,
	// 	},
	// ];
	const itemSampleData = [
		{
			name: "Organic Apples",
			category: "Grocery",
			price: 244.99,
			quantity: 50,
			discount: 5,
			imageUrl:
				"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Cotton T-Shirt",
			category: "Clothing",
			price: 150,
			quantity: 100,
			discount: 10,
			imageUrl:
				"https://www.punekarcotton.com/cdn/shop/products/light-orange-color-combed-cotton-shirts-for-men-783984.jpg?v=1671206408",
		},
		{
			name: "The Great Gatsby",
			category: "Books",
			price: 320,
			quantity: 20,
			discount: 25,
			imageUrl:
				"https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg",
		},
		{
			name: "Coffee Table",
			category: "Furniture",
			price: 1499.99,
			quantity: 10,
			discount: 10,
			imageUrl:
				"https://cdn.decornation.in/wp-content/uploads/2020/02/wooden-coffee-table-4-stool.png",
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
						<Card className="mb-4" key={item.id}>
							<CardHeader className="flex justify-center mb-4" floated={false} shadow={false}>
								<img src={item.imageUrl} alt="Store Image" className="object-contain h-44" />
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
