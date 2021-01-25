import './MenuItem.scss';
import starbucks from 'assets/starbucks.png';
import { StarbucksItem } from 'modules/starbucks';
import { Body1, Subtitle1 } from '@class101/ui';

const MenuItem = ({ id, product_name, price }: StarbucksItem) => {
  const handleClick = (id: number) => {
    console.log(id);
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
