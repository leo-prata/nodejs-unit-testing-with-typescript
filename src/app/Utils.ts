export class StringUtils {
	public toUpperCase(arg: string) {
		if (!arg) {
			throw new Error('Invalid input');
		}
		return toUpperCase(arg);
	}
}

export function toUpperCase(arg: string) {
	return arg.toUpperCase();
}

export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	lenght: number;
	extraInfo: Object | undefined;
};

export function getStringInfo(arg: string): stringInfo {
	return {
		lowerCase: arg.toLowerCase(),
		upperCase: arg.toUpperCase(),
		characters: Array.from(arg),
		lenght: arg.length,
		extraInfo: {},
	};
}
