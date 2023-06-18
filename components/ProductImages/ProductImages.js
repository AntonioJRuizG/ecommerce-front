/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import style from './ProductImages.module.scss'

export default function ProductImages({ images, title }) {
	const [activeImage, setActiveImage] = useState(images?.[0]);
	
  return (
		<div className={style.container}>
			<div className={style.bigImgContainer}>
				<img
					className={style.bigImg}
					width={300}
					height={300}
					src={activeImage}
					alt={title + ' image'}
				></img>
			</div>
			<div className={style.imagesContainer}>
				{images.map((image) => (
					<button
						key={image}
						onClick={() => setActiveImage(image)}
					>
						<img
							className={style.smallImg}
							src={image}
							alt={title + ' image'}
							width={30}
							height={30}
						></img>
					</button>
				))}
			</div>
		</div>
	);
}