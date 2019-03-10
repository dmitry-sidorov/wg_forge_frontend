export default function (model) {
  let sortingState = null;
  const sayHi = () => console.log('Hi! Controller is here! ');
  const getUserDetails = (userId) => {
    return model.getUserDetails(userId);
  }; 
  const handleSorting = (headingSelector) => {
    if (headingSelector !== sortingState) {
      sortingState = headingSelector;
      model.renderSorting(sortingState);
      return false;
    } else {
      sortingState = null;
      model.renderSorting(sortingState);
      return true;
    }
  }

  return { sayHi, getUserDetails, handleSorting }
}
