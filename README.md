# Sheetbase Module: ejs-server

Using ejs in Google Apps Script. See: https://github.com/mde/ejs

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

## Install

- NPM: ``$ npm install --save @sheetbase/ejs-server``

- As library: ``1_mTEblCaR8CC6epwaMoz8rk-wep3k8TDfWFLBtefvOwke2tH7pZlr4YT`` (set Indentifier to **Ejs** and select latest version, [view code](https://script.google.com/d/1_mTEblCaR8CC6epwaMoz8rk-wep3k8TDfWFLBtefvOwke2tH7pZlr4YT/edit?usp=sharing))

## Usage

```ts

	const html = Ejs.render('<h1>Hello <%= name %>!</h1>', { name: 'world' });
	Logger.log(html);

```

## License

[Apache-2.0][license_url]

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-ejs-server/blob/master/LICENSE

[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp

[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan

[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan

[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase