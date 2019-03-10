import sortString from "../sorting/sortString";
import sortFloat from "../sorting/sortFloat";
import sortInteger from "../sorting/sortInteger";
import sortIP from "../sorting/sortIP";
import users from "../../data/users.json";
import orders from "../../data/orders.json";
import companies from "../../data/companies.json";
import tableHeadings from "../table/tableHeadings.js"
import deepCopy from "../utils/deepCopy.js";
import calculateMedian from "../utils/calculateMedian";
import convertTimestamp from "../utils/convertTimestamp";

export default function () {
  const extendedOrders = deepCopy(orders);
  const observers = [];
  const initialize = () => observers.forEach(observer => {
    observer.createTable(getExtendedOrders(), '#app', tableHeadings);
  });
  const updateTable = (orders) => observers.forEach(observer => {
    observer.renderTableBody(orders);
  });

  const addSearch = (queue) => {
    const searchOrders = deepCopy(extendedOrders);
    const searchedIndecies = [];
    let searched = [];
    let reg = new RegExp(queue, 'g');
    searchOrders.forEach(order => {
      if (order['user_data'].toLowerCase().search(reg) !== -1) {
        searched.push(order);
        searchedIndecies.push(order.id);
      }
      if (order['transaction_id'].toLowerCase().search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      } 
      if (convertTimestamp(order['created_at']).search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      } 
      if (order['total'].toString().search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      }
      if (order['card_type'].search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      } 
      if (order['order_ip'].search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      } 
      if (order['order_country'].toLowerCase().search(reg) !== -1 && !searchedIndecies.includes(order.id)) {
        searched.push(order);
        searchedIndecies.push(order.id);
      } 
    });
    return searched;
  }

  const getStats = (orders) => {
    const stats = {};
    stats.count = orders.length;
    stats.total = orders.reduce((acc, order) => {
      return acc + parseFloat(order.total);
    }, 0.0).toFixed(2);
    let average = (stats.total / stats.count).toFixed(2);
    stats.average = (!isNaN(average)) ? average : 'n/a';
    let prices = orders.map(order => order.total);
    let median = calculateMedian(prices);
    stats.median = (!isNaN(median)) ? median : 'n/a';
    let ordersWithGender = deepCopy(orders);
    ordersWithGender.forEach(order => {
      users.forEach(user => {
        if (user.id === order.user_id) {
          order.gender = user.gender;
        }
      });
    });
    let femaleOrders = ordersWithGender.filter(order => {
      return order.gender.toLowerCase() === 'female';
    });
    let femalePrices = femaleOrders.map(order => order.total).reduce((acc, price) => {
      return acc + parseFloat(price);
    }, 0.0);
    let femaleAmount = femaleOrders.length;
    let averageFemale = (femalePrices / femaleAmount).toFixed(2);
    stats.averageFemale = (!isNaN(averageFemale)) ? averageFemale : 'n/a';
    let maleOrders = ordersWithGender.filter(order => {
      return order.gender.toLowerCase() === 'male';
    });
    let malePrices = maleOrders.map(order => order.total).reduce((acc, price) => {
      return acc + parseFloat(price);
    }, 0.0);
    let maleAmount = maleOrders.length;
    let averageMale = (malePrices / maleAmount).toFixed(2);
    stats.averageMale = (!isNaN(averageMale)) ? averageMale : 'n/a';
    return stats;
  }

  const renderSorting = (heading) => {
    if (heading === null) {
      updateTable(extendedOrders);
    } else {
      updateTable(getSortedOrders(heading));
    }
  }

  const subscribe = (observer) => observers.push(observer);

  const getSortingFunction = (prop) => {
    const floatProps = ['order_amount'];
    const stringProps = ['transaction_id', 'card_type'];
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
      sortedOrders.sort(sortString('order_country')).sort(sortIP('order_ip'));
    }
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
    getExtendedOrders,
    getTableHeadings,
    getUserDetails,
    subscribe,
    initialize,
    renderSorting,
    getStats,
    addSearch
  }
}
