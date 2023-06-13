import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import style from './QuantitySelector.module.scss'

export default function QuantitySelector({
	cartProducts,
	productId,
	addProduct,
	removeProduct,
}) {
	const plusProduct = (productId) => {
		addProduct(productId);
	};
	const minusProduct = (productId) => {
		removeProduct(productId);
	};

	return (
		<div className={style.quantitySelector}>
			<PrimaryBtn
				btn='primaryBtn'
				appearance='square'
				onClick={() => minusProduct(productId)}
			>
				-
			</PrimaryBtn>
			{cartProducts.filter((id) => id === productId).length}
			<PrimaryBtn
				btn='primaryBtn'
				appearance='square'
				onClick={() => plusProduct(productId)}
			>
				+
			</PrimaryBtn>
		</div>
	);
}