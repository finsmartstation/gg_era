#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new
npm i

killall -9 node

pm2 kill
pm2 start /var/www/html/new/app.js
