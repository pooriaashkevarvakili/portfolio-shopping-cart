
import Swal from "sweetalert2"

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
const cart = {
    namespaced: true,
    state: {
        cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },
    getters: {
        allProducts(state) {
            return state.cart
        },
        count(state) {
            return state.cart.length
        },
        totalAmount(state) {
            return state.cart.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        }
    },
    mutations: {
        add(state, product) {
            const item = state.cart.find((p) => p.id == product.id)
            if (!item) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        clear(state) {
            state.cart = []
            updateLocalStorage(state.cart)
        },
        remove(state, id) {
            state.cart = state.cart.filter((cart) => cart.id != id)

            updateLocalStorage(state.cart)
        },
        increment(state, id) {
            const item = state.cart.find((p) => p.id == id)
            if (item) {
                item.quantity++
            }
            updateLocalStorage(state.cart)
        },
        decrement(state, id) {
            const item = state.cart.find((p) => p.id == id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                }
            }
            updateLocalStorage(state.cart)
        }
    },
    actions: {
        add({ commit }, product) {
            commit('add', product)
            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        clear({ commit }) {
            commit('clear',)
            Swal.fire({
                title: 'product Added',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        remove({ commit }, id) {
            commit('remove', id)
            Swal.fire({
                title: 'product deleted',
                icon: 'warning',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })

        },
        increment({ commit }, id) {
            commit('increment', id)
            Swal.fire({
                title: 'product updated',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        },
        decrement({ commit }, id) {
            commit('decrement', id)
            Swal.fire({
                title: 'product notUpdated',
                icon: 'success',
                showConfirmButton: 'false',
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top'
            })
        }
    },

}
export default cart