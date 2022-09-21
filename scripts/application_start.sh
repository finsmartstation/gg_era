#!/bin/bash
sudo systemctl restart nginx

cd /var/www/html/new
pm2 kill
pm2 start app.js