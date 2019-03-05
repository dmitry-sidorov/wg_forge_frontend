export default function (orders) {
  return {
    orders: orders,
    isSorted: null,
    sortedOrders: [],
    setOrders: function (orders) {
      this.orders = orders;
    },
    getOrders: function () {
      return (this.isSorted == null) ? this.orders : this.sortedOrders;
    },
    setSorting: function (prop, sortFunction) {
      // this.sortedOrders = this.orders.slice();
      this.sortedOrders = this.orders.slice().sortBy(prop, sortFunction);
      this.isSorted = 'prop';
    },
    resetSorting: function () {
      this.sortedOrders = [];
      this.isSorted = null;
    }
  };
}