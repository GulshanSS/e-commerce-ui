export default () => {
  return {
    Authorization: localStorage.getItem("access_token"),
  };
};
