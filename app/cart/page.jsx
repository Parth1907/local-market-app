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
	// const itemSampleData = [
	// 	{
	// 		name: "Organic Apples",
	// 		category: "Grocery",
	// 		price: 249.99,
	// 		quantity: 5,
	// 		discount: 5,
	// 	},
	// 	{
	// 		name: "Cotton T-Shirt",
	// 		category: "Clothing",
	// 		price: 159.99,
	// 		quantity: 1,
	// 		discount: 10,
	// 	},
	// 	{
	// 		name: "Bluetooth Earphones",
	// 		category: "Electronics",
	// 		price: 4999.99,
	// 		quantity: 1,
	// 		discount: 50,
	// 	},
	// 	{
	// 		name: "The Great Gatsby",
	// 		category: "Books",
	// 		price: 300,
	// 		quantity: 1,
	// 		discount: 25,
	// 	},
	// 	{
	// 		name: "Coffee Table",
	// 		category: "Furniture",
	// 		price: 1499.99,
	// 		quantity: 1,
	// 		discount: 10,
	// 	},
	// ];

	const itemSampleData = [
		{
			name: "Organic Apples",
			category: "Grocery",
			price: 249.99,
			quantity: 5,
			discount: 5,
			imageUrl:
				"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Whole Grain Bread",
			category: "Grocery",
			price: 99.99,
			quantity: 2,
			discount: 10,
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazPBjYM5w5AaMIofrYdPMzqx27oUFajfa5w&s",
		},
		{
			name: "Almond Milk",
			category: "Grocery",
			price: 199.99,
			quantity: 3,
			discount: 5,
			imageUrl:
				"https://silk.com/wp-content/uploads/silk-original-organic-almondmilk.png",
		},
		{
			name: "Orange Juice",
			category: "Grocery",
			price: 129.99,
			quantity: 1,
			discount: 0,
			imageUrl: "https://m.media-amazon.com/images/I/61aix3vMv5L.jpg",
		},
		{
			name: "Bananas",
			category: "Grocery",
			price: 49.99,
			quantity: 6,
			discount: 2,
			imageUrl:
				"https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
		},
	];

	return (
		<div className="w-full flex flex-col items-center mt-24 gap-4">
			<Typography variant="h3" color="blue">
				Shopping Cart
			</Typography>
			<div className="w-3/4">
				<div className="flex flex-col w-full items-start ">
					{itemSampleData.map((item) => (
						<Card className="mb-4" key={item.id}>
							<CardHeader className="mb-4 flex justify-center" floated={false}>
								<img
									src={item.imageUrl}
									alt="Store Image"
									className="object-contain h-44 "
								/>
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
							</CardBody>
						</Card>
					))}
				</div>

				<div className="flex justify-end">
					<Button className="mb-14" color="blue">
						Proceed to Buy
					</Button>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
