import * as typesAction from './../constants/typesAction';

let initialState = [
    { 
        id: 1,
        name: 'Iphone 12 Pro Max',
        rating: 5,
        description: 'Sản phẩm do apply sản xuất',
        price: 1000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-200x200.jpg'
    },
    {   
        id: 2,
        name: 'Samsum S21 Utra',
        rating: 4,
        description: 'Sản phẩm do samsum sản xuất',
        price: 950,
        image: 'https://images.samsung.com/vn/smartphones/galaxy-s21-ultra-5g/models/images/galaxy-s21-ultra-5g_models_colors_phantom-black.png'
    },
    { 
        id: 3,
        name: 'Google Pixel 4XL',
        rating: 4,
        description: 'Sản phẩm do google sản xuất',
        price: 900,
        image: 'https://product.hstatic.net/1000370129/product/26df75f9588d7164e30eb4_f93f4bc_7d67d9460c234be18b8527464bdd6a35_grande_caddbf98f1db4734a47d3c5907986b83_master.png'
    }
];

let myReducer = (state = initialState, action) =>{
    switch(action.type) {
        case typesAction.SHOW_PRODUCT:
            return state;

        default: return state;
    }
}

export default myReducer;

