import HeartIcon from "../icons/Heart";
import style from './AddToFavoritesButton.module.scss';

export default function AddTooFavoritesButton({ inWishList, id, onClick }) {
	
	return (
		<button className={style.favouriteButton} onClick={() => onClick(id)}>
			<HeartIcon solid={inWishList} ></HeartIcon>
		</button>
	);
}
