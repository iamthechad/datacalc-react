const helpers =  {
  formatPrice(cents) {
    return '$' + ( (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') );
  },
  calculateTotal(items, catalogItems) {
    const catIds = Object.keys(items);
    return catIds.reduce((prevTotal, key) => {
      const itemIds = items[key];
      const categoryTotal = itemIds.reduce((itemPrevTotal, itemKey) => {
        const itemValue = catalogItems[itemKey] ? catalogItems[itemKey].value : 0;
        return itemPrevTotal + itemValue;
      }, 0);
      return prevTotal + categoryTotal;
    }, 0);
  }
};

export default helpers;
