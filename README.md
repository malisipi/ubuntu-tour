# Ubuntu Tour

Web based Ubuntu 21.10 desktop remake. You can try latest ubuntu edition remake from [here](https://malisipi.github.io/ubuntu-tour/)

## Features

* Multi-window (You can open same application 2 (or more) times)
* Resizable, draggable windows
* Changeable wallpapers
* Similar interface with Gnome (Ubuntu Tour imitate Gnome Interface however never use Gnome code.)
* Clone applications

## Why i do?

For introduce the Ubuntu environment' beauty (on web) and for fun. :) I was inspired from [tour.ubuntu.com
](https://github.com/canonical-web-and-design/tour.ubuntu.com) (however not used code from this project)

## You can [try it!](https://malisipi.github.io/ubuntu-tour/)

## To-Do List

* Increase clone apps' functionality
* [13] Create more clone application
* [+] Update interface to similar Ubuntu 21.10 interface
* [-] Update interface to similar Ubuntu 22.04 interface

## App Demo Mode

 You can present your demo app with that project.

> `https://malisipi.github.io/ubuntu-tour/?[`name`,`location`,`icon`]`

* name: Your app's name
* icon: Your app's icon
* location: Your app's website

> You can't send notification or create a new window. Because your app demo that hosted on another domain will be blocked by CORS policy. If you need to create a more powerful app demo, You can host the project with together your app demo.

> https://malisipi.github.io/ubuntu-tour/?[%22Ubuntu-Tour%22,%22https://malisipi.github.io/ubuntu-tour/%22,%22https://malisipi.github.io/ubuntu-tour/icons/Suru/Suru/scalable/places/start-here-symbolic.svg%22]

## Notes

> Ubuntu Tour is compatible with touch devices. (Window resize on mobile is harder than on computer. And some browsers may not support resize on mobile.)

> This website can't run correctly without server. Because [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) block communication with iframes on `file://`.

> Ubuntu Tour' Web Browser can't render all pages because of [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

## License

This project licensed by MPL2. Learn more from [here](./LICENSE.md)
