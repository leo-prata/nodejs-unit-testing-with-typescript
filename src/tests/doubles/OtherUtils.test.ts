import {
	calculateComplexity,
	OtherStringUtils,
	toUpperCaseWithCb,
} from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
	describe('other string utils test with spies', () => {
		let sut: OtherStringUtils;

		beforeEach(() => {
			sut = new OtherStringUtils();
		});

		test('use spyOn to track calls', () => {
			const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
			sut.toUpperCase('abc');
			expect(toUpperCaseSpy).toHaveBeenCalledWith('abc');
		});

		test('use spyOn to track calls to other module', () => {
			const consoleLogSpy = jest.spyOn(console, 'log');
			sut.logString('abc');
			expect(consoleLogSpy).toHaveBeenCalledWith('abc');
		});

		test.only('use spy to replace the implementation of a method', () => {
			jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
				console.log('mocked callExternalService');
			});
			sut.callExternalService();
		});
	});

	describe('tracking callbacks with jest mocks', () => {
		const callbackMock = jest.fn();

		afterEach(() => {
			jest.clearAllMocks();
		});

		test('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCb('', callbackMock);
			expect(actual).toBeUndefined();
			expect(callbackMock).toHaveBeenCalledWith('Invalid argument');
			expect(callbackMock).toHaveBeenCalledTimes(1);
		});

		test('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCb('abc', callbackMock);
			expect(actual).toBe('ABC');
			expect(callbackMock).toHaveBeenCalledWith('called with abc');
			expect(callbackMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('tracking callbacks', () => {
		let cbArgs = [];
		let timesCalled = 0;

		function callbackMock(arg: string) {
			cbArgs.push(arg);
			timesCalled++;
		}

		afterEach(() => {
			cbArgs = [];
			timesCalled = 0;
		});

		test('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCb('', callbackMock);
			expect(actual).toBeUndefined();
			expect(cbArgs).toContain('Invalid argument');
			expect(timesCalled).toBe(1);
		});

		test('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCb('abc', callbackMock);
			expect(actual).toBe('ABC');
			expect(cbArgs).toContain('called with abc');
			expect(timesCalled).toBe(1);
		});
	});

	test('calculates complexity', () => {
		const someInfo = {
			lenght: 5,
			extraInfo: {
				field1: 'value1',
				field2: 'value2',
			},
		};
		const actual = calculateComplexity(someInfo as any);
		expect(actual).toBe(10);
	});

	test('touppercase - calls callback for invalid argument', () => {
		const actual = toUpperCaseWithCb('', () => {});
		expect(actual).toBeUndefined();
	});

	test('touppercase - calls callback for valid argument', () => {
		const actual = toUpperCaseWithCb('abc', () => {});
		expect(actual).toBe('ABC');
	});
});
