#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new

killall -9 node
 
# npm start /var/www/html/new/app.js
# source /etc/profile
# sudo pm2 restart /var/www/html/new/app.js
