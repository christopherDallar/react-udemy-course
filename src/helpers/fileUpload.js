export const fileUpload = async (file) => {
	if (!file) throw new Error("There isn't any file to upload");

	const cloudUrl = 'https://api.cloudinary.com/v1_1/dlnsabgds/image/upload';

	const formData = new FormData();

	formData.append('upload_preset', 'react-journal');
	formData.append('file', file);

	try {
		const resp = await fetch(cloudUrl, {
			method: 'POST',
			body: formData,
		});

		// console.log(resp);

		if (!resp.ok) throw new Error('Upload was unable to upload');

		const cloudResp = await resp.json();

		// console.log({ cloudResp });

		return cloudResp.secure_url;
	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
};
