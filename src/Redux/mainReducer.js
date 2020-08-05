const OPEN_CATEGORY = 'OPEN-CATEGORY',
    CLOSE_CATEGORY = 'CLOSE-CATEGORY',
    SET_CAR = 'SET-CAR',
    OPEN_SUB_CATEGORY = 'OPEN-SUB-CATEGORY',
    OPEN_TITLE = 'OPEN-TITLE',
    CLOSE_TITLE = 'CLOSE-TITLE',
    CLOSE_SUB_CATEGORY = 'CLOSE-SUB-CATEGORY',
    UP_COUNT = 'UP-COUNT',
    ADD_IN_CART = 'ADD-IN-CART',
    OPEN_SHOPPING_CART = 'OPEN-SHOPPING-CART',
    CLOSE_SHOPPING_CART = 'ClOSE-SHOPPING-CART',
    SHOW_CART_ALL_MONEY = 'SHOW-CART-ALL-MONEY',
    SORT_DOWN = 'SORT-DOWN',
    SET_ITEMS = 'SET-ITEMS',
    SET_CATEGORY = 'SET-CATEGORY',
    SET_SUB_CATEGORY = 'SET-SUB-CATEGORY',
    DOWN_COUNT = 'DOWN-COUNT',
    DARK_SEARCH = 'DARK-SEARCH',
    OPEN_PRODUCT = 'OPEN-PRODUCT',
    SET_VIEW_PRODUCT = 'SET-VIEW-PRODUCT';


export let openCategoryAC = (carID) => ({type: OPEN_CATEGORY, carID});
export let closeCategory = () => ({type: CLOSE_CATEGORY});
export let setCarAC = (CarItems) => ({type: SET_CAR, CarItems});
export let darkSearchAC = () => ({type: DARK_SEARCH});
export let openProductAC = (ProductID) => ({type: OPEN_PRODUCT, ProductID})

export let setViewProductAC = (Product) => ({type: SET_VIEW_PRODUCT, Product});
export let openSubCategoryAC = (categoryID) => ({type: OPEN_SUB_CATEGORY, categoryID});
export let openTitleAC = (subCategoryID) => ({type: OPEN_TITLE, subCategoryID});
export let closeTitle = () => ({type: CLOSE_TITLE});

export let closeSubCategory = () => ({type: CLOSE_SUB_CATEGORY});
export let upCount = () => ({type: UP_COUNT});
export let downCount = () => ({type: DOWN_COUNT});
export let addInCart = () => ({type: ADD_IN_CART});
export let closeShoppingCart = () => ({type: CLOSE_SHOPPING_CART});

export let openShoppingCart = () => ({type: OPEN_SHOPPING_CART});
export let setItemsAC = (Part) => ({type: SET_ITEMS, Part});
export let setCategoryAC = (Category) => ({type: SET_CATEGORY, Category});
export let setSubCategoryAC = (SubCategory) => ({type: SET_SUB_CATEGORY, SubCategory});
export let showMoneyOnCart = () => ({type: SHOW_CART_ALL_MONEY});
export let sortDown = () => ({type: SORT_DOWN});


