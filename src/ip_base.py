from requests import get


class IPBase:
	def __init__(self, api_key: str):
		self.api = "https://api.ipbase.com"
		self.api_key = api_key
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36",
			"apikey": self.api_key
		}

	def get_status(self):
		return get(
			f"{self.api}/v2/status",
			headers=self.headers).json()

	def get_ip_info(self, ip_address: str):
		return get(
			f"{self.api}/v2/info?ip={ip_address}",
			headers=self.headers).json()
		
