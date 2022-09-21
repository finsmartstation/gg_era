#!/bin/bash
isExistApp=`pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop        
fi

pm2 kill
sudo systemctl stop nginx