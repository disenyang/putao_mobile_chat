export default function(Vue){return [
    {
        "path":"/cms_chat",
        "name":"cms_chat",
        "meta":{
            "title":"cms_chat"
        },
        "component":resolve => require(['business/index.vue'], resolve),
        "redirect":{
            "name":"home"
        },
        "children":[
            {
                "path":"login",
                "name":"login",
                "component":resolve => require(['business/login.vue'], resolve)
            },
            {
                "path":"innerTest",
                "name":"innerTest",
                "component":resolve => require(['business/advertise/innerTest/innerTest.vue'], resolve)
            },
            {
                "name":"home",
                "path":"home",
                "meta":{
                    "title":"首页"
                },
                "component":resolve => require(['business/home.vue'], resolve)
            }
        ]
    },
    {
        "path":"*",
        "meta":{
            "title":"cms_chat"
        },
        "redirect":{
            "name":"home"
        },
        "component":Vue.extend({"template": '<router-view transition="fade" transition-mode="out-in"></router-view>'})
    }
]}