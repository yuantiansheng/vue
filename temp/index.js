var app = new Vue({
    el:'#app',
    data:{
        msg:'Hello Vue!',
        rawHtml:'<span style="color:red">This should be red.</span>'
    }
})

var app1 = new Vue({
    el:'#app1',
    data:{
        dynamicId:false,
        isButtonDisabled:false
    }
})

var app2 = new Vue({
    el:'#app2',
    data:{
        number:5,
        ok:true,
        message:'Hello Vue!',
    }
})

var app3 = new Vue({
    el:'#app3',
    data:{
        url:"www.baidu.com",
        doSomething:function () {
            
        }
    }
})