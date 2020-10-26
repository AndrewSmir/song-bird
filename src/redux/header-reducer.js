import React from "react";

const initialState = {
    birdsList: ['Разминка', 'Воробьиные', 'Лесные птицы','Певчие птицы','Хищные птицы','Морские птицы']
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}