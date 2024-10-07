class IpBase {
	constructor(apiKey) {
		this.api = "https://api.ipbase.com/v2"
		this.apiKey = apiKey
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"apiKey": this.apiKey
		}
	}

	async getStatus() {
		const response = await fetch(
			`${this.api}/status`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getIpInfo(ipAddress) {
		const response = await fetch(
			`${this.api}/info?ip=${ipAddress}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {IpBase}
