#!/bin/bash
isExistApp=`pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop        
fi

killall -9 node
sudo systemctl stop nginx