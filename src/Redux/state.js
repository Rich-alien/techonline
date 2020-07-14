 let store = {
    _state: {
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

export default store;