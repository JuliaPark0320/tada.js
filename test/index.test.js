import {expect} from "chai";
import sinon from "sinon";
import Tada from '../src/index';

describe('initial test', () => {
  let sandbox;
  let spyConfig;
  let spyController;
  let stubConfig  = {a: 'blabla'};

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    spyConfig = sandbox.stub(Tada.prototype, '_createConfig').returns(stubConfig);
    spyController = sandbox.stub(Tada.prototype, '_loadController');
  });

  afterEach(() => {
    sandbox.restore();
    spyConfig = null;
    spyController = null;
  });

  describe('when create instance of Tada >> ', () => {
    it('invoke `_createConfig` function', () => {
      //given
      const option = { selector: '.tada-class' };
      //when
      const tada = new Tada(option);
      //then
      expect(spyConfig.calledWith(option)).to.be.true;
    });

    //!!!this test case is not working
    it('invoke `_loadController` function', () => {
      //given
      const option = { selector: '.tada-class' };
      //when
      const tada = new Tada(option);
      //then
      expect(spyController.calledWith(stubConfig)).to.be.true;
    });
  });

  // describe('on >> ', function () {
  //   it('', function () {
  //     //given
  //     const option = { selector: '.tada-class' };
  //     const tada = new Tada(option);
  //     //when
  //     tada.on('next', fun)
  //
  //     //then
  //   });
  // });
});
