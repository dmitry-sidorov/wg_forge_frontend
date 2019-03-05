import sortString from "../sorting/sortString.js";
import sortFloat from "../sorting/sortFloat.js";
import sortInteger from "../sorting/sortInteger.js";


export default function (model) {
  // console.log('model: ', model);
  return {
    model: model,
    currnetCallback: null,
    sortFunctions: [
      {class: 'transaction-id', callback: sortString},
      // {class: 'user-info', callback: },
      {class: 'order-date', callback: sortInteger},
      {class: 'order-amount', callback: sortFloat},
      {class: 'card-type', callback: sortString}
      // {class: 'location', callback: }
    ],
    setSortingFor: function (heading) {
      this.sortFunctions.forEach(item => {
        if (item.class === heading) {
          this.currentCallback = item.callback;
        }
      });
            // console.log('heading in controller: ', heading);
      this.model.setSorting(heading, this.currentCallback);
    },
    resetAll: function () {
      this.model.resetSorting();
    }
  };
}
