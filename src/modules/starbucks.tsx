//action type
const ADD_CART = 'starbucks/ADD_CART' as const;
const REMOVE_CART = 'starbucks/REMOVE_CART' as const;
const RESET_CART = 'starbucks/RESET_CART' as const;

//action creator
let id = 0;
export const addCart = (product_name: string, price: string) => ({
  type: ADD_CART,
  payload: [
    {
      id: id++,
      product_name,
      price,
    },
  ],
});

export const removeCart = (id: number) => ({
  type: REMOVE_CART,
  payload: id,
});

export const resetCart = () => ({
  type: RESET_CART,
});

export type StarbucksActions =
  | ReturnType<typeof addCart>
  | ReturnType<typeof removeCart>
  | ReturnType<typeof resetCart>;

//state
export type StarbucksItem = {
  product_name: string;
  id: number;
  price: string;
};

export type StarbucksItems = StarbucksItem[];

const initialState: StarbucksItems = [];

//reducer
export default function starbucks(
  state: StarbucksItems = initialState,
  action: StarbucksActions
) {
  switch (action.type) {
    case ADD_CART:
      return state.concat(action.payload);
    case REMOVE_CART:
      return state.filter((item) => item.id !== action.payload);
    case RESET_CART:
      return state.filter((item) => false);
    default:
      return state;
  }
}
