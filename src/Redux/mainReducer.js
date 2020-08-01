const OPEN_CATEGORY = 'OPEN-CATEGORY',
    OPEN_SUB_CATEGORY = 'OPEN-SUB-CATEGORY',
    OPEN_TITLE = 'OPEN-TITLE',
    CLOSE_TITLE = 'CLOSE-TITLE',
    CLOSE_SUB_CATEGORY = 'CLOSE-SUB-CATEGORY',
    CLOSE_CATEGORY = 'CLOSE-CATEGORY',
    UP_COUNT = 'UP-COUNT',
    ADD_IN_CART = 'ADD-IN-CART',
    OPEN_SHOPPING_CART = 'OPEN-SHOPPING-CART',
    CLOSE_SHOPPING_CART = 'ClOSE-SHOPPING-CART',
    SHOW_CART_ALL_MONEY = 'SHOW-CART-ALL-MONEY',
    SORT_DOWN = 'SORT-DOWN',
    SET_ITEMS = 'SET-ITEMS',
    SET_CAR = 'SET-CAR',
    DOWN_COUNT = 'DOWN-COUNT';

export let openCategory = () => ({type: OPEN_CATEGORY});
export let openSubCategory = () => ({type: OPEN_SUB_CATEGORY});
export let openTitle = () => ({type: OPEN_TITLE});
export let closeTitle = () => ({type: CLOSE_TITLE});
export let closeSubCategory = () => ({type: CLOSE_SUB_CATEGORY});
export let closeCategory = () => ({type: CLOSE_CATEGORY});
export let upCount = () => ({type: UP_COUNT});
export let downCount = () => ({type: DOWN_COUNT});
export let addInCart = () => ({type: ADD_IN_CART});
export let closeShoppingCart = () => ({type: CLOSE_SHOPPING_CART});
export let openShoppingCart = () => ({type: OPEN_SHOPPING_CART});
export let setItemsAC = (Part) => ({type: SET_ITEMS, Part});
export let setCarAC = (CarItems) => ({type: SET_CAR, CarItems});
export let showMoneyOnCart = () => ({type: SHOW_CART_ALL_MONEY});
export let sortDown = () => ({type: SORT_DOWN});


