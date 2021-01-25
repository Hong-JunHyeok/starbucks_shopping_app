import { Headline3, Button, Modal } from '@class101/ui';
import useCart from 'hooks/useCart';
import useResetCart from 'hooks/useResetCart';
import { StarbucksItem } from 'modules/starbucks';
import { useState } from 'react';
import './CartList.scss';

interface CartListProps {}

const CartList = ({}: CartListProps) => {
  const onReset = useResetCart();
  const { cartList, total } = useCart();
  const [isModal, setIsModal] = useState(false);
  const handleBuy = async () => {
    await onReset();
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <>
      <Modal
        opened={isModal}
        onClose={closeModal}
        successText="확인"
        onSuccess={closeModal}
      >
        구매가 완료되었습니다!
      </Modal>
      <div className="CartList">
        <Headline3>내 카트</Headline3>
        {cartList.length === 0 ? <>장바구니에 아무것도 없습니다</> : cartList}
        <div className="CartList-total">총 가격 : {total}</div>
        <Button color="blueLight" onClick={handleBuy}>
          구매하기
        </Button>
        <Button onClick={onReset} color="red">
          장바구니 비우기
        </Button>
      </div>
    </>
  );
};

export default CartList;
