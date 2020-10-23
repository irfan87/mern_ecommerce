import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import Products from "../components/Products";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProductsData = async () => {
			const { data } = await axios.get("/api/products");

			setProducts(data);
		};

		fetchProductsData();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
						<Products product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
