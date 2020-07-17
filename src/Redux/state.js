// import mainReducer from "./mainReducer";
// //
// // const ADD_REVIEWS = 'ADD-REVIEWS',
// //     UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT';
//
// // export let openCategory = () => ({type: OPEN_CATEGORY});
// // export let openSubCategory = () => ({type: OPEN_SUB_CATEGORY});
// // export let openTitle = () => ({type: OPEN_TITLE});
// // export let closeTitle = () => ({type: CLOSE_TITLE});
// // export let closeSubCategory = () => ({type: CLOSE_SUB_CATEGORY});
// // export let closeCategory = () => ({type: CLOSE_CATEGORY});
// //
// // export let updateNewReviewsText = (text) => ({type: UPDATE_NEW_REVIEWS_TEXT, value: text});
// // export let addReview = () => ({type: ADD_REVIEWS});
// let store = {
//     _state: {
//         mainPage: {
//
//             ObjItem: [
//
//                 {
//                     id: 0,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 1,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 2,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 3,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 4,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 5,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 6,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 7,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 8,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 9,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 10,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 11,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//                 {
//                     id: 12,
//                     ObjName: 'some rfsdvdsfbefvbsdvsdvdsfvsd dsvdfffffffffffffffffffff',
//                     ObjImg: 'SomeImg',
//                     ObjPrice: '123rub'
//                 },
//             ],
//             data: [
//                 {id: 0, CarName: 'Lada Granta', CarImg: 'IMG'},
//                 {id: 1, CarName: 'Lada Granta', CarImg: 'IMG'},
//                 {id: 2, CarName: 'Lada Granta', CarImg: 'IMG'},
//                 {id: 3, CarName: 'Lada Granta', CarImg: 'IMG'},
//                 // {id: 4, CarName: 'Другое', CarImg: 'обводка машины'},
//
//             ],
//             SubCategory: [
//                 {id: 0, SubCategoryName: 'SubCategoryName'},
//                 {id: 1, SubCategoryName: 'SubCategoryName'},
//                 {id: 2, SubCategoryName: 'SubCategoryName'},
//                 {id: 3, SubCategoryName: 'SubCategoryName'},
//                 {id: 4, SubCategoryName: 'SubCategoryName'},
//                 {id: 5, SubCategoryName: 'SubCategoryName'},
//                 {id: 6, SubCategoryName: 'SubCategoryName'},
//                 {id: 7, SubCategoryName: 'SubCategoryName'},
//                 {id: 8, SubCategoryName: 'SubCategoryName'},
//                 {id: 9, SubCategoryName: 'SubCategoryName'},
//                 {id: 10, SubCategoryName: 'SubCategoryName'},
//                 {id: 11, SubCategoryName: 'SubCategoryName'},
//                 {id: 12, SubCategoryName: 'SubCategoryName'},
//                 {id: 13, SubCategoryName: 'SubCategoryName'},
//                 {id: 14, SubCategoryName: 'SubCategoryName'},
//                 {id: 15, SubCategoryName: 'SubCategoryName'},
//
//             ],
//             category: [
//                 {id: 0, Category: 'Lin1'},
//                 {id: 1, Category: 'Lin2'},
//                 {id: 2, Category: 'Lin3'},
//                 {id: 3, Category: 'Lin4'},
//                 {id: 4, Category: 'Lin5'},
//                 {id: 5, Category: 'Lin6'},
//                 {id: 6, Category: 'Lin7'},
//                 {id: 7, Category: 'Lin8'},
//                 {id: 8, Category: 'Lin9'},
//                 {id: 9, Category: 'Lin10'},
//                 {id: 10, Category: 'Lin11'},
//                 {id: 11, Category: 'Lin12'},
//                 {id: 12, Category: 'Lin13'},
//                 {id: 13, Category: 'Lin14'},
//                 {id: 14, Category: 'Lin15'},
//                 {id: 15, Category: 'Lin16'},
//
//             ],
//             titleUnderBLock: {
//                 titleChooseCar: '(1) Выберите машину',
//                 titleChooseCategory: '(2) Выберите категорию',
//                 titleChooseSubCategory: '(3) Выберите подкатегорию',
//                 titleTotalItem: '(4) Список ',
//             },
//             nowTitleUnderBlock: '(1)',
//             styleBlock: {
//                 chooseCar: 'flex',
//                 categoryDisplay: 'none',
//                 subCategoryDisplay: 'none',
//                 totalItem: 'none'
//
//             },
//         },
//         DescriptionPage: {
//             Reviews: [
//                 {
//                     id: 0, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//                 {
//                     id: 1, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//                 {
//                     id: 2, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//                 {
//                     id: 3, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//                 {
//                     id: 4, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//                 {
//                     id: 5, author: 'Rich', msg: 'fuck', star: 5,
//                 },
//             ],
//             newReviewText: ' ',
//         },
//     },
//     dispatch(action) {
//         this._state.mainPage = mainReducer(this._state.mainPage,action);
//         // switch (action.type) {
//         //     case ADD_REVIEWS:
//         //         let newReviews = {
//         //             id: this._state.DescriptionPage.Reviews.length + 1,
//         //             author: 'Rich',
//         //             msg: this._state.DescriptionPage.newReviewText,
//         //             star: 5,
//         //         };
//         //         this._state.DescriptionPage.Reviews.push(newReviews);
//         //         this._state.DescriptionPage.newReviewText = '';
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     case UPDATE_NEW_REVIEWS_TEXT:
//         //         this._state.DescriptionPage.newReviewText = action.value;
//         //         this._callSubscriber(this._state);
//         //         break;
//         //     default:
//         //         console.log('не правильно названна функция')
//         // }
//         this._callSubscriber(this._state);
//     },
//
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
// }
//
// window.store = store;
// export default store;