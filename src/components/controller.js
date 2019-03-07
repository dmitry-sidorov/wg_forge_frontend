export default function (model) {
  const observers = [];
  const subscribe = (observer) => observers.push(observer);
  const sayHi = () => console.log('Hi! Controller is here! ');
  const onClickUserDetails = (order) => {
    let userData = document.querySelector(`#order_${order.id} .user-data`);
    userData.addEventListener('click', e => renderUserDetails(e.target));
  }
  const renderUserDetails = (row) => console.log (row); 
  model.getExtendedOrders().forEach(order => onClickUserDetails(order));

  return { sayHi, subscribe }
}
