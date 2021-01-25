import './MenuItem.scss';
import starbucks from 'assets/starbucks.png';
import { StarbucksItem } from 'modules/starbucks';
import { Body1, Subtitle1 } from '@class101/ui';
import useAddCart from 'hooks/useAddCart';

const MenuItem = ({ id, product_name, price }: StarbucksItem) => {
  const onAddCart = useAddCart(id, product_name, price);
  const handleClick = (id: number) => {
    console.log(id);
    onAddCart();
  };
  return (
    <>
      <div className="MenuItem" onClick={() => handleClick(id)}>
        <img src={starbucks} alt="icon" />
        <Subtitle1>{product_name}</Subtitle1>
        <Body1>{price}</Body1>
      </div>
    </>
  );
};

export default MenuItem;