let initialState = {
    Cart: [],
    Part: [],
    CarItems: [],
    Category: [],
    SubCategory: [],
    SubCategoryID: 0,
    ProductID: 0,
    IDZ: 0,
    Product: [],
    CountTotal: {
        TotalPrice: 0,
        CountItem: 1,
    },
    titleUnderBlock: {
        titleChooseCar: ' Выберите машину',
        titleChooseCategory: ' Выберите категорию',
        titleChooseSubCategory: ' Выберите подкатегорию',
        titleTotalItem: ' Список ',
    },
    nowTitleUnderBlock: '',
    styleBlock: {
        blur: 'none',
        shoppingCart: 'none',
        chooseCar: 'flex',
        categoryDisplay: 'flex',
        subCategoryDisplay: 'flex',
        totalItem: 'flex'
    },

    darkTheme: {
        svgColor: "#2c3e50",
        bgc: "#FFFFFF",
        color: "#050816"
    },
    IP: '192.168.1.104',
    idPart: {
        Car: '0',
        Category: '0',
        SubCategory: '0',
    },
    CartMoney: 0,
    ID: 0,
}
const mainReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        styleBlock: {...state.styleBlock},
        titleUnderBlock: {...state.titleUnderBlock},
        idPart: {...state.idPart},
        darkTheme: {...state.darkTheme}
    }
    switch (action.type) {
        case DARK_SEARCH: {
            stateCopy.darkTheme.bgc = 'black';
            stateCopy.darkTheme.svgColor = "#ffffff";
            stateCopy.darkTheme.color = "#ffffff"
            return stateCopy;
        }
        case SET_CAR: {
            return {...state, CarItems: [...state.CarItems, ...action.CarItems]}//поглащаем новые жертвы
        }
        case SET_CATEGORY: {
            return {...state, Category: [...state.Category, ...action.Category]}//поглащаем новые жертвы
        }
        case SET_SUB_CATEGORY: {
            return {...state, SubCategory: [...state.SubCategory, ...action.SubCategory]}//поглащаем новые жертвы
        }
        case SET_ITEMS: {
            return {...state, Part: [...state.Part, ...action.Part]}//поглащаем новые жертвы
        }
        case SET_VIEW_PRODUCT: {
            return {...state, Product: [...state.Product, ...action.Product]}//поглащаем новые жертвы
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
                ObjName: state.Product.ObjName,
                ObjCount: state.Product.ObjCount,
                ObjCountView: state.Product.ObjCountView,
                ObjDescription: state.Product.ObjDescription,
                ObjImg: state.Product.ObjImg,
                ObjPrice: state.Product.ObjPrice,
                ObjTotalPrice: state.Product.ObjTotalPrice,
            }
            let stateCopy = {...state}
            stateCopy.Cart.push(CartObj);

            stateCopy.CartMoney = 0;
            for (let i = 0; i < state.Cart.length; i++) {
                stateCopy.CartMoney += stateCopy.Cart[i].ObjTotalPrice;
            }
            return stateCopy;
        }
        // Функции для увеличения кол-во товаров и оконочательной суммы и наоборот
        case UP_COUNT: {
            let stateCopy = {...state};
            stateCopy.Product = {...state.Product};
            if (stateCopy.Product.ObjCountView < stateCopy.Product.ObjCount) {
                stateCopy.Product.ObjCountView += 1;
                stateCopy.Product.ObjTotalPrice += stateCopy.Product.ObjPrice;
            }
            return stateCopy;
        }
        case DOWN_COUNT: {
            let stateCopy = {...state};
            stateCopy.Product = {...state.Product};
            if (stateCopy.Product.ObjCountView > 1) {
                stateCopy.Product.ObjCountView -= 1;
                stateCopy.Product.ObjTotalPrice -= stateCopy.Product.ObjPrice;
            }
            return stateCopy;
        }
        /*функции для открытия и закрытя категорий*/
        case OPEN_CATEGORY: {
            stateCopy.idPart.Car = action.carID;
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCategory;
            console.log(stateCopy.idPart);
            return stateCopy;
        }
        case OPEN_SUB_CATEGORY: {
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseSubCategory;
            stateCopy.idPart.Category = action.categoryID;
            stateCopy.ID = parseInt(action.categoryID, 10)
            stateCopy.SubCategoryID = stateCopy.ID;
            return stateCopy;
        }

        case OPEN_TITLE: {
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleTotalItem;
            stateCopy.idPart.SubCategory = action.subCategoryID;
            return stateCopy;
        }
        case OPEN_PRODUCT: {
            stateCopy.IDZ = action.ProductID;
            // console.log('хрень:' + action.ProductID);
            return stateCopy;
        }
        case CLOSE_TITLE: {
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseSubCategory;
            return stateCopy;
        }
        case CLOSE_SUB_CATEGORY: {
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCategory;
            return stateCopy;
        }
        case CLOSE_CATEGORY: {
            stateCopy.nowTitleUnderBlock = stateCopy.titleUnderBlock.titleChooseCar;
            return stateCopy;
        }
        /*! функции для открытия и закрытя категорий*/

        default:
            return state;
    }
}
export default mainReducer;
