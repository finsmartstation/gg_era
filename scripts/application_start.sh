#!/bin/bash
sudo systemctl restart nginx

sudo pm2 kill
sudo pm2 start /var/www/html/new/app.js
