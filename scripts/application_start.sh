#!/bin/bash
sudo systemctl restart nginx

cd /var/www/html/new
nodemon app.js