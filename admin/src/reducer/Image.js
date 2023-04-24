
const Image = (state = {
    image: ''
}, action) => {
    switch (action.type) {
        case 'imagesDatasave': {
            return {
                ...state,
                image: action.payload
            }
        }
        default: return state
    }
}

export default Image

