import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as api from '../api/fetch';
import * as lowLevelApi from './';

chai.use(sinonChai);

describe('Api', () => {
	const sandbox = sinon.sandbox.create();

	afterEach(() => {
		sandbox.restore();
	});

	describe('fetch', () => {
		it('should call the low level api get method and fetch the correct url', () => {
			sandbox.stub(lowLevelApi, 'get');
			api.fetch();
			expect(lowLevelApi.get.args[0][0]).to.contain('?q=London');
		});
	});
});
