#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new
npm i

killall -9 node

pm2 kill
cd /var/www/html/new
pm2 start app.js
