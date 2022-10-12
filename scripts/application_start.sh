#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new
npm i

cd /var/www/html/new/

killall -9 node
nodemon app.js
