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
import Image from "next/image";
// import shopImg from "./public/pexels-pixabay-264636.jpg";

export default function Shops() {

	const shopSampleData = [
		{
			name: "Evergreen Mart",
			location: "123 Pine Avenue, Townsville, XYZ",
			category: "Grocery",
			geoLocation: {
				type: "Point",
				coordinates: [34.123456, -78.987654],
			},
			imageUrl:
				"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Tech Haven",
			location: "789 Maple Street, Technopolis, ABC",
			category: "Electronics",
			geoLocation: {
				type: "Point",
				coordinates: [40.123456, -74.987654],
			},
			imageUrl:
				"https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Style Central",
			location: "123 Elm Road, Fashion City, DEF",
			category: "Clothing",
			geoLocation: {
				type: "Point",
				coordinates: [37.123456, -80.987654],
			},
			imageUrl:
				"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Book Nook",
			location: "321 Pine Lane, Literature Town, GHI",
			category: "Bookstore",
			geoLocation: {
				type: "Point",
				coordinates: [38.123456, -76.987654],
			},
			imageUrl:
				"https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			name: "Pet Paradise",
			location: "654 Cedar Boulevard, Petville, JKL",
			category: "Pet Store",
			geoLocation: {
				type: "Point",
				coordinates: [39.123456, -77.987654],
			},
			imageUrl:
				"https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzA2fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
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
				const response = await fetch("/api/shop");
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
				`/api/shop/${userShop.id}`,
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
								<Image src="" alt="Store Image" className="object-contain" />
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
									<Link href={`/shops/${userShop.id}/edit`}>
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
				{shopSampleData.map((shop) => (
					<Link href={`/shops/${shop.id}`} key={shop.id}>
						<Card className="">
							<CardHeader className="flex items-center mb-4 h-44" floated={false}>
								<Image
									src={shop.imageUrl}
									alt="Store Image"
									className="object-contain"
								/>
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
				{shops.map((shop) => (
					<Link href={`/shops/${shop.id}`} key={shop.id}>
						<Card className="">
							<CardHeader className="flex items-center mb-4" floated={false}>
								<Image
									src={
										shop.imageUrl ||
										"https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/freshmart/ogimage-freshmart.jpg"
									}
									alt="Store Image"
									className="object-contain"
								/>
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
