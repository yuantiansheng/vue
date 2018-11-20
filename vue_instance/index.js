var obj = {
    foo:'bar'
}

Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: obj
})
