declare const ejsModuleExports: {(): any};

export function Ejs() {
	return ejsModuleExports();
}

export function sheetbase_ejs_example1(): void {
	const source: string = '<h1>Hello <%= name %>!</h1>';
	const data = {name: 'world'};
	let html: string = Ejs().render(source, data);
	Logger.log(html);
}