let initialState = {
    viewProduct: {
        id: 0,
        ObjName: 'Квадрат Малевича',
        ObjCount: 10,
        ObjCountView: 1,
        ObjDescription: 'Ультракомпактная мультимедийная' +
            ' беспроводная клавиатура с USB-интерфейсом, выполненная из высококачественных' +
            ' материалов с прочным металлическим основанием. Комфортные клавиши с мягким' +
            ' ноутбучным ходом обеспечивают великолепные тактильные' +
            ' ощущения во время работы, а также низкий уровень шума.',
        ObjImg: '//',
        ObjPrice: 1477,
        ObjTotalPrice: 1477,
    },
    Cart: [],
    Part: [],
    CarItems: [],
    SubCategory: [
        {id: 0, SubCategoryName: 'SubCategory'},


    ],
    category: [
        {id: 0, Category: 'Lin1'},


    ],
    titleUnderBlock: {
        titleChooseCar: ' Выберите машину',
        titleChooseCategory: ' Выберите категорию',
        titleChooseSubCategory: ' Выберите подкатегорию',
        titleTotalItem: ' Список ',
    },
    nowTitleUnderBlock: '',
    styleBlock: {
        blur: 'none',
        chooseCar: 'flex',
        categoryDisplay: 'none',
        subCategoryDisplay: 'none',
        totalItem: 'none',
        shoppingCart: 'none'

    },
    CartMoney: 0,
}
const mainReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        styleBlock: {...state.styleBlock},
    }
    switch (action.type) {

        case SET_CAR: {
            return {...state, CarItems: [...state.CarItems, ...action.CarItems]}//берем старых и дописываем новых
        }
        // case SET_CATEGORY: {
        //     return {...state, CarItems: [...state.CarItems, ...action.CarItems]}//берем старых и дописываем новых
        // }
        // case SET_SUB_CATEGORY: {
        //     return {...state, CarItems: [...state.CarItems, ...action.CarItems]}//берем старых и дописываем новых
        // }
        case SET_ITEMS: {
            return {...state, Part: [...state.Part, ...action.Part]}//берем старых и дописываем новых
        }
        //открытие и закрытие корзины;
        case OPEN_SHOPPING_CART: {
            stateCopy.styleBlock.blur = 'blur(3px)';
            stateCopy.styleBlock.shoppingCart = 'flex';
            return stateCopy;
        }
        case SORT_DOWN: {
            let stateCopy = {...state}
            stateCopy.Part = {...state}
            //сортировка по уменьшению
            return stateCopy;
        }
        case CLOSE_SHOPPING_CART: {
            let stateCopy = {...state}
            stateCopy.styleBlock.shoppingCart = 'none';
            stateCopy.styleBlock.blur = 'none';

            return stateCopy;
        }
        //Добавление товара в массив CartItem
        //Доработать!
        case ADD_IN_CART: {
            let CartObj = {
                id: state.Cart.length,
                ObjName: state.viewProduct.ObjName,
                ObjCount: state.viewProduct.ObjCount,
                ObjCountView: state.viewProduct.ObjCountView,
                ObjDescription: state.viewProduct.ObjDescription,
                ObjImg: state.viewProduct.ObjImg,
                ObjPrice: state.viewProduct.ObjPrice,
                ObjTotalPrice: state.viewProduct.ObjTotalPrice,
            }
            let stateCopy = {...state}
            stateCopy.Cart.push(CartObj);

            stateCopy.CartMoney = 0;
            for (let i = 0; i < state.Cart.length; i++) {
                stateCopy.CartMoney += stateCopy.Cart[i].ObjTotalPrice;
            }
            console.log(state.Cart);
            return stateCopy;
        }
        // Функции для увеличения кол-во товаров и оконочательной суммы и наоборот
        case UP_COUNT: {
            let stateCopy = {...state};
            stateCopy.viewProduct = {...state.viewProduct};
            if (stateCopy.viewProduct.ObjCountView < stateCopy.viewProduct.ObjCount) {
                stateCopy.viewProduct.ObjCountView += 1;
                stateCopy.viewProduct.ObjTotalPrice += stateCopy.viewProduct.ObjPrice;
            }
            return stateCopy;
        }
        case DOWN_COUNT: {
            let stateCopy = {...state};
            stateCopy.viewProduct = {...state.viewProduct};
            if (stateCopy.viewProduct.ObjCountView > 1) {
                stateCopy.viewProduct.ObjCountView -= 1;
                stateCopy.viewProduct.ObjTotalPrice -= stateCopy.viewProduct.ObjPrice;
            }
            return stateCopy;
        }
        /*функции для открытия и закрытя категорий*/
        case OPEN_CATEGORY: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};
            stateCopy.styleBlock.categoryDisplay = 'flex';
            stateCopy.styleBlock.chooseCar = 'none';
            stateCopy.styleBlock.totalItem = 'none';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCategory;
            return stateCopy;
        }
        case OPEN_SUB_CATEGORY: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};
            stateCopy.styleBlock.subCategoryDisplay = 'flex';
            stateCopy.styleBlock.categoryDisplay = 'none';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseSubCategory;
            return stateCopy;
        }
        case OPEN_TITLE: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};
            stateCopy.styleBlock.totalItem = 'block';
            stateCopy.styleBlock.subCategoryDisplay = 'none';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleTotalItem;
            return stateCopy;
        }
        case CLOSE_TITLE: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};
            stateCopy.styleBlock.totalItem = 'none';
            stateCopy.styleBlock.subCategoryDisplay = 'flex';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseSubCategory;
            return stateCopy;
        }
        case CLOSE_SUB_CATEGORY: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};

            stateCopy.styleBlock.subCategoryDisplay = 'none';
            stateCopy.styleBlock.categoryDisplay = 'flex';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCategory;
            return stateCopy;
        }
        case CLOSE_CATEGORY: {
            let stateCopy = {...state};
            stateCopy.styleBlock = {...state.styleBlock};
            stateCopy.titleUnderBlock = {...state.titleUnderBlock};
            stateCopy.nowTitleUnderBlock = {...state.nowTitleUnderBlock};
            stateCopy.styleBlock.categoryDisplay = 'none';
            stateCopy.styleBlock.chooseCar = 'flex';
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCar;
            return stateCopy;
        }
        /*! функции для открытия и закрытя категорий*/

        default:
            return state;
    }
}
export default mainReducer;
