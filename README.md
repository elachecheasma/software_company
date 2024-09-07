# Software company website

maherDEV software company website, integrated with Odoo's CMS for easy content updates. The site will offer a modern, fast-loading front-end and a secure back-end to manage business logic, enhancing both online presence and operational efficiency.

## Requirement

if you are using Windows you will need to install WSL & Docker Desktop.
Else if you are using Linux you will need to just install Docker.

## .env

Copy the .env.example file and rename it to .env.

## .odoo.example.conf

Copy the odoo.example.conf file and rename it to odoo.conf
Then add your master `admin_passwd = odoo-master-password` in /odoo/config/odoo.conf/

## Line Endings (CRLF vs LF)

Make sure that you set up your text editor or IDE to automatically convert line endings based on the target environment because Windows uses CRLF (\r\n) for newlines, while Linux uses LF (\n), in this file .\openssl\generate.sh

## Start the docker-compose.yml using Terminal

`docker compose up --build`

## Don't forget To Install NPM In Terminal

`NPM Install` Or `NPM I` 

