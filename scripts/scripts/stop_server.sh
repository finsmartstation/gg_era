#!/bin/bash
isExistApp=`pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop        
fi

sudo service apache2 stop