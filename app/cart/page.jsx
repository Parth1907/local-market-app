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

	const calculateTotalPrice = () =>
		itemSampleData.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	const calculateTotalDiscount = () =>
		itemSampleData.reduce(
			(total, item) =>
				total + (item.price * item.discount * item.quantity) / 100,
			0
		);
	const deliveryFee = 50;
	const totalAmount =
		calculateTotalPrice() - calculateTotalDiscount() + deliveryFee;

	return (
		<div className="w-full flex flex-col items-center mt-24 gap-4">
			<Typography variant="h3" color="blue">
				Shopping Cart
			</Typography>
			<div className="w-3/4 flex">
				<div className="flex flex-col w-3/4 items-start border-2 pl-4 pt-4">
					{itemSampleData.map((item) => (
						<Card className="mb-4" key={item.id}>
							<CardHeader className="mb-4 flex justify-center" floated={false} shadow={false}>
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

				<Card className="w-1/4 h-fit ml-4 p-4 gap-4 border-2">
					<Typography variant="h5" className="font-bold mb-4">
						Price Details
					</Typography>
					<Typography className="text-sm flex justify-between ">
						<span className="font-semibold">Total Price</span> ₹
						{calculateTotalPrice().toFixed(2)}
					</Typography>
					<Typography className="text-sm flex justify-between">
						<span className="font-semibold">Total Discount</span> ₹
						{calculateTotalDiscount().toFixed(2)}
					</Typography>
					<Typography className="text-sm flex justify-between">
						<span className="font-semibold">Delivery Fee</span> ₹
						{deliveryFee.toFixed(2)}
					</Typography>
					<hr className="border-2"/>
					<Typography className="text-sm font-semibold mt-2 flex justify-between">
						<span className="font-semibold">Total Amount</span> ₹
						{totalAmount.toFixed(2)}
					</Typography>
				</Card>
			</div>

			<div className="flex justify-end w-3/4 mt-4">
				<Button className="mb-14" color="blue">
					Proceed to Buy
				</Button>
			</div>
			<Footer />
		</div>
	);
}
