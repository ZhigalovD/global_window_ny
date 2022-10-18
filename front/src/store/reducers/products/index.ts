import { ProductsAction, ProductsActionsEnum, ProductsState } from "./types";

const initialState: ProductsState = {
    isLoading: false
};

export default function productsReducer(state = initialState, action: ProductsAction): ProductsState {
    switch (action.type) {
        case ProductsActionsEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}
