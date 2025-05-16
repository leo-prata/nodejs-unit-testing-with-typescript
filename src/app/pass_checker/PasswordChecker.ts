export enum PasswordErrors {
	SHORT = 'Password is too short',
	NO_UPPERCASE = 'Password must contain at least one uppercase letter',
	NO_LOWERCASE = 'Password must contain at least one lowercase letter',
}

export interface CheckResult {
	valid: boolean;
	reasons: PasswordErrors[];
}

export class PasswordChecker {
	public checkPassword(password: string): CheckResult {
		const reasons: PasswordErrors[] = [];
		if (password.length < 8) {
			reasons.push(PasswordErrors.SHORT);
		}
		if (password == password.toLowerCase()) {
			reasons.push(PasswordErrors.NO_UPPERCASE);
		}
		if (password == password.toUpperCase()) {
			reasons.push(PasswordErrors.NO_LOWERCASE);
		}
		return {
			valid: reasons.length > 0 ? false : true,
			reasons: reasons,
		};
	}
}
