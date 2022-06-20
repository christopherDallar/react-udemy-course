import { useCallback, useEffect, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = useCallback(() => {
		const formCheckedValues = {};

		for (const formField of Object.keys(formValidations)) {
			const [fn, errorMessage] = formValidations[formField];

			formCheckedValues[`${formField}Valid`] = fn(
				formState[formField],
				formState
			)
				? null
				: errorMessage;
		}

		setFormValidation(formCheckedValues);
	}, [formState, formValidations]);

	useEffect(() => {
		createValidators();
	}, [formState, createValidators]);

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		...formValidation,
	};
};
