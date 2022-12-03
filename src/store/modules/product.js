const product = {
    namespaced: true,
    state: {
        product: [{
                id: 1,
                name: 'اودی',
                price: 200,
                img: 'https://s25.picofile.com/file/8453124876/audi.jpg'
            },
            {
                id: 2,
                name: 'بنز',
                price: 300,
                img: 'https://s24.picofile.com/file/8453124892/benz.jpg'
            },
            {
                id: 3,
                name: 'بی ام و',
                price: 400,
                img: 'https://s25.picofile.com/file/8453124900/bmw.jpg'
            },
            {
                id: 4,
                name: 'دویست وشش',
                price: 500,
                img: 'https://s24.picofile.com/file/8453125776/divistosix.jpg'
            },
            {
                id: 5,
                name: 'لامبورگینی',
                price: 600,
                img: 'https://s24.picofile.com/file/8453124934/lamborgini.jpg'
            },
            {
                id: 6,
                name: 'ماتیز',
                price: 700,
                img: 'https://s25.picofile.com/file/8453124942/matiz.jpg'
            },
            {
                id: 7,
                name: 'موستانگ',
                price: 800,
                img: 'https://s24.picofile.com/file/8453249700/mustang.jpg'
            },
            {
                id: 8,
                name: 'پیکان',
                price: 900,
                img: 'https://s25.picofile.com/file/8453124950/peykan.jpg'
            },
            {
                id: 9,
                name: 'پژو405',
                price: 1000,
                img: 'https://s24.picofile.com/file/8453249718/pezo405.jpg'
            }
        ]
    },
    getters: {
        allProducts(state) {
            return state.product
        }
    },
    mutations: {},
    actions: {},
}
export default product