var dialogOpts = {
	themeDialog: "e",
	themeHeader: "e",
	mode: 'button',
	headerText: '登录',
	headerClose: true,
	buttonPrompt: '密码：',
	buttonInput: true,
	buttonPassword: true,
	showModal: false,
	buttons : {
	  '确定': {
		click: function () { 
			var password = $.mobile.sdLastInput
			var pass = getData('login');
			if ( pass == null){
				pass = "123456";
			}
			if(password === pass){
			  // notifyUser("密码错误请重新输入！");
				$('#init').prop('href', "user.html");
				$.mobile.changePage("user.html");
				//$(this).simpledialog2(dialogOpts);
			   //return;
			}else if(password === ""){
			  // notifyUser("密码错误请重新输入！");
				alert("请输入密码！");
				$(this).simpledialog2(dialogOpts);
			   //return;
			}else {
			  // notifyUser("密码错误请重新输入！");
				alert("密码错误请重新输入！");
				$(this).simpledialog2(dialogOpts);
			   //return;
			}
		},
		icon: "check",
		theme: "e"
	  }
	}
};

