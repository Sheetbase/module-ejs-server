import { EjsModule } from '../index';

const Ejs = EjsModule();

export function example1(): void {
	const source: string = '<h1>Hello <%= name %>!</h1>';
	const data = {name: 'world'};
	let html: string = Ejs.render(source, data);
	Logger.log(html);
}