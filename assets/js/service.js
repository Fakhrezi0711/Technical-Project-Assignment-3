const putToLocalStorage = (data) => {
  localStorage.setItem('userdata', JSON.stringify(data));
};
const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userdata'));
};
const putActiveUser = (data) => {
  localStorage.setItem('activeUser', JSON.stringify(data));
};
const getActiveUser = () => {
  return JSON.parse(localStorage.getItem('activeUser'));
};
const saveCategory = (data) => {
  localStorage.setItem('categoryBMI', JSON.stringify(data))
}
const getCategory = () => {
  return JSON.parse(localStorage.getItem('categoryBMI'))

}


export {
  putToLocalStorage,
  getFromLocalStorage,
  getActiveUser,
  putActiveUser,
  getCategory,
  saveCategory,
};