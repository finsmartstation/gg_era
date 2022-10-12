#!/bin/bash
sudo systemctl restart nginx

sudo chmod -R 777 /var/www/html/new

killall -9 node

cd /var/www/html/new/

sudo pm2 delete 0
source /home/ec2-user/.bash_profile
pm2 start app.js
