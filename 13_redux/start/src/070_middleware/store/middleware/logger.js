 const logger = (store) => {
  return (next) => {
    return (action) => {

      console.log(action, store.getState() )
      next(action);
      console.log(action, store.getState() )
      // storeはaction後の状態
    };
  }
}

export default logger;
