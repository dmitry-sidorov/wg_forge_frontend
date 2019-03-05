import sortBy from "../sorting/sortBy";

export default function (orders) {
  Array.prototype.sortBy = sortBy;
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
      prop = prop.replace(/-/, '_');
      this.sortedOrders = this.orders.slice().sortBy(prop, sortFunction);
      this.isSorted = prop;
      console.log(this);
    },
    resetSorting: function () {
      this.sortedOrders = [];
      this.isSorted = null;
    }
  };
} 