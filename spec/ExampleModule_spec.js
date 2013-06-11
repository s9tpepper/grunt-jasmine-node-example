require(["../source/ExampleModule"], function (ExampleModule) {
  describe("ExampleModule()", function () {
    var exampleModule;
    beforeEach(function () {
      exampleModule = ExampleModule();
    })

    it("returns an example JS module", function () {
      expect(exampleModule.toString()).toEqual("[object ExampleModule]");
    });
  });
});