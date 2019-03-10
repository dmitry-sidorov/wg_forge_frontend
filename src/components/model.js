import sortString from "../sorting/sortString";
import sortFloat from "../sorting/sortFloat";
import sortInteger from "../sorting/sortInteger";
import sortIP from "../sorting/sortIP";
import users from "../../data/users.json";
import orders from "../../data/orders.json";
import companies from "../../data/companies.json";
import tableHeadings from "../orders/tableHeadings.js"
import deepCopy from "../utils/deepCopy.js";

export default function () {
  const extendedOrders = deepCopy(orders);
  const observers = [];
  const print = () => console.log('orders: ', orders, 'extended orders: ', extendedOrders);
  const initialize = () => observers.forEach(observer => {
    observer.createTable(getExtendedOrders(), '#app', tableHeadings);
  });
  const updateTable = (orders) => observers.forEach(observer => {
    observer.renderTableBody(orders);
  });

  const renderSorting = (heading) => {
    if (heading === null) {
      updateTable(extendedOrders);
    } else {
      updateTable(getSortedOrders(heading));
    }

  }
  const subscribe = (observer) => observers.push(observer);
  const sayHi = () => console.log('Hi! Model is here! ', this);

  const getSortingFunction = (prop) => {
    // const headings = [
    //   { content: 'Transaction ID', class: 'transaction-id' },
    //   { content: 'User Info', class: 'user-info' },
    //   { content: 'Order Date', class: 'order-date' },
    //   { content: 'Order Amount', class: 'order-amount' },
    //   { content: 'Card Number', class: 'card-number' },
    //   { content: 'Card Type', class: 'card-type' },
    //   { content: 'Location', class: 'location' }
    // ];
    const floatProps = ['order_amount'];
    const stringProps = ['transaction_id', 'card_type'];
    console.log('prop: ', prop);
    if (stringProps.includes(prop)) return sortString(prop);
    if (prop === 'user_info') return sortString('user_data');
    if (floatProps.includes(prop)) return sortFloat('total');
    if (prop === 'order_date') return sortInteger('created_at');
  }

  const getSortedOrders = (heading) => {
    const sortedOrders = deepCopy(extendedOrders);
    const property = heading.replace(/-/, '_');
    sortedOrders.sort(getSortingFunction(property));
    if (property === 'location') {
      sortedOrders.sort(sortIP('order_ip'));
    }
    console.log('sorted orders: ', sortedOrders);
    return sortedOrders;
  }

  const getExtendedOrders = () => {
    return extendedOrders.map(order => {
      let user = users.filter(user => user.id == order.user_id)[0];
      let gender = (user.gender === 'Male') ? 'Mr.' : 'Ms.';
      order.user_data = `${gender} ${user.first_name} ${user.last_name}`;
      return order;
    });
  }
  
  const getTableHeadings = () => tableHeadings;
  const getUserDetails = (userId) => {
    let userDetails = {};
    users.forEach(user => {
      if (userId === user.id) {
        userDetails = {
          user_id: user.id,
          birthday:user.birthday,
          avatar:user.avatar
        };
        companies.forEach(company => {
          if (user.company_id === company.id) {
            userDetails.company = {
              title: company.title,
              url: company.url,
              industry: company.industry,
              sector: company.sector
            };
          }
        });
      }
    });
    return userDetails;
  };

  return { 
    sayHi,
    getExtendedOrders,
    getTableHeadings,
    getUserDetails,
    subscribe,
    initialize,
    print,
    renderSorting
  }
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