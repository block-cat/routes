# BkC Routes

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/block-cat/routes.svg)](https://packagist.org/packages/block-cat/routes)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitatea de personalizare a adreselor URL către articole, etichete, utilizatori.

**Exemplu:**

Adresă URL pentru o anumită discuție în Flarum: `https://discuss.flarum.org/d/28095-flamoji/8`

Adresă URL personalizată pentru o anumită discuție în Flarum: `https://discuss.flarum.org/discussions/28095-flamoji/8`

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require block-cat/routes *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update block-cat/routes
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove block-cat/routes
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/block-cat/routes)
- [Changelog](CHANGELOG.md)