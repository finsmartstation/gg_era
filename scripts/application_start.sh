#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new

killall -9 node

cd /var/www/html/new/
source /etc/profile
sudo pm2 start app.js
