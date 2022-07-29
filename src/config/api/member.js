import { get, post, put, del } from '../constants';

export const createMember = async (params) => {
	console.log(params);
	return await post('/member', params).then(res => {
		console.log(res);
		return res;
	});
}

export const verifyMail = async (params) => {
	return await post('/member/check/email', params).then(res => {
		console.log(res);
		return res;
	});
}
 