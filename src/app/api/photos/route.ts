export async function GET() {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('API-Key', process.env.DATA_API_KEY || '');

	const res = await fetch('https://data.mongodb-api.com/...', {
		headers: headers,
	});
	const data = await res.json();

	return Response.json({ data });
}
