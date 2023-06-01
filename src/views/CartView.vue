<script setup>
import cartMethods from '../utils/cart';
import {ref} from 'vue';
import {onMounted} from 'vue';

const cart = ref([]);

const fetchCart = () => {
    cart.value = cartMethods.getCart();
}

const removeItem = (id) => {
    cartMethods.removeFromCartById(id);
    cart.value = cartMethods.getCart();
}

const clearCart = () => {
    cartMethods.clearCart();
    cart.value = cartMethods.getCart();
}

onMounted(async () => {
    fetchCart();
})
</script>

<template>
    <section class="h-100 h-custom" style="background-color: #eee;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col-lg-7">
                                  <h5 class="mb-3">
                                    <RouterLink to="/products" class="text-body"><i
                                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</RouterLink></h5>
                                    <hr>

                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-1">Shopping cart</p>
                                        </div>
                                        <div>
                                            <div v-if="cart.length > 0">
                                                <button @click="clearCart()" style="border: none;">Clear cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="cart.length === 0">
                                        <h3>Cart is empty</h3>
                                    </div>
                                    <div v-for="item in cart" :key="item.id">
                                        <div class="card mb-3">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div>
                                                            <img :src="item.image" class="img-fluid rounded-3" :alt="item.title" style="width: 65px" />
                                                        </div>
                                                        <div class="ms-3 ">
                                                            <RouterLink :to="'products/' + item.id"><h6 >{{ item.title }}</h6> </RouterLink>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div style="width: 80px;">
                                                            <h6 class="mb-0">{{item.price}}₸</h6>
                                                        </div>
                                                        <button @click="removeItem(item.id)">
                                                            <i class="bi bi-trash-fill ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                     height="16" fill="currentColor"
                                                                     class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                                </svg>
                                                            </i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-5">

                                    <div class="card bg-primary text-white rounded-3">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Card details</h5>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                     class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                                            </div>

                                            <p class="small mb-2">Card type</p>
                                            <a href="#!" type="submit" class="text-white"><i
                                                class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i
                                                class="fab fa-cc-visa fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i
                                                class="fab fa-cc-amex fa-2x me-2"></i></a>
                                            <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                                            <form class="mt-4">
                                                <div class="form-outline form-white mb-4">
                                                    <input type="text" id="typeName" class="form-control form-control-lg" size="17"
                                                           placeholder="Cardholder's Name" />
                                                    <label class="form-label" for="typeName">Cardholder's Name</label>
                                                </div>

                                                <div class="form-outline form-white mb-4">
                                                    <input type="text" id="typeText" class="form-control form-control-lg" size="17"
                                                           placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                                    <label class="form-label" for="typeText">Card Number</label>
                                                </div>

                                                <div class="row mb-4">
                                                    <div class="col-md-6">
                                                        <div class="form-outline form-white">
                                                            <input type="text" id="typeExp" class="form-control form-control-lg"
                                                                   placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                                            <label class="form-label" for="typeExp">Expiration</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-outline form-white">
                                                            <input type="password" id="typeText" class="form-control form-control-lg"
                                                                   placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                                            <label class="form-label" for="typeText">CVV</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>

                                            <hr class="my-4">

                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Subtotal</p>
                                                <p class="mb-2">{{cartMethods.getCartTotal()}} ₸</p>
                                            </div>

                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Shipping</p>
                                                <p class="mb-2">100 ₸</p>
                                            </div>

                                            <div class="d-flex justify-content-between mb-4">
                                                <p class="mb-2">Total(Incl. taxes)</p>
                                                <p class="mb-2">{{cartMethods.getCartTotal() + 100}} ₸</p>
                                            </div>

                                            <button type="button" class="btn btn-info btn-block btn-lg">
                                                <div class="d-flex justify-content-between">
                                                    <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             fill="currentColor" class="bi bi-arrow-right"
                                                             viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                                        </svg>
                                                    </i></span>&nbsp;&nbsp;

                                                    <span>{{cartMethods.getCartTotal() + 100}} ₸</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style>
@media (min-width: 1025px) {
    .h-custom {
        height: 100vh !important;
    }
}</style>