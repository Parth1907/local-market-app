import React from "react";
import {useEffect} from "react";
import {useState} from "react";

export const useCart = () => {
	const [cart, setCart] = useState(null);

	useEffect(() => {
		const fetchCart = async () => {
			const scheme = localStorage.getItem("scheme");
			const token = localStorage.getItem("token");
			try {
				const response = await fetch("/api/cart", {
					headers: {
						"Content-Type": "application/json",
						Authorization: `${scheme} ${token}`,
					},
				});
                const data = await response.json();
                // console.log(response);
				setCart(data);
			} catch (error) {
				console.error("Error fetching cart: ", error);
			}
		};

        fetchCart();
	}, []);

	const addToCart = async (item) => {
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		try {
			const response = await fetch("/api/cart", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${scheme} ${token}`,
				},
				body: JSON.stringify({itemList: item}),
			});
            // console.log(response);
            const data= await response.json();
            console.log(data);
            setCart(data);
		} catch (error) {
			console.error("Error adding to cart: ", error);
		}
	};

	const deleteCart = async () => {
		const scheme = localStorage.getItem("scheme");
		const token = localStorage.getItem("token");
		try {
			await fetch("/api/cart", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `${scheme} ${token}`,
				},
			});
		} catch (error) {
			console.error(error);
		}
	};

	return {
		cart,
		addToCart,
		deleteCart,
	};
};
