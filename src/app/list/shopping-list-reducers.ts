import { Action } from "rxjs/internal/scheduler/Action";

import {Ingredient} from '../models/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
    ingredients: [
        new Ingredient('apples', 5),
        new Ingredient('oranges', 5)
    ]
}

export function shoppingListReducers(state = initialState, action: Action) {
    switch(action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action]
            }
    }
    return state;
}