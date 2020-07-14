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
        }
    },

    categoryDisplay: 'none',
    openCategory() {
        this.categoryDisplay = 'flex';
        this._callSubscriber(this._state);
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
    addReviews() {

        let newReviews = {
            id: this._state.DescriptionPage.Reviews.length + 1,
            author: 'Rich',
            msg: this._state.DescriptionPage.newReviewText,
            star: 5,
        };
        this._state.DescriptionPage.Reviews.push(newReviews);
        this._state.DescriptionPage.newReviewText = '';
        this._callSubscriber(this._state);
    },
    updateNewReviewsText(value) {
        this._state.DescriptionPage.newReviewText = value;
        this._callSubscriber(this._state);
    },


}

window.store = store;
export default store;