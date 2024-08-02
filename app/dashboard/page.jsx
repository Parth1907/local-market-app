"use client";
import React, {useState, useEffect} from "react";
import {Card, CardHeader, CardBody, Typography} from "@material-tailwind/react";
import {BiSolidCategoryAlt} from "react-icons/bi";
import Link from "next/link";
import AddToCartBtn from "../cart/AddToCartBtn";

export default function Dashboard() {
	const [items, setItems] = useState([]);
	const categories = [
		{name: "Electronics", image: "/electronics.png"},
		{name: "Footwear", image: "/footwear.png"},
		{name: "Clothing", image: "/clothing.png"},
		{name: "Chemist", image: "/chemist.png"},
		{name: "Stationery", image: "/stationery.png"},
		{name: "Furniture", image: "/furniture.png"},
		{name: "Toys", image: "/toys.png"},
		{name: "Grocery", image: "/groceries.png"},
		{name: "Home Appliances", image: "/homeappliances.png"},
		{name: "Sports", image: "/sports.png"},
		{name: "Jewelry", image: "/jewelry.png"},
		{name: "Beauty Products", image: "/beauty.png"},
		{name: "Musical Instruments", image: "/musicalinstruments.png"},
		{name: "Pet Supplies", image: "/petsupplies.png"},
		{name: "Kitchenware", image: "/kitchenware.png"},
		{name: "Health & Wellness", image: "/health.png"},
		{name: "Tools & Hardware", image: "/tools.png"},
		{name: "Travel Accessories", image: "/travel.png"},
		{name: "Baby Products", image: "/baby.png"},
	];

	const sampleItems = [
		{
			id: 1,
			title: "Essence Mascara Lash Princess",
			price: 9.99,
			category: "beauty",
			discountPercentage: 7.17,
			stock: 5,
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
			],
		},
		{
			id: 2,
			title: "Eyeshadow Palette with Mirror",
			price: 19.99,
			category: "beauty",
			discountPercentage: 5.5,
			stock: 44,
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
			],
		},
		{
			id: 3,
			title: "Powder Canister",
			price: 14.99,
			category: "beauty",
			discountPercentage: 18.14,
			stock: 59,
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
			],
		},
		{
			id: 4,
			title: "Red Lipstick",
			price: 12.99,
			category: "beauty",
			discountPercentage: 19.03,
			stock: 68,
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
			],
		},
		{
			id: 5,
			title: "Red Nail Polish",
			price: 8.99,
			category: "beauty",
			discountPercentage: 2.46,
			stock: 71,
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
			],
		},
		{
			id: 6,
			title: "Calvin Klein CK One",
			price: 49.99,
			category: "fragrances",
			discountPercentage: 0.32,
			stock: 17,
			images: [
				"https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
			],
		},
		{
			id: 7,
			title: "Chanel Coco Noir Eau De",
			price: 129.99,
			category: "fragrances",
			discountPercentage: 18.64,
			stock: 41,
			images: [
				"https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
			],
		},
		{
			id: 8,
			title: "Dior J'adore",
			price: 89.99,
			category: "fragrances",
			discountPercentage: 17.44,
			stock: 91,
			images: [
				"https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png",
			],
		},
		{
			id: 9,
			title: "Dolce Shine Eau de",
			price: 69.99,
			category: "fragrances",
			discountPercentage: 11.47,
			stock: 3,
			images: [
				"https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png",
			],
		},
		{
			id: 10,
			title: "Gucci Bloom Eau de",
			price: 79.99,
			category: "fragrances",
			discountPercentage: 8.9,
			stock: 93,
			images: [
				"https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png",
				"https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png",
			],
		},
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
						<Link href={`/dashboard/${category.name}`} key={category.name}>
							<Card className="border-2 w-45 h-70 transition-transform transform hover:scale-105 hover:shadow-lg glow-on-hover relative overflow-hidden">
								<CardHeader className="relative z-10 mb-4 bg-gradient-to-b from-white to-blue-500">
									<img
										src={category.image}
										alt={`${category.name} Image`}
										className="object-cover h-30 w-full"
									/>
								</CardHeader>
								<CardBody>
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
					{sampleItems.map((item) => (
						<Card
							className="transition-transform transform hover:scale-105 hover:shadow-lg glow-on-hover relative overflow-hidden"
							key={item.id}
						>
							<CardHeader className="flex justify-center my-4">
								<img
									src={item.images[0]}
									alt="Store Image"
									className="object-contain h-44"
								/>
							</CardHeader>
							<CardBody>
								<Typography className="font-bold text-lg">
									{item.title}
								</Typography>
								<Typography className="flex items-center gap-1 text-sm font-semibold">
									<BiSolidCategoryAlt />
									{item.category}
								</Typography>
								<Typography className="text-sm">
									<span className="font-semibold">Price</span> : ₹
									<span className="line-through">{item.price}</span>{" "}
									{(
										item.price -
										item.price * (item.discountPercentage / 100)
									).toFixed(2)}
								</Typography>
								<Typography className="text-sm mb-2">
									<span className="font-semibold">In-stock</span> : {item.stock}
								</Typography>
								<AddToCartBtn />
							</CardBody>
						</Card>
					))}
					{items.map((item) => (
						<Card
							className="transition-transform transform hover:scale-105 hover:shadow-lg glow-on-hover relative overflow-hidden"
							key={item.id}
						>
							<CardHeader className="flex justify-center my-4">
								<img
									src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
									alt="Store Image"
									className="object-contain h-44"
								/>
							</CardHeader>
							<CardBody>
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
								<Typography className="text-sm mb-2">
									<span className="font-semibold">In-stock</span> :{" "}
									{item.quantity}
								</Typography>
								<AddToCartBtn />
							</CardBody>
						</Card>
					))}
				</div>
			</div>
			<style jsx>{`
				@keyframes glow {
					0% {
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
					}
					50% {
						box-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
					}
					100% {
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
					}
				}

				.glow-on-hover {
					transition: box-shadow 0.3s ease-in-out;
				}

				.glow-on-hover:hover {
					animation: glow 1s infinite;
				}
			`}</style>
		</div>
	);
}
