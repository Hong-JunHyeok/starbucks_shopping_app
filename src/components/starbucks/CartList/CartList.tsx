import useCart from 'hooks/useCart';
import './CartList.scss';

interface CartListProps {}

const CartList = ({}: CartListProps) => {
  const { cartList } = useCart();
  return (
    <>
      <div className="CartList">{cartList}</div>
    </>
  );
};

export default CartList;
