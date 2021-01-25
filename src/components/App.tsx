import { Caption1, GridList, Subtitle1 } from '@class101/ui';
import React from 'react';

function App() {
  return (
    <>
      <GridList
        items={[
          {
            title: '제주 비자림 콜드 브루',
            discount: 10,
          },
          {
            title: '콜드 브루',
            discount: 40,
          },
        ]}
        renderItem={(item) => {
          const { title, discount } = item;
          return (
            <div>
              <Subtitle1>{title}</Subtitle1>
              <Caption1 fontWeight="Bold" color="green">
                {discount}% 할인
              </Caption1>
            </div>
          );
        }}
        smColumn={1}
        lgColumn={3}
      ></GridList>
    </>
  );
}

export default App;
