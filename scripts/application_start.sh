#!/bin/bash
sudo systemctl restart nginx

cd /var/www/html/new
sudo pm2 start app.js