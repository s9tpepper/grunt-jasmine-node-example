(function () {
  var ExampleModule = function ExampleModule() {
    return {
      toString: function toString() {
        return "[object ExampleModule]";
      }
    };
  };

  define([], function () {
    return ExampleModule;
  })
}());