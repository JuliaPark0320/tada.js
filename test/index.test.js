import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Tada from '../src/index';
import Controller from '../src/scripts/Controller';
import Config from '../src/scripts/Config';

import { DEFAULT_OPTION } from "../src/scripts/Consts";

chai.use(sinonChai);
const expect = chai.expect;


describe('initial test', function() {
  let sandbox;
  let spyConfig;
  let spyController;
  let fakeConfig = {fake: 'config'}
  let fixture;

  const createFixture = function (){
      fixture = document.createElement("div");
      fixture.id = "tada-class";
      fixture.innerHTML = "<div></div>";
      document.body.append(fixture);
  };

  const removeFixture = function () {
      document.body.removeChild(fixture);
  };

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    createFixture();
  });

  afterEach(() => {
    sandbox.restore();
    spyConfig = null;
    spyController = null;
    removeFixture();

  });

  describe('when create instance of Tada >> ', function () {
    it('invoke `_createConfig` function', function () {
      //given
      const option = { selector: '#tada-class' };
      const spyConfig = sandbox.spy(Tada.prototype, '_createConfig');

      //when
      const tada = new Tada(option);

      //then
      expect(spyConfig.calledWith(option)).to.be.true;
    });

    it('invoke `_loadController` function `', function () {
      //given
      const option = { selector: '#tada-class' };

      //when
      const tada = new Tada(option);

      //then
      expect(tada.controller).to.exist;
    });
  });

  xdescribe('when register event of Tada >> ', function () {
    it('invoke `on` function of controller', function () {
      const option = { selector: '.tada-class' };
      const tada = new Tada(option);
      const nextSpy = sinon.spy();
      tada.controller = { on: () => {}}
      const eventSpy = sandbox.spy(tada.controller, 'on');
      //when
      tada.on('next', nextSpy)
      //then
      // expect(eventSpy.calledWith('next', nextSpy))
        expect(nextSpy.calledOnce).to.be.true;
    });
  });
});
