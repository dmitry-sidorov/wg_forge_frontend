export default function (model) {
  const sayHi = () => console.log('Hi! Controller is here! ');
  const getUserDetails = (userId) => {
    return model.getUserDetails(userId);
  }; 

  return { sayHi, getUserDetails }
}
