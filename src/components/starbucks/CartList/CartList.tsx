import { Headline3 } from '@class101/ui';
import useCart from 'hooks/useCart';
import './CartList.scss';

interface CartListProps {}

const CartList = ({}: CartListProps) => {
  const { cartList } = useCart();
  return (
    <>
      <div className="CartList">
        <Headline3>내 카트</Headline3>
        {cartList.length === 0 ? <>장바구니에 아무것도 없습니다</> : cartList}
      </div>
    </>
  );
};

export default CartList;
