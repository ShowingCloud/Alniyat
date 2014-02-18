$(document).ready(function(){
	$('#userInfo').click(function(){
		$(this).prop('href', "userInfo.html");
		//$.mobile.changePage("userInfo.html");
	});
	$('#lockInfo').click(function(){
		$(this).prop('href', "lockInfo.html");
		//$.mobile.changePage("lockInfo.html");
	});
	$('#unlockRecords').click(function(){
		$(this).prop('href', "unlockRecords.html");
		//$.mobile.changePage("unlockRecords.html");
	});
	$('#illegalRecords').click(function(){
		$(this).prop('href', "illegalRecords.html");
		//$.mobile.changePage("illegalRecords.html");
	});
	$('#modifyInfo').click(function(){
		$(this).prop('href', "modifyInfo.html");
		//$.mobile.changePage("modifyInfo.html");
	});
	$('#addUser').click(function(e){
		$(this).prop('href', "addUser.html");
		//$.mobile.changePage("addUser.html");
	});
	$('#deleteUser').click(function(){
		$(this).prop('href', "deleteUser.html");
		//$.mobile.changePage("deleteUser.html");
	});
	$('#otherSetup').click(function(){
		$(this).prop('href', "otherSetup.html");
		//$.mobile.changePage("otherSetup.html");
	});
	$('#more').click(function(){
		$(this).prop('href', "more.html");
		//$.mobile.changePage("more.html");
	});
});