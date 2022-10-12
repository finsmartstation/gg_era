#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new
npm i

killall -9 node

cd /var/www/html/new/

pm2 kill
pm2 start app.js
