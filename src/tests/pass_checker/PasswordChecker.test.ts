import {
	PasswordChecker,
	PasswordErrors,
} from '../../app/pass_checker/PasswordChecker';

describe('password_checker test suite', () => {
	let sut: PasswordChecker;

	beforeEach(() => {
		sut = new PasswordChecker();
	});

	test('pwd with less than 8 char is invalid', () => {
		const actual = sut.checkPassword('123456');
		expect(actual.valid).toBe(false);
		expect(actual.reasons).toContain(PasswordErrors.SHORT);
	});

	test('pwd with 8 or more char is valid', () => {
		const actual = sut.checkPassword('12345678a');
		expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
	});

	test('pwd with no uppercase char is invalid', () => {
		const actual = sut.checkPassword('1234fsdfdsfsf');
		expect(actual.valid).toBe(false);
		expect(actual.reasons).toContain(PasswordErrors.NO_UPPERCASE);
	});

	test('pwd with uppercase char is valid', () => {
		const actual = sut.checkPassword('1234Fsdfdsfsf');
		expect(actual.valid).toBe(true);
		expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPERCASE);
	});

	test('pwd with no lowercase char is invalid', () => {
		const actual = sut.checkPassword('1234FSDFDSFSF');
		expect(actual.valid).toBe(false);
		expect(actual.reasons).toContain(PasswordErrors.NO_LOWERCASE);
	});

	test('pwd with lowercase char is valid', () => {
		const actual = sut.checkPassword('1234Fsdfdsfsf');
		expect(actual.valid).toBe(true);
		expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWERCASE);
	});

	test('pwd with no errors is valid', () => {
		const actual = sut.checkPassword('1234Fsdfdsfsf');
		expect(actual.valid).toBe(true);
		expect(actual.reasons).toHaveLength(0);
	});

	test('admin pwd with no number is invalid', () => {
		const actual = sut.checkAdminPassword('Fsdfdsfsf');
		expect(actual.valid).toBe(false);
		expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
	});

	test('admin pwd with number is valid', () => {
		const actual = sut.checkAdminPassword('1234Fsdfdsfsf');
		expect(actual.valid).toBe(true);
		expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER);
	});
});
