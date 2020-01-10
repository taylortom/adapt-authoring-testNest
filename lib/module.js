class TestNestModule extends AbstractModule {
  /** @override*/
  constructor(...args) {
    super(...args);
    this.setReady();
  }
}

module.exports = TestNestModule;
