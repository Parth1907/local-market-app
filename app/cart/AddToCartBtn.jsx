import React from "react";
import {useCart} from "./useCart";

export default function AddToCartBtn({item}) {
	const {addToCart} = useCart();
	const handleAddToCart = () => {
        console.log(item);
		addToCart(item);
	};
	return (
		<button onClick={handleAddToCart} className="px-4 py-2 bg-blue-500 text-white rounded">
			Add To Cart
		</button>
	);
}
