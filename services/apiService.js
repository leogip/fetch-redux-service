export default class ApiService {
    _apiBase = ''

    fetchResource = async (url, method = 'GET', data) => {
        try {
            const response = await fetch(`${this._apiBase}${url}`, {
                method,
                body: JSON.stringify(data) || null,
            })
            const json = await response.json()

            if (!response.ok) {
                return json || response.statusText
            }
            return json
        } catch {
            return {
                error: { message: `Could not fetch ${this._apiBase}${url}` },
                statusCode: 500,
            }
        }
    }
}
