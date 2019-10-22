import React from "react";
import FarmerInBox from "./FarmerInBox";
import Inventory from "./Inventory";
import NewItem from './NewItem'

const FarmerHome = props => {
console.log(props)

	return (
		<>
			<FarmerInBox />
			<div>
                <Inventory {...props} items={props.items}/>
                <NewItem/>
			</div>
		</>
	);
};

export default FarmerHome;
