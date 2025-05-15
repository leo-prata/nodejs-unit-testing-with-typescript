import { getStringInfo, StringUtils, toUpperCase } from '../app/Utils';

describe('utils test suite', () => {
	describe('StringUtils tests', () => {
		let sut: StringUtils;
		beforeEach(() => {
			sut = new StringUtils();
		});

		afterEach(() => {
			//clearing mocks
			console.log('Teardown');
		});
		it('should return correct uppercase', () => {
			const actual = sut.toUpperCase('aaa');
			expect(actual).toBe('AAA');
		});

		it('should return error on invalid input - arrow func', () => {
			expect(() => {
				sut.toUpperCase('');
			}).toThrowError('Invalid input');
		});

		it('should return error on invalid input - try/catch', (done) => {
			try {
				sut.toUpperCase('');
				done('GetStringInfo should throw error for invalid argument');
			} catch (error) {
				expect(error).toBeInstanceOf(Error);
				expect(error).toHaveProperty('message', 'Invalid input');
				done();
			}
		});
	});

	it('should return uppercase string', () => {
		//arrange
		const sut = toUpperCase;
		const expected = 'TESTING';

		//act
		const actual = sut('testing');

		//assert
		expect(actual).toBe(expected);
	});

	describe('ToUpperCase examples', () => {
		it.each([
			{ input: 'abc', expected: 'ABC' },
			{ input: 'test-teste', expected: 'TEST-TESTE' },
			{ input: 'jpeg', expected: 'JPEG' },
		])('$input toUpperCase should be $expected', ({ input, expected }) => {
			const actual = toUpperCase(input);
			expect(actual).toBe(expected);
		});
	});

	describe('getStringInfo for arg My-String should', () => {
		test('return right lenght', () => {
			const actual = getStringInfo('My-String');
			expect(actual.characters).toHaveLength(9);
		});
		test('return lowercase', () => {
			const actual = getStringInfo('My-String');
			expect(actual.lowerCase).toBe('my-string');
		});
		test('return defined extra info', () => {
			const actual = getStringInfo('My-String');
			expect(actual.extraInfo).toBeDefined();
		});
		test('return right extra info', () => {
			const actual = getStringInfo('My-String');
			expect(actual.extraInfo).toEqual({});
		});
	});
});
