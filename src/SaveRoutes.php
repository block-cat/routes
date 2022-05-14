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

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Http\RouteCollection;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class SaveRoutes implements MiddlewareInterface {
    protected $settings;
    protected $routes;

    public function __construct(RouteCollection $routes, SettingsRepositoryInterface $settings)
    {
        $this->routes = $routes;
        $this->settings = $settings;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        var_dump($request->getUri()->getPath());
        // $request->getUri()->url('/d/98-ftfgdfgsdf');
        // var_dump($this->routes->getRoutes());
        var_dump($request->getAttribute('originalUri', $request->getUri()));
        $response = $handler->handle($request);
        // if (Arr::get($event->data, 'attributes.importGuestContent')) {
        //     if ($this->settings->get('guest-posting.enableImport')) {
        //         $event->user->afterSave(function (User $user) {
        //             GuestManager::setContentOwner($user);
        //         });
        //     }
        // }
        return $response;
    }
}