import QuantityButton from "@ui/QuantityButton/QuantityButton";
import { ReactComponent as PlusIcon } from "@assets/img/plus.svg";
import { ReactComponent as MinusIcon } from "@assets/img/minus.svg";
import css from "./quantityBlock.module.scss";

interface QuantityBlockProps {
	onAdd: () => void,
	onRemove: () => void,
	count: number,
}

const QuantityBlock = ({
	onRemove,
	count,
	onAdd
}: QuantityBlockProps) => {
	return (
		<div className={css.wrapper}>
			<QuantityButton onClick={onRemove}>
				<MinusIcon/>
			</QuantityButton>
			<div className={css.count}>
				<span>{count}</span>
			</div>
			<QuantityButton onClick={onAdd}>
				<PlusIcon/>
			</QuantityButton>
		</div>
	);
};

export default QuantityBlock;
