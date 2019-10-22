import React from "react";

const Inventory = props => {
	const routeToItem = (e, item) => {
		e.preventDefault();
		props.history.push(`/farmerhome/${item.id}`);
	};

	return (
		<div>
			{props.items.map(item => (
				<div
					onClick={e => routeToItem(e, item)}
					className="item-card"
					key={item.id}
				>
					<img
						className="item-list-image"
						src={item.imageUrl}
						alt={item.name}
					/>
					<p>{item.name}</p>
					<p>${item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Inventory;
