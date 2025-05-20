import { HTTP_CODES } from '../../../app/server_app/model/ServerModel';

export class ResponseTestWrapper {
	public statusCode: HTTP_CODES;
	public body: object;
	public headers = new Array<object>();

	public writeHead(statusCode: HTTP_CODES, header: object) {
		this.statusCode = statusCode;
		this.headers.push(header);
	}

	public write(stringfiedBody: string) {
		this.body = JSON.parse(stringfiedBody);
	}

	public end() {
		// No operation
	}

	public clearFields() {
		this.statusCode = undefined;
		this.body = undefined;
		this.headers.length = 0;
	}
}
