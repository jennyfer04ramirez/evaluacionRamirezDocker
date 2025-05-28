FROM httpd:2.4
COPY ./dist/cliente-angular/browser /usr/local/apache2/htdocs/

COPY ./.htaccess /usr/local/apache2/htdocs/

COPY ./httpd.config /usr/local/apache2/conf/httpd.conf