// import sortBy from "../sorting/sortBy";
import users from "../../data/users.json";
import orders from "../../data/orders.json";
import companies from "../../data/companies.json";
import tableHeadings from "../orders/tableHeadings.js"
import cloneObject from "../utils/cloneObject.js";

export default function () {
  const extendedOrders = orders.clone();
  const observers = [];
  const print = () => console.log('orders: ', orders, 'extended orders: ', extendedOrders);
  const initialize = () => observers.forEach(observer => {
    observer.createTable(getExtendedOrders(), '#app', tableHeadings);
  });
  const subscribe = (observer) => observers.push(observer);
  const sayHi = () => console.log('Hi! Model is here! ', this);
  
  const getExtendedOrders = () => {
    return extendedOrders.map(order => {
      let user = users.filter(user => user.id == order.user_id)[0];
      let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
      order.user_data = `${gender} ${user.first_name} ${user.last_name}`;
      return order;
    });
  }
  
  const getTableHeadings = () => tableHeadings;
  return { sayHi, getTableHeadings, subscribe, initialize, print }
}




/*
model.prototype.getOrders = function () {
  return (this.isSorted == null) ? this.orders : this.sortedOrders;
};
model.prototype.setSorting = function (prop, sortFunction) {
  prop = prop.replace(/-/, '_');
  this.sortedOrders = this.orders.slice().sortBy(prop, sortFunction);
  this.isSorted = prop;
  console.log(this);
};
model.prototype.resetSorting = function () {
  this.sortedOrders = [];
  this.isSorted = null;
};

export { model }
*/

/*
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

*/