const product = {
    namespaced: true,
    state: {
        product: [
            {
                name: 'audi',
                price: 200,
                img: 'https://s25.picofile.com/file/8453124876/audi.jpg'
            },
            {
                name: 'benz',
                price: 300,
                img: 'https://s24.picofile.com/file/8453124892/benz.jpg'
            },
            {
                name: 'bmw',
                price: 400,
                img: 'https://s25.picofile.com/file/8453124900/bmw.jpg'
            },
            {
                name: 'devistosix',
                price: 500,
                img: 'https://s24.picofile.com/file/8453125776/divistosix.jpg'
            },
            {
                name: 'lamborgini',
                price: 600,
                img: 'https://s24.picofile.com/file/8453124934/lamborgini.jpg'
            },
            {
                name: 'matiz',
                price: 700,
                img: 'https://s25.picofile.com/file/8453124942/matiz.jpg'
            },
            {
                name: 'mustang',
                price: 800,
                img: 'https://s24.picofile.com/file/8453249700/mustang.jpg'
            },
            {
                name: 'peykan',
                price: 900,
                img: 'https://s25.picofile.com/file/8453124950/peykan.jpg'
            },
            {
                name: 'pezo405',
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
    mutations: {
    },
    actions: {
    },
}
export default product