const OPEN_CATEGORY = 'OPEN-CATEGORY',
    ADD_REVIEWS = 'ADD-REVIEWS',
    UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT',
    OPEN_SUB_CATEGORY = 'OPEN-SUB-CATEGORY',
    OPEN_TITLE = 'OPEN-TITLE',
    CLOSE_TITLE = 'CLOSE-TITLE',
    CLOSE_SUB_CATEGORY = 'CLOSE-SUB-CATEGORY',
    CLOSE_CATEGORY = 'CLOSE-CATEGORY';

export let openCategory = () => ({type: OPEN_CATEGORY});
export let openSubCategory = () => ({type: OPEN_SUB_CATEGORY});
export let openTitle = () => ({type: OPEN_TITLE});
export let closeTitle = () => ({type: CLOSE_TITLE});
export let closeSubCategory = () => ({type: CLOSE_SUB_CATEGORY});
export let closeCategory = () => ({type: CLOSE_CATEGORY});

export let updateNewReviewsText = (text) => ({type: UPDATE_NEW_REVIEWS_TEXT, value: text});
export let addReview = () => ({type: ADD_REVIEWS});
let store = {
    // stateDisplay: {
    //     subCategoryDisplay: 'none',
    // },
    _state: {
        DescriptionPage: {
            Reviews: [
                {
                    id: 0, author: 'Rich', msg: 'fuck', star: 5,
                },
                {
                    id: 1, author: 'Rich', msg: 'fuck', star: 5,
                },
                {
                    id: 2, author: 'Rich', msg: 'fuck', star: 5,
                },
                {
                    id: 3, author: 'Rich', msg: 'fuck', star: 5,
                },
                {
                    id: 4, author: 'Rich', msg: 'fuck', star: 5,
                },
                {
                    id: 5, author: 'Rich', msg: 'fuck', star: 5,
                },
            ],
            newReviewText: ' ',
        },

        mainPage: {

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
            titleUnderBLock: {
                titleChooseCar: '(1)',
                titleChooseCategory: '(2)',
                titleChooseSubCategory: '(3)',
                titleTotalItem: '(4)',

            },
            nowTitleUnderBlock: '(1)',

        },
        styleBlock: {
            chooseCar: 'flex',
            categoryDisplay: 'none',
            subCategoryDisplay: 'none',
            totalItem: 'none'

        }
    },
    dispatch(action) {
        switch (action.type) {
            case OPEN_CATEGORY:
                this._state.styleBlock.categoryDisplay = 'flex';
                this._state.styleBlock.chooseCar = 'none';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleChooseCategory;
                this._callSubscriber(this._state);
                break;
            case OPEN_SUB_CATEGORY:
                this._state.styleBlock.subCategoryDisplay = 'flex';
                this._state.styleBlock.categoryDisplay = 'none';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleChooseSubCategory;
                this._callSubscriber(this._state);
                break;
            case OPEN_TITLE:
                this._state.styleBlock.totalItem = 'block';
                this._state.styleBlock.subCategoryDisplay = 'none';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleTotalItem;
                this._callSubscriber(this._state);
                break;
            case CLOSE_TITLE:
                this._state.styleBlock.totalItem = 'none';
                this._state.styleBlock.subCategoryDisplay = 'flex';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleChooseSubCategory;
                this._callSubscriber(this._state);
                break;
            case CLOSE_SUB_CATEGORY:
                this._state.styleBlock.subCategoryDisplay = 'none';
                this._state.styleBlock.categoryDisplay = 'flex';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleChooseCategory;
                this._callSubscriber(this._state);
                break;
            case CLOSE_CATEGORY:
                this._state.styleBlock.categoryDisplay = 'none';
                this._state.styleBlock.chooseCar = 'flex';
                this._state.mainPage.nowTitleUnderBlock = this._state.mainPage.titleUnderBLock.titleChooseCar;
                this._callSubscriber(this._state);
                break;
            case ADD_REVIEWS:
                let newReviews = {
                    id: this._state.DescriptionPage.Reviews.length + 1,
                    author: 'Rich',
                    msg: this._state.DescriptionPage.newReviewText,
                    star: 5,
                };
                this._state.DescriptionPage.Reviews.push(newReviews);
                this._state.DescriptionPage.newReviewText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_REVIEWS_TEXT:
                this._state.DescriptionPage.newReviewText = action.value;
                this._callSubscriber(this._state);
                break;
            default:
                console.log('не правильно названна функция')
        }
    },

    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

window.store = store;
export default store;