# ip_base.js
Web-API for [ipbase.com](https://ipbase.com) website that provides a reliable &amp; scalable IP geolocation API for software developers

## Example
```JavaScript
async function main() {
	const { IpBase } = require("./ip_base.js")
	const ipBase = new IpBase()
	const status = await ipBase.getStatus()
	console.log(status)
}

main()
```
