const wishListMethods = {
  getWishList: function () {
    return JSON.parse(localStorage.getItem('wishList')) || []
  },

  removeFromWishList: function (product) {
    const wishList = this.getWishList()
    const updatedCart = wishList.filter((item) => item.id !== product.id)
    localStorage.setItem('wishList', JSON.stringify(updatedCart))
  },
  removeFromWishListById: function (id) {
    const wishList = this.getWishList()
    const updatedWishList = wishList.filter((item) => item.id !== id)
    localStorage.setItem('wishList', JSON.stringify(updatedWishList))
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
