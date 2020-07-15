const OPEN_CATEGORY = 'OPEN-CATEGORY',
    ADD_REVIEWS = 'ADD-REVIEWS',
    UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT';

export let openCategory = () => ({type: OPEN_CATEGORY});
export let addReview = () => ({type: ADD_REVIEWS});
export let updateNewReviewsText = (text) => ({type: UPDATE_NEW_REVIEWS_TEXT, value: text})
let store = {
    stateDisplay: {
        subCategoryDisplay: 'flex',
    },
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
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
                {
                    ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
                    ObjImg: 'SomeImg',
                    ObjPrice: '123rub'
                },
            ],
            data: [
                {id: '0', CarName: 'Lada Granta', CarImg: 'IMG'},
                {id: '1', CarName: 'Lada Granta', CarImg: 'IMG'},
                {id: '2', CarName: 'Lada Granta', CarImg: 'IMG'},
                {id: '3', CarName: 'Lada Granta', CarImg: 'IMG'},
                {id: '4', CarName: 'Другое', CarImg: 'обводка машины'},

            ],
            SubCategory: [
                {SubCategoryName: 'SubCategoryName'},
                {SubCategoryName: 'SubCategoryName'},
                {SubCategoryName: 'SubCategoryName'},
            ],
            category: [
                {Category: 'Lin1'},
                {Category: 'Lin2'},
                {Category: 'Lin3'},
                {Category: 'Lin4'},
                {Category: 'Lin5'},
                {Category: 'Lin6'},
                {Category: 'Lin7'},
                {Category: 'Lin8'},
                {Category: 'Lin9'},
                {Category: 'Lin10'},
                {Category: 'Lin11'},
                {Category: 'Lin12'},
                {Category: 'Lin13'},
                {Category: 'Lin14'},
                {Category: 'Lin15'},
                {Category: 'Lin16'},

            ],
        },
        categoryDisplay: 'none',
    },
    dispatch(action) {
        switch (action.type) {
            case OPEN_CATEGORY:
                this._state.categoryDisplay = 'flex';
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