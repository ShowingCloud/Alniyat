
//用户提示消息
function notifyUser(message){
	toast.showShort(message);
}

//定义传输NFC数据的json对象 data。
//1、data.unlock为开门密码。对应的为一串密码字符串。
//2、data.add为添加用户。对应的为一个卡号的数组。
//3、data.modify为修改用户昵称。对应的一个为卡号为键，昵称为值的json对象。
//4、data.delete为删除选中的对象。对应的为一个卡号的数组。
//每次通信完都会删除该对象里面的数据。所以得到数据的时候，获取该对象的键为对应的操作数。

var data = {};
//清空所有的传输数据
function deleteData(){
	for (var key in data){
		delete data[key];
	}
}