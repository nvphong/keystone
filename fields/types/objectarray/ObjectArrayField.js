import ObjectArrayFieldMixin from '../../mixins/ObjectArrayField';
import Field from '../Field';

module.exports = Field.create({

	displayName: 'ObjectArrayField',

	mixins: [ObjectArrayFieldMixin],

	cleanInput (input) {
		return input.replace(/[^\d]/g, '');
	}

});
