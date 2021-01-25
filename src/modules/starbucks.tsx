//action type
const ADD_CART = 'starbucks/ADD_CART' as const;
const REMOVE_CART = 'starbucks/REMOVE_CART' as const;

//action creator
export const addCart = (id: number, product_name: string, price: string) => ({
  type: ADD_CART,
  payload: [
    {
      id,
      product_name,
      price,
    },
  ],
});

export const removeCart = (id: number) => ({
  type: REMOVE_CART,
  payload: id,
});

export type StarbucksActions =
  | ReturnType<typeof addCart>
  | ReturnType<typeof removeCart>;

//state
export type StarbucksItem = {
  product_name: string;
  id: number;
  price: string;
};

export type StarbucksItems = StarbucksItem[];

const initialState: StarbucksItems = [
  {
    id: 3,
    product_name: '민초라떼',
    price: '1.3',
  },
];

//reducer
export default function starbucks(
  state: StarbucksItems = initialState,
  action: StarbucksActions
) {
  switch (action.type) {
    case ADD_CART:
      return state.concat(...state, action.payload);
    case REMOVE_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
