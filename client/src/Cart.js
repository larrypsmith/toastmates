import { cartItemsVar, cartMerchantVar } from './cache';

class Cart {
  static empty() {
    cartItemsVar([])
    cartMerchantVar('');
  }

  static getItems() {
    return cartItemsVar();
  }
  
  static setItems(items) {
    cartItemsVar(items);
  }

  static getMerchant() {
    return cartMerchantVar();
  }

  static setMerchant(id) {
    cartMerchantVar(id);
  }

  static add(itemId, merchantId, quantity = 1) {
    if (this.isEmpty()) this.setMerchant(merchantId);
    
    const items = this.getItems();

    const newItems = [];
    for (let i = 1; i <= quantity; i++) {
      newItems.push(itemId);
    }

    const newCart = [...items, ...newItems];
    this.setItems(newCart);
  }

  static remove(itemId) {
    const items = this.getItems();
    const newCart = items.filter(id => itemId !== id);
    this.setItems(newCart);

    if (this.isEmpty()) {
      this.setMerchant('');
    }
  }

  static getItemQuantity(itemId) {
    const items = this.getItems();

    return items.reduce((sum, item) => {
      if (item === itemId) return sum++;
      return sum;
    }, 0)
  }

  static isSameMerchant(id) {
    return this.getMerchant() === id;
  }

  static isEmpty() {
    return this.getItems().length === 0;
  }

  static writeToStorage() {
    localStorage.setItem('CART_ITEMS', JSON.stringify(cartItemsVar()));
    localStorage.setItem('CART_MERCHANT', cartMerchantVar());
    console.log(localStorage);
  }

  static writeFromStorage() {
    cartItemsVar(JSON.parse(localStorage.getItem('CART_ITEMS')) || []);
    cartMerchantVar(localStorage.getItem('CART_MERCHANT') || '');
    localStorage.clear();
  }
};

export default Cart;