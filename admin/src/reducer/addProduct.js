const addProduct = (state = {
    ProductName: '',
    Description: '',
    MetaTagTitle: '',
    MetaTagDescription: '',
    MetaTagKeywords: '',
    ProductTags: '',
    Model: '',
    SKU: '',
    UPC: '',
    EAN: '',
    JAN: '',
    ISBN: '',
    MPN: '',
    Location: '',
    Price: '',
    Taxclass: '',
    Quantity: '',
    MinimumQuantity: '',
    Length: '',
    Width: '',
    Height: '',
    LengthClass: '',
    Weight: '',
    WeightClass: '',
    Status: '',
    SortOrder: '',
    Manufacturer: '',
    Categories: '',
    Filters: '',
    Stores: '',
    Downloads: '',
    RelatedProducts: '',
    tableRow: '',
    Attribute: '',
    data: ''

}, action) => {
    switch (action.type) {
        case 'ProductName': {
            return {
                ...state,
                ProductName: action.payload
            }
        }
        case 'Description': {
            return {
                ...state,
                Description: action.payload
            }
        }
        case 'MetaTagTitle': {
            return {
                ...state,
                MetaTagTitle: action.payload
            }
        }
        case 'MetaTagDescription': {
            return {
                ...state,
                MetaTagDescription: action.payload
            }
        }
        case 'MetaTagKeywords': {
            return {
                ...state,
                MetaTagKeywords: action.payload
            }
        }
        case 'ProductTags': {
            return {
                ...state,
                ProductTags: action.payload
            }
        }
        case 'Model': {
            return {
                ...state,
                Model: action.payload
            }
        }
        case 'SKU': {
            return {
                ...state,
                SKU: action.payload
            }
        }
        case 'UPC': {
            return {
                ...state,
                UPC: action.payload
            }
        }
        case 'EAN': {
            return {
                ...state,
                EAN: action.payload
            }
        }
        case 'JAN': {
            return {
                ...state,
                JAN: action.payload
            }
        }
        case 'ISBN': {
            return {
                ...state,
                ISBN: action.payload
            }
        }
        case 'MPN': {
            return {
                ...state,
                MPN: action.payload
            }
        }
        case 'Location': {
            return {
                ...state,
                Location: action.payload
            }
        }
        case 'Price': {
            return {
                ...state,
                Price: action.payload
            }
        }
        case 'Taxclass': {
            return {
                ...state,
                Taxclass: action.payload
            }
        }
        case 'Quantity': {
            return {
                ...state,
                Quantity: action.payload
            }
        }
        case 'MinimumQuantity': {
            return {
                ...state,
                MinimumQuantity: action.payload
            }
        }
        case 'Length': {
            return {
                ...state,
                Length: action.payload
            }
        }
        case 'Width': {
            return {
                ...state,
                Width: action.payload
            }
        }
        case 'Height': {
            return {
                ...state,
                Height: action.payload
            }
        }
        case 'LengthClass': {
            return {
                ...state,
                LengthClass: action.payload
            }
        }
        case 'Weight': {
            return {
                ...state,
                Weight: action.payload
            }
        }
        case 'WeightClass': {
            return {
                ...state,
                WeightClass: action.payload
            }
        }
        case 'Status': {
            return {
                ...state,
                Status: action.payload
            }
        }
        case 'SortOrder': {
            return {
                ...state,
                SortOrder: action.payload
            }
        }
        case 'Manufacturer': {
            return {
                ...state,
                Manufacturer: action.payload
            }
        }
        case 'Categories': {
            return {
                ...state,
                Categories: action.payload
            }
        }
        case 'Filters': {
            return {
                ...state,
                Filters: action.payload
            }
        }
        case 'Stores': {
            return {
                ...state,
                Stores: action.payload
            }
        }
        case 'Downloads': {
            return {
                ...state,
                Downloads: action.payload
            }
        }
        case 'RelatedProducts': {
            return {
                ...state,
                RelatedProducts: action.payload
            }
        }
        case 'tableRow': {
            return {
                ...state,
                tableRow: [action.payload]
            }
        }
        case 'Attribute': {
            return {
                ...state,
                Attribute: {
                    data: {
                        ...state.Attribute, value: action.payload
                    }
                }

            }
        }

        default: return state

    }
}

export default addProduct