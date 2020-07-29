function Validate() {
	this.isUsernameValid = function(value) {
		return value.length < 3 ? false : true;
	};

	this.isEmailValid = function(value) {
		var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return check.test(String(value).toLowerCase());
	};

	this.isPasswordValid = function(value) {
		return value.length < 6 || value ? false : true;
	};

	this.isPassword2Valid = function(value, pwd1) {
		result = value === pwd1 && value !== '' ? true : false;
		// console.log('=====' + result + '=======');
		return result;
	};
}