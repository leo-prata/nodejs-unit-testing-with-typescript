export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	lenght: number;
	extraInfo: Object | undefined;
};

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
	return Object.keys(stringInfo.extraInfo).length * stringInfo.lenght;
}

export function toUpperCaseWithCb(
	arg: string,
	callback: LoggerServiceCallBack
) {
	if (!arg) {
		callback('Invalid argument');
		return;
	}
	callback(`called with ${arg}`);
	return arg.toUpperCase();
}

export class OtherStringUtils {
	public callExternalService() {
		console.log('callExternalService');
	}
	public toUpperCase(arg: string) {
		return arg.toUpperCase();
	}
	public logString(arg: string) {
		console.log(arg);
	}
}
