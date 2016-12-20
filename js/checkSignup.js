/**
 * Created by hubeini on 2016/12/21.
 */

function check() {
    if (document.getElementById("inputPassword3").value !=
        document.getElementById("inputConfirm3").value) {
        document.getElementById("warning").innerHTML = "两次密码的输入不一致";
    } else {
        document.getElementById("warning").innerHTML = "   ";
    }
}

function checkNickname()
{
    //只简单的判断昵称的长度
    var id = document.getElementById("inputNickname3");
    var nickname=id.value;
    if(nickname.replace(/[^\x00-\xff]/g,"**").length > 15 ) {
        document.getElementById("warning2").innerHTML = "输入的用户名过长";
    }
    else{
        document.getElementById("warning2").innerHTML = "   ";
    }
}

function checkUsername() {
    var username = document.getElementById("inputUsername3").value;
//        if( username == "" || username == null ){
//            alert( "请先填写用户名！" );
//            return false;
//        }
    switch( isUsername( username ) ){
        case 0: break;
        case 1: {
            changeUsernamePrompt( "格式不正确，用户名不能以数字开头" );
            return false;
        }
        case 2: {
            changeUsernamePrompt( "字符长度有误，合法长度为6-20个字符" );
            return false;
        }
        case 3: {
            changeUsernamePrompt( "含有非法字符，用户名只能包含_,英文字母，数字" );
            return false;
        }
        case 4: {
            changeUsernamePrompt("格式不正确，用户名只能包含_,英文字母，数字" );
            return false;
        }
    }
    document.getElementById("warning3").innerHTML = "   ";
    return true;
}
function changeUsernamePrompt(cnt){
    document.getElementById( "warning3" ).innerHTML = cnt;
    document.getElementById( "warning3" ).style.display = "";
}
function isUsername( username ){
    if( /^\d.*$/.test( username ) ){
        return 1;
    }
    if(! /^.{6,20}$/.test( username ) ){
        return 2;
    }
    if(! /^[\w_]*$/.test( username ) ){
        return 3;
    }
    if(! /^([a-z]|[A-Z])[\w_]{5,19}$/.test( username ) ){
        return 4;
    }
    return 0;
}

function checkPassword() {
    var id = document.getElementById("inputPassword3");
    var password=id.value;
    if(password.length < 6){
        document.getElementById("warning4").innerHTML = "密码长度需大于6位";
    }
    else {
        document.getElementById("warning4").innerHTML = "   ";
    }
}