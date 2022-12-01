FROM php:7.4-apache
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-install bcmath
#RUN docker-php-ext-install mbstring
# GD for image processing 
RUN apt-get update && apt-get install -y \
libfreetype6-dev \
libjpeg62-turbo-dev \
libmcrypt-dev \
libpng-dev \
libxml2-dev \
libzip-dev \
libicu-dev \
&& docker-php-ext-install -j$(nproc) iconv \
&& docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
# && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
&& docker-php-ext-install -j$(nproc) gd
RUN docker-php-ext-install -j$(nproc) zip xmlrpc soap intl opcache
RUN pecl install mcrypt-1.0.4
RUN docker-php-ext-enable mcrypt
COPY vhost.conf /etc/apache2/sites-enabled/000-default.conf
RUN /usr/sbin/a2enmod rewrite




