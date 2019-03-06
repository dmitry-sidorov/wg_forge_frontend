import $createTable from "../orders/createTable";
import $renderTableBody from "../orders/renderTableBody";

// import createTable from "../orders/createTable";

export default function (controller) { 
  const sayHi = () => {
    console.log('Hi! View is here!', this);
  }
  const createTable = $createTable;
  const renderTableBody = $renderTableBody
  return { sayHi, createTable, renderTableBody };
}
