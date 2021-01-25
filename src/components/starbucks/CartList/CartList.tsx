import { Headline3 } from '@class101/ui';
import useCart from 'hooks/useCart';
import { StarbucksItem } from 'modules/starbucks';
import './CartList.scss';

interface CartListProps {}

const CartList = ({}: CartListProps) => {
  const { cartList, total } = useCart();

  return (
    <>
      <div className="CartList">
        <Headline3>내 카트</Headline3>
        {cartList.length === 0 ? <>장바구니에 아무것도 없습니다</> : cartList}
        <div className="CartList-total">총 가격 : {total}</div>
      </div>
    </>
  );
};

export default CartList;
