const OPEN_CATEGORY = 'OPEN-CATEGORY',
    OPEN_SUB_CATEGORY = 'OPEN-SUB-CATEGORY',
    OPEN_TITLE = 'OPEN-TITLE',
    CLOSE_TITLE = 'CLOSE-TITLE',
    CLOSE_SUB_CATEGORY = 'CLOSE-SUB-CATEGORY',
    CLOSE_CATEGORY = 'CLOSE-CATEGORY',
    UP_COUNT = 'UP-COUNT',
    DOWN_COUNT = 'DOWN-COUNT';
export let openCategory = () => ({type: OPEN_CATEGORY});
export let openSubCategory = () => ({type: OPEN_SUB_CATEGORY});
export let openTitle = () => ({type: OPEN_TITLE});
export let closeTitle = () => ({type: CLOSE_TITLE});
export let closeSubCategory = () => ({type: CLOSE_SUB_CATEGORY});
export let closeCategory = () => ({type: CLOSE_CATEGORY});
export let upCount = () => ({type: UP_COUNT});
export let downCount = () => ({type: DOWN_COUNT});

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
        {id: 0, SubCategoryName: 'SubCategoryName'},
        {id: 1, SubCategoryName: 'SubCategoryName'},
        {id: 2, SubCategoryName: 'SubCategoryName'},
        {id: 3, SubCategoryName: 'SubCategoryName'},
        {id: 4, SubCategoryName: 'SubCategoryName'},
        {id: 5, SubCategoryName: 'SubCategoryName'},
        {id: 6, SubCategoryName: 'SubCategoryName'},
        {id: 7, SubCategoryName: 'SubCategoryName'},
        {id: 8, SubCategoryName: 'SubCategoryName'},
        {id: 9, SubCategoryName: 'SubCategoryName'},
        {id: 10, SubCategoryName: 'SubCategoryName'},
        {id: 11, SubCategoryName: 'SubCategoryName'},
        {id: 12, SubCategoryName: 'SubCategoryName'},
        {id: 13, SubCategoryName: 'SubCategoryName'},
        {id: 14, SubCategoryName: 'SubCategoryName'},
        {id: 15, SubCategoryName: 'SubCategoryName'},

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
        chooseCar: 'flex',
        categoryDisplay: 'none',
        subCategoryDisplay: 'none',
        totalItem: 'none'

    },
}
const mainReducer = (state = mainPageData, action) => {
    // debugger;
    switch (action.type) {
        // Функции для увеличения кол-во товаров и оконочательной суммы и наоборот
        case UP_COUNT:
            if (state.viewProduct.ObjCountView < state.viewProduct.ObjCount) {
                state.viewProduct.ObjCountView += 1;
                state.viewProduct.ObjTotalPrice+= state.viewProduct.ObjPrice;
            }
            return state;
        case DOWN_COUNT:
            if (state.viewProduct.ObjCountView > 1) {
                state.viewProduct.ObjCountView-=1;
                state.viewProduct.ObjTotalPrice-= state.viewProduct.ObjPrice;
            }
            return state;
        /*функции для открытия и закрытя категорий*/
        case OPEN_CATEGORY:
            state.styleBlock.categoryDisplay = 'flex';
            state.styleBlock.chooseCar = 'none';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleChooseCategory;
            return state;
        case OPEN_SUB_CATEGORY:
            state.styleBlock.subCategoryDisplay = 'flex';
            state.styleBlock.categoryDisplay = 'none';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleChooseSubCategory;
            return state;
        case OPEN_TITLE:
            state.styleBlock.totalItem = 'block';
            state.styleBlock.subCategoryDisplay = 'none';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleTotalItem;
            return state;
        case CLOSE_TITLE:
            state.styleBlock.totalItem = 'none';
            state.styleBlock.subCategoryDisplay = 'flex';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleChooseSubCategory;
            return state;
        case CLOSE_SUB_CATEGORY:
            state.styleBlock.subCategoryDisplay = 'none';
            state.styleBlock.categoryDisplay = 'flex';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleChooseCategory;
            return state;
        case CLOSE_CATEGORY:
            state.styleBlock.categoryDisplay = 'none';
            state.styleBlock.chooseCar = 'flex';
            state.nowTitleUnderBlock = state.titleUnderBlock.titleChooseCar;
            return state;
        /*! функции для открытия и закрытя категорий*/

        default:
            return state;
    }
}
export default mainReducer;
