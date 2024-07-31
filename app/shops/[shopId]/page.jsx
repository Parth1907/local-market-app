"use client";
import React, {useState, useEffect} from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import {FaPencil, FaTrashCan} from "react-icons/fa6";

import {BiSolidCategoryAlt} from "react-icons/bi";
import {useParams, useRouter} from "next/navigation";
import Link from "next/link";

export default function Items() {
	const router= useRouter();
	const [items, setItems] = useState([]);
	const {shopId} = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		const userString = localStorage.getItem("user");
		if (userString) {
			const user = JSON.parse(userString);
			setUser(user);
		}
	}, []);

	useEffect(() => {
		const fetchItems = async (e) => {
			try {
				const response = await fetch("http://localhost:5001/api/item");
				const data = await response.json();
				console.log(data);
				const items = data.filter((item) => item.shopId === shopId);
				setItems(items);
			} catch (error) {
				console.log(error);
			}
		};

		fetchItems();
	}, [shopId]);

	console.log(items);

	const handleDelete = async (itemId) => {
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");

		try {
			const response = await fetch(`http://localhost:5001/api/item/${itemId}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${scheme} ${token}`,
				},
			});

			let data = null;
			if (response.status !== 204) {
				try {
					data = await response.json();
				} catch (error) {
					console.error("Failed to parse JSON:", error);
				}
			}

			if (response.ok) {
				console.log("Item deleted successfully:");
				router.push(`/shops/${shopId}`);
			} else {
				console.error("Deletion failed: ", data);
			}
		} catch (error) {
			console.error("Error deleting shop", error);
		}
	};

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
								<span className="line-through">{item.price}</span>{" "}
								{item.finalPrice}
							</Typography>
							<Typography className="text-sm">
								<span className="font-semibold">In-stock</span> :{" "}
								{item.quantity}
							</Typography>
							{item.shopId === user.shopId && (
								<div className="">
									<Button className="mr-4 mt-2">
										<Link href={`/shops/${shopId}/edit/${item.id}`}>
											<FaPencil />
										</Link>
									</Button>
									<Button
										className="mr-2 mt-2"
										onClick={(e) => {
											e.preventDefault();
											handleDelete(item.id);
										}}
									>
										<FaTrashCan />
									</Button>
								</div>
							)}
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	);
}
