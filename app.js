const _ = require("lodash");
const items = [1, [2, 3, 4, 5], [6, [7]]];
const newItems = _.flattenDeep(items);
console.log("====================================");
console.log(newItems);
console.log("====================================");
