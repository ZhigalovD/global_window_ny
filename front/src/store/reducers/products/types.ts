export interface ProductsState {
    isLoading: boolean;
}

export enum ProductsActionsEnum {
    SET_IS_LOADING = "SET_IS_LOADING"
}

export interface SetIsLoadingAction {
    type: ProductsActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export type ProductsAction = SetIsLoadingAction
