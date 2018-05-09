var Login = {
	
	init: function() {
		
		let _that = this;
		
		_that.initPasswordHidden();
		_that.initTabSwitch();
		_that.initVerifyCode();
		_that.initLoginSubmit();
		_that.initOtherBtnClick();
	},
	
	initPasswordHidden: function() {
		let passwordHidden = document.querySelectorAll(".app-login-password-hidden")[0];
		passwordHidden.onclick = (e) => {
			
			let className = e.currentTarget.className;
			if(className.indexOf("active") == -1){
				passwordHidden.setAttribute("class", className + " active");
				e.currentTarget.previousElementSibling.setAttribute("type", "text");
			}else{
				passwordHidden.setAttribute("class", className.replace("active", ""));
				e.currentTarget.previousElementSibling.setAttribute("type", "password");
			}
		}
	},
	
	initTabSwitch: function() {
		let tabs = document.querySelectorAll(".app-login-tab")[0];
		if(tabs) {
			let tab = tabs.querySelectorAll("li");
			
			tab.forEach((item, index)=>{
				
				item.onclick = (e)=>{
					let className = item.className;
					if(className.indexOf("active") == -1){
						
						tab.forEach((a, i)=>{
							a.setAttribute("class", a.className.replace("active", ""));
							let d = document.querySelectorAll("."+a.className.substring(0, a.className.lastIndexOf("-")))[0];
							d.style.display = "none";
						});
						
						item.setAttribute("class", className+" active");
						let p = document.querySelectorAll("."+className.substring(0, className.lastIndexOf("-")))[0];
						p.style.display = "block";
						
						document.getElementById("app_login_type").value= item.getAttribute("data-type");
					}else{
						return false;
					}
					
				}
			});
		}
	},

	initVerifyCode: function() {
		
		let _that = this;
		let btn = document.querySelectorAll(".app-login-verify-btn")[0];
		
		btn.onclick = (e)=>{
			
			let mobNo = document.getElementById("mobNo").value;
			if( mobNo.length == 0 ) {
				Common.showTips("请输入手机号码！");
				return false;
			}
			if(!Common.isPhoneAvailable(mobNo)){
				Common.showTips("请输入正确的手机号码！");
				return false;
			}
			
			let url = document.getElementById("app_get_verify_code_url").value;
			let data = {
				"mobNo": mobNo,
			};
			
			Common.post(url, data, _that.getVerifyCodeCallback);
		}
		
	},
	
	getVerifyCodeCallback: function(response, param){
		Common.showTips("发送验证码成功。");
	},
	
	initLoginSubmit: function(){
		let _that = this;
		let type = document.getElementById("app_login_type").value;
		let mobNo = document.getElementById("mobNo").value;
		let password = document.getElementById("password").value;
		let verifyCode = document.getElementById("verifyCode").value;
		if(!Common.isPhoneAvailable(mobNo)){
			Common.showTips("请输入正确的账号！");
			return false;
		}
		if(type == 1) {
			
			if(!Common.isPasswordAvailable(password)){
				Common.showTips("请输入正确的登录密码！");
				return false;
			}
			
			let url = document.getElementById("app_password_login_url").value;
			let data = {
				"mobNo": mobNo,
				"password": password,
			};
			let callback = _that.passwordLoginCallback;
			
		} else {
			if(!Common.isVerifyCodeAvailable(verifyCode)){
				Common.showTips("请输入4位短信验证码！");
				return false;
			}
			
			let url = document.getElementById("app_message_login_url").value;
			let data = {
				"mobNo": mobNo,
				"verifyCode": verifyCode,
			};
			let callback = _that.messageLoginCallback;
		}
	},
	
	passwordLoginCallback: function(response, param){
		Common.showTips("登录成功。");
		let random = Common.getRandom();
		let url = document.getElementById("app_login_success_jump_url").value;
		window.location.href = url.indexOf('?') != -1 ? (url + '&' + random) : (url + '?' + random);
	},
	
	messageLoginCallback: function(response, param){
		Common.showTips("登录成功。");
		let random = Common.getRandom();
		let url = document.getElementById("app_login_success_jump_url").value;
		window.location.href = url.indexOf('?') != -1 ? (url + '&' + random) : (url + '?' + random);
	},
	
	initOtherBtnClick: function(){
		let registerBtn = document.querySelectorAll(".app-login-register")[0];
		registerBtn.onclick = (e) => {
			let random = Common.getRandom();
			let url = document.getElementById("app_register_url").value;
			window.location.href = url.indexOf('?') != -1 ? (url + '&' + random) : (url + '?' + random);
		}
		
		let forgetBtn = document.querySelectorAll(".app-login-forget")[0];
		forgetBtn.onclick = (e) => {
			let random = Common.getRandom();
			let url = document.getElementById("app_forget_password_url").value;
			window.location.href = url.indexOf('?') != -1 ? (url + '&' + random) : (url + '?' + random);
		}
	},
};

Login.init();