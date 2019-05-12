function form(opstion){
    this.user = opstion.user;
    this.pass = opstion.pass;
    this.btn = opstion.btn;
    this.us = opstion.us;
    this.pa = opstion.pa;
    this.useronoff = false;
    this.passonoff = false;
    this.RegTest()
}
form.prototype.RegTest = function(){
    var that = this;
    var userReg = /^1(3|4|5|7|8)\d{9}$/;
    this.user.onkeyup = function(){
        if(userReg.test(that.user.value)){
            that.useronoff = true;
            that.us.innerHTML = "";
        }else{
            that.useronoff = false;
            that.us.innerHTML = "请输入手机号码";
            // alert("请输入手机号码")
        }
    }
    var passReg = /^[a-zA-Z0-9]{6,10}$/;
    this.pass.onkeyup = function(){
        if(passReg.test(that.pass.value)){
            that.passonoff = true;
            that.pa.innerHTML = "";
        }else{
            that.passonoff = false;
            that.pa.innerHTML  = "请输入6-10位的数字或英文密码";
            // alert("请输入6-10位的数字或英文密码")
        }
    }

    this.btn.onclick = function(){
        if(that.useronoff && that.passonoff){
            alert("注册成功")
                location.href = "login.html"
        }else{
            alert("登录信息错误，请重新输入");
        }
    }
}


new form({
        user:document.getElementById("user"),
        pass:document.getElementById("pass"),
        btn:document.getElementById("btn"),
        us:document.getElementById("us"),
        pa:document.getElementById("pa")
})