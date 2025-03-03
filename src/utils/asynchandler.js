const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };
  
export {asyncHandler}












//const asyncHandler = () => {};//asyn as basic  function 
//const asyncHandler = (fn) =>() => {};higher order function whenever we use a function inside a function
//const asyncHandler = (fn) => asyn() => {};

//wrapper function  which used every where in the code
//const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//    await fn(req, res, next);
//    } catch (error) {
//    res.status(500).json({ message: error.message });
//   }
//   };
  