/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect } from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import style from './Table.module.scss'

export default function Table({
	products,
	cartProducts,
	addProduct,
	removeProduct,
	totalPrice,
}) {
	return (
		<table className={style.table}>
			<thead>
				<tr>
					<th>Product</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className={style.lineTd} colSpan='3'>
						<div className={style.line}></div>
					</td>
				</tr>
				{products.map((product) => (
					<tr key={product.id + Math.floor(Math.random() * 1000)}>
						<td>
							<img
								src={product.images[0]}
								alt={product.title}
								width={100}
								heigth={100}
							></img>
							{product.title}
						</td>
						<td>
							<QuantitySelector
								cartProducts={cartProducts}
								productId={product.id}
								addProduct={addProduct}
								removeProduct={removeProduct}
							></QuantitySelector>
						</td>
						<td className={style.priceTd}>
							{product.price *
								cartProducts.filter((id) => id === product.id).length}{' '}
							€
						</td>
					</tr>
				))}
				<tr>
					<td colSpan='3'>
						<div className={style.line}></div>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>Subtotal:</td>
					<td>{totalPrice} €</td>
				</tr>
			</tbody>
		</table>
	);
}