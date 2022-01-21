const initialState = [];

export const blogList = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATEBLOG':
            return [...state, action.payload];

        default: return state;

    }
}
export const blogDesc = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATEBLOG':
            return [...state, action.para];

        default: return state;

    }
}

export const blogImage = (state = initialState, action) => {
    switch(action.type){
        case 'CREATEBLOG':
            return [...state, action.image];

        default: return state;
    }
}