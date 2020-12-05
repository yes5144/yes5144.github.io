(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{419:function(s,a,e){"use strict";e.r(a);var n=e(42),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"redis-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-入门"}},[s._v("#")]),s._v(" redis 入门")]),s._v(" "),e("h4",{attrs:{id:"支持的数据类型：string-hash-list-set-zset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的数据类型：string-hash-list-set-zset"}},[s._v("#")]),s._v(" 支持的数据类型：string,hash, list, set, zset")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-cli  -h  -p  -a \n\nredis-cli shutdown nosave |save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"redis-慢日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-慢日志"}},[s._v("#")]),s._v(" redis 慢日志")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('redis4.0 模块系统：http://www.redismodules.com\n\nkeys * 命令会遍历所有键，所以它的时间复杂度是O(n)，当redis保存了大量键值时，线上禁止使用\ndbsize  键总数量\n\nexists\ndel  key\nexpire  key  seconds\n\nttl  key\n\ntype  key\n\n单线程架构\nRedis使用了单线程架构和I/O多路复用模型来实现高性能的内存数据库服务\n\n为什么这么快？\n1，纯内存访问，内存响应时长大约10纳秒；\n2，非阻塞I/O，redis使用epoll作为I/O多路复用技术的实现，再加上redis自身的事件处理模型将epoll中的连接、读写、关闭都转换为事件，不在网络上浪费过多的时间；\n3，单线程避免了线程切换和竞态产生的消耗；\n\n学会使用批量操作，提高业务处理效率。\n\nincr key\nstrlen  key\n\ngetset key  value\nsetrange key offset value\ngetrange key start end\n\n典型使用场景 web--redis--mysql\n推荐键命名方式: " 业务名:对象名:id:[属性]"\n\nlpush + lpop = Stack(栈)\nlpush + rpop = Queue(队列)\nlpush + ltrim = Capped Collection (有限集合)\nlpush + brpop = Message Queue (消息队列)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])]),e("h4",{attrs:{id:"集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[s._v("#")]),s._v(" 集合")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sadd key element\nsrem key element\nscard key\n\n1，给用户添加标签\nsadd user:1:tags tag1 tag2 tag3\nsadd user:2:tags tag2 tag4 tag3\n...\n2，给标签添加用户\nsadd tag1:users user:1 user3\nsadd tag2:users user:2 user:3 user:4\n...\n用户和标签的关系维护应该在一个事务内执行，防止数据不一致\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h4",{attrs:{id:"有序集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有序集合"}},[s._v("#")]),s._v(" 有序集合")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("zadd key  score member [score member ...]\n\nzcard key\nzsore key member\nzrank key member\nzrevrank key member\nzrem key member\n\nzincrby key incrment member\nzrange key start end [withscroes]\n\nredis-cli  --bigkeys 找到内存占用比较大的键值，可能是系统瓶颈\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h4",{attrs:{id:"慢查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#慢查询"}},[s._v("#")]),s._v(" 慢查询")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("slowlog-log-slower-than\nslowlog-max-len\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"hyperloglog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog"}},[s._v("#")]),s._v(" HyperLogLog")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("pfadd key element \npfcount key \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"发布和订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布和订阅"}},[s._v("#")]),s._v(" 发布和订阅")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("publish  channel  message\nsubscribe channel [channel2 ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"geo（地理信息定位）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#geo（地理信息定位）"}},[s._v("#")]),s._v(" GEO（地理信息定位）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("geoadd key longitude latitude member [longitude latitude member ...]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"redis的噩梦-阻塞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的噩梦-阻塞"}},[s._v("#")]),s._v(" redis的噩梦--阻塞")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-cli --bigkeys\nredis-cli --stat\n\ncommandstats\n\nnetstat -s |grep overflowed\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[s._v("#")]),s._v(" 内存管理")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@HD-TXSH3-XKX-WEB01 dj_tx_update]# redis-cli   info memory\n# Memory\nused_memory:61891264\nused_memory_human:59.02M\nused_memory_rss:104157184\nused_memory_rss_human:99.33M\nused_memory_peak:161850848\nused_memory_peak_human:154.35M\ntotal_system_memory:16723759104\ntotal_system_memory_human:15.58G\nused_memory_lua:37888\nused_memory_lua_human:37.00K\nmaxmemory:0\nmaxmemory_human:0B\nmaxmemory_policy:noeviction\nmem_fragmentation_ratio:1.68\nmem_allocator:jemalloc-4.0.3\n\n\nconfig set maxmemory 6GB\nconfig set maxmemory 2GB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);