<?php

/*
 * This file is part of block-cat/routes.
 *
 * Copyright (c) 2021 .
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BlockCat\Routes;

use Flarum\Extend;
use Flarum\Http\Middleware\ResolveRoute;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    // (new Extend\Middleware('forum'))
    //     ->insertBefore(ResolveRoute::class, SaveRoutes::class),
];
