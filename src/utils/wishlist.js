import axios from "axios";

const wishListMethods = {
  getWishList: function () {
    return JSON.parse(localStorage.getItem('wishList')) || []
  },

  addToWishlist: async function (product) {
    const wishlist = this.getWishList()
    const productExists = wishlist.find((item) => item.id === product.id)
    if (!productExists) {
      wishlist.push(product)
      await axios.post(
        'http://localhost:8000/api/wishlist/',
        {
          product_id: product.id
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }
      )
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  },
  removeFromWishList: function (product) {
    const wishList = this.getWishList()
    const updatedCart = wishList.filter((item) => item.id !== product.id)
    localStorage.setItem('wishList', JSON.stringify(updatedCart))
  },

  removeFromWishListById: function (id) {
    const wishList = this.getWishList()
    const index = wishList.findIndex(item => item.id === id);
    if (index !== -1) {
      wishList.splice(index, 1);
      localStorage.setItem('wishList', JSON.stringify(wishList));
    }
  },

  clearWishList: function () {
    localStorage.removeItem('wishList')
  },

  getWishTotal: function () {
    const wishList = this.getWishList()
    return wishList.reduce((acc, item) => acc + item.price, 0)
  }
}

export default wishListMethods
