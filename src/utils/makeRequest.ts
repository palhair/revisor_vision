enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

type Options = {
	method?: METHODS;
	headers?: { [key: string]: string };
	timeout?: number;
	body?: any;
};

export async function makeRequest<T>(url: string | URL, options?: Options) {
	let headers: HeadersInit = {};

	if (options?.method === 'POST' || options?.body) headers = { 'Content-Type': 'application/json' };

	return fetch(url, {
		method: options?.body ? 'POST' : 'GET',
		credentials: 'include',
		mode: 'cors',
		...options,
		body: options?.body && JSON.stringify(options?.body),
		headers: { ...headers, ...(options?.headers || {}) },
	});
}
