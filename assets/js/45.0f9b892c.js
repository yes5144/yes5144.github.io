(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{395:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"自定义命令审查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义命令审查"}},[s._v("#")]),s._v(" 自定义命令审查")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## /etc/profile 添加")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#export PROMPT_COMMAND=\'logger -p local0.info "$(ifconfig | grep -E "eth|em" -A 1 | grep "172.2" | grep -oP "(?<=inet )[\\d\\.]+") $(who am i |awk "{print \\$1\\" \\"\\$2\\" \\"\\$3\\" \\"\\$4\\" \\"\\$5}") [`pwd`] $(history1 | { read x cmd; echo "$cmd"; })"\'')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROMPT_COMMAND")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'logger -p local0.info \""),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" -i"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("who")]),s._v(" am i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{print \\'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v('}"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("] "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" x cmd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cmd")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\"'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## /etc/rsyslog.conf 添加")]),s._v("\nlocal0.*                                                /var/log/bash.log\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"top"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[s._v("#")]),s._v(" top")]),s._v(" "),t("h4",{attrs:{id:"进程实时监控-htop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程实时监控-htop"}},[s._v("#")]),s._v(" 进程实时监控 - HTop")]),s._v(" "),t("h4",{attrs:{id:"实时监控磁盘-io-iotop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时监控磁盘-io-iotop"}},[s._v("#")]),s._v(" 实时监控磁盘 IO-IOTop")]),s._v(" "),t("blockquote",[t("p",[s._v("IOTop 命令是专门显示硬盘 IO 的命令, 界面风格类似 top 命令。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install iotop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"系统资源监控-nmon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统资源监控-nmon"}},[s._v("#")]),s._v(" 系统资源监控 - NMON")]),s._v(" "),t("blockquote",[t("p",[s._v("NMON 是一种在 AIX 与各种 Linux 操作系统上广泛使用的监控与分析工具")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install nmon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"网络流量监控-iftop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络流量监控-iftop"}},[s._v("#")]),s._v(" 网络流量监控 - IFTop")]),s._v(" "),t("blockquote",[t("p",[s._v("iftop 是类似于 linux 下面 top 的实时流量监控工具。比 iptraf 直观些。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install iftop \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"网络流量监控-iptraf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络流量监控-iptraf"}},[s._v("#")]),s._v(" 网络流量监控 - IPtraf")]),s._v(" "),t("blockquote",[t("p",[s._v("IPtraf 是一个运行在 Linux 下的简单的网络状况分析工具。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看进程占用带宽情况-nethogs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看进程占用带宽情况-nethogs"}},[s._v("#")]),s._v(" 查看进程占用带宽情况 - Nethogs")]),s._v(" "),t("blockquote",[t("p",[s._v("Nethogs 是一个终端下的网络流量监控工具可以直观的显示每个进程占用的带宽。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install nethogs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);