FROM php:8.1-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html/
COPY . .
#RUN composer install

#RUN composer dump-autoload
RUN COMPOSER_ALLOW_SUPERUSER=1 COMPOSER_VENDOR_DIR="/var/www/" composer install