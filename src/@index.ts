/**
 * 
 * Name: @sheetbase/ejs-server
 * Description: Ejs for Google apps script.
 * Version: 2.6.0
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: Apache-2.0
 * Repo: https://github.com/sheetbase/module-ejs-server.git
 *
 */
 
declare const ejsModuleExports: {(): any};
const ejs = ejsModuleExports();
const Ejs = ejs;

for (const key of Object.keys(ejs)) {
	this[key] = ejs[key];
}

export { ejs, Ejs };

export function sheetbase_ejs_example1(): void {
	const source: string = '<h1>Hello <%= name %>!</h1>';
	const data = {name: 'world'};
	let html: string = Ejs.render(source, data);
	Logger.log(html);
}


