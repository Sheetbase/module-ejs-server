# Sheetbase Module: ejs-server

Using ejs in Google Apps Script. See: https://github.com/mde/ejs

## Install

- NPM: ``$ npm install --save @sheetbase/ejs-server``

- As library: ``1_mTEblCaR8CC6epwaMoz8rk-wep3k8TDfWFLBtefvOwke2tH7pZlr4YT`` (set Indentifier to **Ejs**, [view code](https://script.google.com/d/1_mTEblCaR8CC6epwaMoz8rk-wep3k8TDfWFLBtefvOwke2tH7pZlr4YT/edit?usp=sharing))

## Usage

```ts

	const html = Ejs.render('<h1>Hello <%= name %>!</h1>', { name: 'world' });
	Logger.log(html);

```

## License

[Apache-2.0][license-url]

[license-url]: https://github.com/sheetbase/module-ejs-server/blob/master/LICENSE