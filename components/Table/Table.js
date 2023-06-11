/* eslint-disable @next/next/no-img-element */
import style from './Table.module.scss'

export default function Table({ products, cartProducts }) {
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
				{products.map((product) => (<>
          <tr><td colspan='3'><div className={style.line}></div></td></tr>
					<tr key={product.id}>
						<td>
							<img
								src={product.images[0]}
								alt={product.title}
								width={100}
								heigth={100}
							></img>
							{product.title}
						</td>
						<td>{cartProducts.filter((id) => id === product.id).length}</td>
						<td>
							{product.price *
								cartProducts.filter((id) => id === product.id).length} €
						</td>
					</tr></>
				))}
			</tbody>
		</table>
	);
}