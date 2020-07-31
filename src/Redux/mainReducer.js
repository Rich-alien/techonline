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
export let showMoneyOnCart = () => ({type: SHOW_CART_ALL_MONEY});
export let sortDown = () => ({type: SORT_DOWN});


let mainPageData = {
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
    ObjItem: [

        {
            id: 0,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'

        },
        {
            id: 1,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 2,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 3,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 4,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 5,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 6,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 7,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 8,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 9,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 10,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 11,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
        {
            id: 12,
            ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
            ObjImg: 'SomeImg',
            ObjPrice: '123rub'
        },
    ],
    data: [
        {id: 0, CarName: 'Lada Granta', CarImg: 'IMG'},
        {id: 1, CarName: 'Lada Granta', CarImg: 'IMG'},
        {id: 2, CarName: 'Lada Granta', CarImg: 'IMG'},
        {id: 3, CarName: 'Lada Granta', CarImg: 'IMG'},
        // {id: 4, CarName: 'Другое', CarImg: 'обводка машины'},

    ],
    SubCategory: [
        {id: 0, SubCategoryName: 'SubCategory'},
        {id: 1, SubCategoryName: 'SubCategory'},
        {id: 2, SubCategoryName: 'SubCategory'},
        {id: 3, SubCategoryName: 'SubCategory'},
        {id: 4, SubCategoryName: 'SubCategory'},
        {id: 5, SubCategoryName: 'SubCategory'},
        {id: 6, SubCategoryName: 'SubCategory'},
        {id: 7, SubCategoryName: 'SubCategory'},
        {id: 8, SubCategoryName: 'SubCategory'},
        {id: 9, SubCategoryName: 'SubCategory'},
        {id: 10, SubCategoryName: 'SubCategory'},
        {id: 11, SubCategoryName: 'SubCategory'},
        {id: 12, SubCategoryName: 'SubCategory'},
        {id: 13, SubCategoryName: 'SubCategory'},
        {id: 14, SubCategoryName: 'SubCategory'},
        {id: 15, SubCategoryName: 'SubCategory'},

    ],
    category: [
        {id: 0, Category: 'Lin1'},
        {id: 1, Category: 'Lin2'},
        {id: 2, Category: 'Lin3'},
        {id: 3, Category: 'Lin4'},
        {id: 4, Category: 'Lin5'},
        {id: 5, Category: 'Lin6'},
        {id: 6, Category: 'Lin7'},
        {id: 7, Category: 'Lin8'},
        {id: 8, Category: 'Lin9'},
        {id: 9, Category: 'Lin10'},
        {id: 10, Category: 'Lin11'},
        {id: 11, Category: 'Lin12'},
        {id: 12, Category: 'Lin13'},
        {id: 13, Category: 'Lin14'},
        {id: 14, Category: 'Lin15'},
        {id: 15, Category: 'Lin16'},

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
const mainReducer = (state = mainPageData, action) => {
    // debugger;
    switch (action.type) {
        //открытие и закрытие корзины;
        case OPEN_SHOPPING_CART: {
            let stateCopy = {...state}
            stateCopy.styleBlock.shoppingCart = 'flex';
            stateCopy.styleBlock.blur = 'blur(3px)';

            return stateCopy;
        }
        case SORT_DOWN: {
            let stateCopy = {...state}
            stateCopy.ObjItem = {...state}
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
