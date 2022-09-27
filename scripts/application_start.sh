#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new
npm i

sudo pm2 kill
sudo pm2 start /var/www/html/new/app.js
