"use client";
import React, {useEffect, useState} from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import {FaLocationDot, FaPencil, FaTrashCan, FaPlus} from "react-icons/fa6";
import {BiSolidCategoryAlt} from "react-icons/bi";
import {useRouter} from "next/navigation";
import Link from "next/link";
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

	const router = useRouter();
	const [shops, setShops] = useState([]);
	const [error, setError] = useState(null);
	const [userHasShop, setUserHasShop] = useState(false);
	const [userShop, setUserShop] = useState([{}]);
	console.log(userShop);

	useEffect(() => {
		const fetchShops = async (e) => {
			try {
				const response = await fetch("http://localhost:5001/api/shop");
				const data = await response.json();
				const userString = localStorage.getItem("user");
				if (userString) {
					const user = JSON.parse(userString);
					const userShop = data.filter((shop) => shop.ownerId === user.id);
					if (userShop.length > 0) {
						setUserHasShop(true);
						setUserShop(userShop[0]);
					}
				}

				setShops(data);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchShops();
	}, []);

	if (error) {
		console.log(error);
	}

	const handleDelete = async (e) => {
		e.preventDefault();
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");

		try {
			const response = await fetch(
				`http://localhost:5001/api/shop/${userShop.id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `${scheme} ${token}`,
					},
				}
			);

			let data = null;
			if (response.status !== 204) {
				try {
					data = await response.json();
				} catch (error) {
					console.error("Failed to parse JSON:", error);
				}
			}

			if (response.ok) {
				console.log("Shop deleted successfully:", data);
				router.push("/shops");
			} else {
				console.error("Deletion failed: ", data);
			}
		} catch (error) {
			console.error("Error deleting shop", error);
		}
	};

	return (
		<div className="mx-4">
			<Typography variant="h3" className="text-center mb-6 mt-8 text-blue-800">
				Shops
			</Typography>
			{!userHasShop && (
				<Button className="mb-4">
					<Link href="/shops/create">Create Shop</Link>
				</Button>
			)}
			{userHasShop && (
				<div className="">
					<Typography variant="h5">My shop</Typography>
					<div className="mb-4">
						<Card className="flex-row border-2 md:w-[400px]">
							<CardHeader className="bg-gray-500 mb-4" floated={false}>
								<img src="" alt="Store Image" className="object-contain" />
							</CardHeader>
							<CardBody className="">
								<Typography className="font-bold text-lg">
									<Link href={`/shops/${userShop.id}`}>{userShop.name}</Link>
								</Typography>
								<Typography className="flex items-center gap-1 text-sm font-semibold">
									<BiSolidCategoryAlt />
									{userShop.category}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm">
									<FaLocationDot />
									{userShop.location}
								</Typography>
								<Button className="mr-4 mt-2">
									<Link href={`/shops/edit/${userShop.id}`}>
										<FaPencil />
									</Link>
								</Button>
								<Button className="mr-2 mt-2" onClick={handleDelete}>
									<FaTrashCan />
								</Button>
								<Button className="mt-2">
									<Link href="/shops/create/item">
										<FaPlus />
									</Link>
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			)}
			<Typography variant="h5">All shops</Typography>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
				{shops.map((shop) => (
					<Link href={`/shops/${shop.id}`} key={shop.id}>
						<Card className="flex-row border-2 h-44">
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
							</CardBody>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
