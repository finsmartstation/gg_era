#!/bin/bash
sudo systemctl restart nginx

cd /var/www/html/new
node app.js