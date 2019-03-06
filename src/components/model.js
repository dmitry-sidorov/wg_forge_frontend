// import sortBy from "../sorting/sortBy";
import users from "../../data/users.json";
import orders from "../../data/orders.json";
import companies from "../../data/companies.json";
import tableHeadings from "../orders/tableHeadings.js"

export default function () {
  const extendedOrders = orders.slice();
  
  const sayHi = () => console.log('Hi! Model is here! ', this);
  const getOrders = () => orders;
  const getExtendedOrders = () => {
    extendedOrders.forEach(order => {
      users.forEach(user => {
        if (user.id == order.user_id) {
          let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
          // console.log('gender: ', gender);
          order.user_data = `${gender} ${user.first_name} ${user.last_name}`;
          // console.log('order:', order);
        }
      });
    });
    return extendedOrders;
  };
  const getTableHeadings = () => tableHeadings;
  return { sayHi, getOrders, getExtendedOrders, getTableHeadings }
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