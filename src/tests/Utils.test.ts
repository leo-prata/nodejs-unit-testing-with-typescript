import { toUpperCase } from '../app/Utils';

describe('utils test suite', () => {
	it('should return uppercase string', () => {
		const result = toUpperCase('testing');
		expect(result).toBe('TESTING');
	});
});
