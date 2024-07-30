"use client";
import React, {useState, useEffect} from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import {BiSolidCategoryAlt} from "react-icons/bi";
import {useParams} from "next/navigation";

export default function Items() {
	const [items, setItems] = useState([]);
	const {shopId} = useParams();

	useEffect(() => {
		const fetchItems = async (e) => {
			try {
				const response = await fetch("http://localhost:5001/api/item");
				const data = await response.json();
				const items = data.filter((item) => item.shopId === shopId);
				console.log(items);

				setItems(items);
			} catch (error) {
				console.log(error);
			}
		};

		fetchItems();
	}, []);

	return (
		<div className="mx-2">
			<Typography variant="h3" className="text-center mb-6 mt-10 text-blue-800">
				Shop Items
			</Typography>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
				{items.map((item) => (
					<Card className="flex-row border-2 h-44" key={item.id}>
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
								<span className="line-through">{item.price}</span> {item.finalPrice}
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
	);
}
