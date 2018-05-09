

/**
 * Menu Function
 */
var Menu = {

	init: function(){

		let menus = document.querySelectorAll('.common-menu')[0];
		if(menus){

			let menuItems = menus.querySelectorAll('li');

			menuItems.forEach((item, index) => {

				item.onclick = () => {

					let className = item.className;

					if(className.indexOf('active') == -1) {

						let random = Math.ceil(Math.random() * 1000000000);
						let url = item.getAttribute("data-url");

						window.location.href = url.indexOf('?') != -1 ? (url + '&' + random) : (url + '?' + random);

					} else {
						return false;
					}
				}
			});
		}

	}

}


/**
 * tab Function
 */
var Tab = {

	init: function() {

		let tabs = document.querySelectorAll('.common-tab')[0];
		if(tabs){

			let lis = tabs.querySelectorAll("li");

			lis.forEach((item, index)=>{
				item.onclick = ()=>{
					console.log(new Date().getTime());
					var className = item.className;
					if(className == ''){
						lis.forEach((c, d) => {
							c.setAttribute("class", "");
						});
						item.setAttribute("class", "common-tab-active");
					}
					console.log(new Date().getTime());
				};
			});
		}
	}

}

var Common = {
	menu: Menu,
	tab: Tab,
	init: function(){

		let _that = this;

		_that.menu.init();
		_that.tab.init();
	},

	isPhoneAvailable: function(phoneNumber){
		let mobReg=/^[1][3,4,5,7,8][0-9]{9}$/;
		return mobReg.test(phoneNumber)?true:false;
	},

	isPasswordAvailable: function(password) {
		let passwordReg = /^[\w]{6,12}$/;
		return passwordReg.test(password)?true:false;
	},

	isVerifyCodeAvailable: function(code) {
		let codeReg = /^[0-9]{4}$/;
		return codeReg.test(code)?true:false;
	},

	getRandom: function()
	{
		return Math.ceil(Math.random() * 1000000000);
	},

	/*
	 * show tips message
	 * @param string msg
	 * @return
	 */
	showTips: function(msg){
		let commonTips = document.querySelectorAll(".common-tips")[0];

		commonTips.innerText = msg;
		commonTips.style.display = "block";

		setTimeout(()=>{
			commonTips.style.display = "none";
		}, 2000);
	},

	/*
	 * 	post data
	 * 	@param	string 		url
	 *  @param	object		data
	 * 	@param	function	callback
	 * 	@param	object		parameter
	 */
	 postJson: function(url, data, callback, parameter=null) {

		 // use jQuery
		 $.ajax({
			url : url,
			type : 'post',
			contentType:"application/json",
			data : data,
			success : function(msg){
				callback(msg,parameter);
			},
			error : function(XMLHttpRequest, textStatus, errorThrown) { },
			complete: function(XMLHttpRequest, textStatus) { }
		});
	 },

	 /*
		 * 	post data
		 * 	@param	string 		url
		 *  @param	object		data
		 * 	@param	function	callback
		 * 	@param	object		parameter
		 */
		 post: function(url, data, callback, parameter=null) {

			 // use jQuery
			 $.ajax({
				url : url,
				type : 'post',
				//contentType:"application/x-www-form-urlencoded; charset=UTF-8",
				data : data,
				success : function(msg){
					callback(msg,parameter);
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) { },
				complete: function(XMLHttpRequest, textStatus) { }
			});
		 },
}

$(function(){
  Common.init();
});
