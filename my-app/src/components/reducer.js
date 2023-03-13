export const initialState = {
    cartList:[],
    productList:
    [
        {
            id:1,
            title:'Levis',
            price:'5699',
            category:'Dress',
            rating: '4',
            description:'Accodion Pleats Empire Dress',
            imageURL: require('./images/levis.jpg')
        },
        {
            id:2,
            title:'Berrylush',
            price:'599',
            category:'Dress',
            rating: '3',
            description:'Floral Ruched Dress',
            imageURL: require('./images/handbag.webp')
        },
        {
            id:3,
            title:'Tokyo Talkies',
            price:'749',
            category:'Jumpsuit',
            rating: '4',
            description:'Women solid shirt dress',
            imageURL: require('./images/ShirtWomen1.jpg')
        },
        {
            id:4,
            title:'Label Ritu Kumar',
            price:'2600',
            category:'Midi Dress',
            rating: '5',
            description:'Long MAxi-dress',
            imageURL: require('./images/WomenDress1.jpg')
        },
        {
            id:5,
            title:'The derma co.',
            price:'2559',
            category:'skin-care',
            rating: '4',
            description:'women shirt',
            imageURL: require('./images/ShirtWomen2.jpg')
        },
        {
            id:6,
            title:'Flying machine',
            price:'1459',
            category:'Jeans',
            rating: '3',
            description:'women jogger high-rise',
            imageURL: require('./images/jogger.webp')
        },
        {
            id:7,
            title:'H&M',
            price:'3099',
            category:'clothing',
            rating: '4',
            description:'Multigreen solid wrap dress',
            imageURL: require('./images/WomenDress3.jpg')
        },
        {
            id:8,
            title:'Lino perros',
            price:'1459',
            category:'accessories',
            rating: '5',
            description:'potli clutch',
            imageURL: require('./images/handbag.jpg')
        },
        {
            id:9,
            title:'Flying Machine',
            price:'799',
            category:'Clothing',
            rating: '3',
            description:'floral print wrap top',
            imageURL: require('./images/WomenDress2.jpg')
        },
        {
            id:10,
            title:'wrogn',
            price:'1429',
            category:'men clothing',
            rating: '4',
            description:'slim-fit casual shirt',
            imageURL: require('./images/ShirtMen3.jpg')
        },
        {
            id:11,
            title:'allen solly',
            price:'1358',
            category:'men clothing',
            rating: '5',
            description:'slim fir casual shirt',
            imageURL: require('./images/ShirtMen1.jpg')
        },
        {
            id:12,
            title:'flying machine',
            price:'1999',
            category:'accessories',
            rating: '3',
            description:'leather formal bags',
            imageURL: require('./images/HandbaMen.jpg')
        },
        {
            id:13,
            title:'Berrylush',
            price:'599',
            category:'Dress',
            rating: '2',
            description:'Floral Ruched Dress',
            imageURL: require('./images/WomenDress4.jpg')
        },
        {
            id:14,
            title:'Tokyo Talkies',
            price:'749',
            category:'Jumpsuit',
            rating: '4',
            description:'Women solid shirt dress',
            imageURL: require('./images/ShirtWomen3.jpg')
        },
        {
            id:15,
            title:'Label Ritu Kumar',
            price:'2600',
            category:'Midi Dress',
            rating: '5',
            description:'Long MAxi-dress',
            imageURL: require('./images/WomenDress3.jpg')
        },
        {
            id:16,
            title:'The derma co.',
            price:'2155',
            category:'women clothing',
            rating: '3',
            description:'plain shirts for women',
            imageURL: require('./images/ShirtWomen5.jpg')
        },
        {
            id:17,
            title:'Flying machine',
            price:'1459',
            category:'Jeans',
            rating: '5',
            description:'women jogger high-rise',
            imageURL: require('./images/jogger.webp')
        },
        {
            id:18,
            title:'wrogn',
            price:'999',
            category:'men clothing',
            rating: '3',
            description:'Multigreen cotton shirt',
            imageURL: require('./images/ShirtMen5.jpg')
        },
        {
            id:20,
            title:'Lino perros',
            price:'1459',
            category:'accessories',
            rating: '3',
            description:'potli clutch',
            imageURL: require('./images/potli.webp')
        },
        {
            id:21,
            title:'Flying Machine',
            price:'799',
            category:'Clothing',
            rating: '4',
            description:'floral print wrap top',
            imageURL: require('./images/ShirtWomen2.jpg')
        },
        {
            id:22,
            title:'wrogn',
            price:'1429',
            category:'men clothing',
            rating: '5',
            description:'slim-fit casual shirt',
            imageURL: require('./images/ShirtMen4.jpg')
        },
        {
            id:23,
            title:'allen solly',
            price:'1358',
            category:'men clothing',
            rating: '5',
            description:'slim fir casual shirt',
            imageURL: require('./images/ShirtMen2.jpg')
        },
        {
            id:24,
            title:'flying machine',
            price:'1999',
            category:'men clothing',
            rating: '3',
            description:'pure cotton striped shirt',
            imageURL: require('./images/cotton.webp')
        },
    ]
    }
    export const reducer = (state, action) => {
        switch (action.type) {
            case'ADD_TO_CART':
            return {
                ...state,
                cartList:[...state.cartList, action.payload]
            }
            case'REMOVE_FROM_CART':
            return {
                ...state,
                cartList:state.cartList.filter(item => item.id !== action.payload)
            }
        default:
            return state;
        }
    }