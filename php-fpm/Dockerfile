FROM php:8.2-fpm-alpine

# Устанавливаем системные зависимости
RUN apk add --no-cache \
    curl \
    git \
    zip unzip \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    postgresql-dev \
    icu-dev \
    oniguruma-dev

# Устанавливаем PHP расширения
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    mysqli \
    gd \
    intl \
    mbstring \
    zip \
    opcache

# Устанавливаем Composer
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/my-application.local

# Устанавливаем зависимости при запуске контейнера
CMD ["sh", "-c", "composer install --no-dev --optimize-autoloader --no-interaction && php-fpm"]