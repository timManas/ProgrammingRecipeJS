// Original
// const asyncHandler2 = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// Question - Where did req, res,next come from ?
function asyncHandler(fn) {
  console.log('fn: ' + fn);
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}

const getProductById = asyncHandler(async (req, res, next) => {
  return res.json(200);
});
