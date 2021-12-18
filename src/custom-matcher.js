const customMatchers = {
  toBeTheSame: function (matchersUtil) {
    return {
      compare: function (actual, expected) {
        const result = {};
        result.pass = matchersUtil.equals(actual, expected);
        if (result.pass) {
          result.message = `Expected ${actual} not to be the same like ${expected}`;
        } else {
          result.message = `Expected ${actual} are the same as ${expected}`;
        }
        return result;
      },
    };
  },
};

/* Usage:

expect({ name: "piotr" }).toBeTheSame({ name: "piotr" });

*/
