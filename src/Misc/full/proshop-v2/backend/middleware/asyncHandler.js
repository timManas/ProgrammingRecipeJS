// Original
// const asyncHandler2 = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// Q1- Where did req, res,next come from ?
// Req comes from the request, response is the response we need to send back

// Q2 - What is fn ?
// From our example,
// Basically it is (async (req, res, next) => {return res.json(200)});

// Q3. So what is fn(req, res,next) ?
// Basically stating that we we should execute the function
// Remember: fn by itself will NOT execute the function but fn() or fn(req,res) will

function asyncHandler(fn) {
  // console.log('fn: ' + fn);
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default asyncHandler;

/**
// Example
const getProductById = asyncHandler(async (req, res, next) => {
  return res.json(200);
});
*/
