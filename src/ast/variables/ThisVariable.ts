import ReplaceableInitializationVariable from './ReplaceableInitializationVariable';

export default class ThisVariable extends ReplaceableInitializationVariable {
	constructor() {
		super('this', null);
	}
}
