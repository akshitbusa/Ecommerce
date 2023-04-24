const dataSave = (state = {
    keywords: '',
    parent: '',
    filters: '',
    stores: '',
    // images: '',
    columns: '',
    status: '',
    category: '',
    description: '',
    metatitle: '',
    metadescription: '',
    metakeywords: '',
    _id: '',

}, action) => {
    switch (action.type) {
        case 'SEODATASAVE': {
            return {
                ...state,
                keywords: action.payload
            }
        }
        case 'SECONDDATASAVE': {
            return {
                ...state,
                parent: action.parent,
            }
        }
        case 'filtersDatasave': {
            return {
                ...state,
                filters: action.payload
            }
        }
        case 'storesDatasave': {
            return {
                ...state,
                stores: action.payload
            }
        }
        // case 'imagesDatasave': {
        //     return {
        //         ...state,
        //         images: action.payload
        //     }
        // }
        case 'columnsDatasave': {
            return {
                ...state,
                columns: action.payload
            }
        }
        case 'sortorderDatasave': {
            return {
                ...state,
                sortorder: action.payload
            }
        }
        case 'statusDatasave': {
            return {
                ...state,
                status: action.payload

            }
        }
        case 'categoryDatasave': {
            return {
                ...state,
                category: action.payload

            }
        }
        case 'descriptionDatasave': {
            return {
                ...state,
                description: action.payload

            }
        }
        case 'metatitleDatasave': {
            return {
                ...state,
                metatitle: action.payload

            }
        }
        case 'metadescriptionDatasave': {
            return {
                ...state,
                metadescription: action.payload

            }
        }
        case 'metakeywordsDatasave': {
            return {
                ...state,
                metakeywords: action.payload

            }
        }
        case 'editData': {
            return {
                ...state,
                _id: action.payload

            }
        }




        default: return state
    }
}

export default (dataSave)