(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(t,e,l){"use strict";l.r(e);var a=l(0),i=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"koolshare-merlin-配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#koolshare-merlin-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Koolshare Merlin 配置")]),t._v(" "),l("h2",{attrs:{id:"概述"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),l("p",[t._v("大部分 NETGEAR 和 ASUS  LinkSys 路由器的高端型号都可以刷入基于 ASUS-WRT 的 Merlin 固件 Koolshare 修改版。这个固件提供了 Koolshare 软件中心功能，可以安装插件后方便地通过友好的图形化界面配置 GeckoRelay 服务。")]),t._v(" "),l("p",[t._v("然而，由于普通路由器的性能有限，加之 Koolshare 实现很多功能时存在性能问题，导致大部分路由器上使用 GeckoRelay 服务并不能达到足够高的速度，除非用户购买 2000 元级别的路由器。")]),t._v(" "),l("p",[t._v("我们仅在特定平台和版本上进行过测试，并以此撰写文档")]),t._v(" "),l("p",[t._v("此软件更新较为频繁且有多个版本，文档中的部分内容可能和实际存在差异。")]),t._v(" "),l("div",{staticClass:"tip custom-block"},[l("p",{staticClass:"custom-block-title"},[t._v("主流支持")]),t._v(" "),l("p",[t._v("GeckoRelay 目前提供对此客户端的主流支持")])]),t._v(" "),l("h3",{attrs:{id:"系统环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统环境")]),t._v(" "),l("div",{staticClass:"tip custom-block"},[l("p",{staticClass:"custom-block-title"},[t._v("在此文章撰写时...")]),t._v(" "),l("p",[t._v("ASUS GT-AC5300"),l("br"),t._v("\nKoolshare Modified ROM 3.0.0.4.382_15984_koolshare"),l("br"),t._v("\nKoolSS 1.1.6(Merlin)")])]),t._v(" "),l("h2",{attrs:{id:"注意事项"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),l("p",[t._v("由于使用 Koolshare Modified ROM（改版固件）的太多是普通家用路由器，其使用的 CPU 大都为 MIPS 或 ARMv7 架构，其性能可能不足，因此使用 KoolSS 可能无法达到较高速率。")]),t._v(" "),l("p",[t._v("目前经过 GeckoRelay 和 Koolshare 的测试，以下两款路由器使用 Koolshare Modified ROM 的 KoolSS 后可基本达到 200Mbps 的速率：")]),t._v(" "),l("blockquote",[l("p",[t._v("ASUS GT-AC5300")]),t._v(" "),l("p",[t._v("ASUS RT-AC86U")])]),t._v(" "),l("p",[t._v("如果想要在路由器上达到较高 SS 连接速率，请考虑购买以上两款路由器或购买软路由使用 LEDE")]),t._v(" "),l("p",[t._v("以下是各常见路由型号使用 KoolSS 的大致连接速率：")]),t._v(" "),l("p",[t._v("我们会根据收集到的数据不断更新此表格，但用户提供的数据本身未经验证，仅供参考。你也可以提供你的测试数据，以便协助我们完善此内容。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("型号")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("数据提供方")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("品牌")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("大致连接速率")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R6300v2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("60Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R6400")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("30Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R6900")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("60Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R7000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("80Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R8000")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("R8500")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NETGEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("110Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-N66U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC56U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("20Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC66U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("30Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC68U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("70Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC87U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("70Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC88U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("100Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC86U")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("200Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC1900P")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("70Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC3100")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC3200")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC66U-B1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("50Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("RT-AC5300")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ASUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("120Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("GT-AC5300")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("玩家国度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("250Mbps")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EA6200")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EA6400")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EA6700")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EA6500v2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("EA6900")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("未经测试")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("WRT1900ACS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GeckoRelay")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Linksys")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("120Mbps")])])])]),t._v(" "),l("p",[t._v("（数据提供方表明此数据是通过何种渠道收集的）")]),t._v(" "),l("p",[t._v("以上测试仅供参考，不同服务配置的情况下数值可能存在差异")]),t._v(" "),l("h2",{attrs:{id:"从软件中心安装-koolss"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#从软件中心安装-koolss","aria-hidden":"true"}},[t._v("#")]),t._v(" 从软件中心安装 KoolSS")]),t._v(" "),l("p",[t._v("安装前可能有额外操作")]),t._v(" "),l("p",[t._v("Koolshare Modified ROM 在使用软件中心前需要先清空并格式化 JFFS2 分区，由于此不属于我们文档应当包含的一部分，因此阁下需要自行前往 Koolshare 社区了解不同机型的不同清除方法。")]),t._v(" "),l("p",[t._v("通过浏览器访问 Koolshare Modified ROM（改版固件） 管理页面。")]),t._v(" "),l("p",[t._v("由于 Koolshare Modified ROM 的页面存在一些兼容性问题，建议使用 Google Chrome 浏览器")]),t._v(" "),l("p",[t._v("在管理页面底部点击「软件中心」，然后点击「未安装」选项卡，然后点击「科学上网」插件来安装。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/kl1m4.png",alt:"",title:"安装 KoolSS"}})]),t._v(" "),l("p",[t._v("页面会提示正在安装。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/dx00y.png",alt:"",title:"正在安装中"}})]),t._v(" "),l("p",[t._v("如果安装完成，页面会自动跳转，并可以在「已安装」选项卡下看到此插件。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/spv3m.png",alt:"",title:"安装完成"}})]),t._v(" "),l("h2",{attrs:{id:"检查-geckorelay-订阅的设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#检查-geckorelay-订阅的设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查 GeckoRelay 订阅的设置")]),t._v(" "),l("p",[t._v("KoolSS 完整支持 SSR 协议")]),t._v(" "),l("p",[t._v("如果不需要使用 Surge 等软件，建议将订阅协议组设置为不带有「兼容」字样的协议（混淆插件除外）。")]),t._v(" "),l("p",[t._v("访问 GeckoRelay 管理门户，点击已经激活的订阅进入订阅管理页面。然后点击「订阅设置」按钮即可修改。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/8plkh.png",alt:"",title:"订阅设置"}})]),t._v(" "),l("h3",{attrs:{id:"获取-geckorelay-api-订阅"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#获取-geckorelay-api-订阅","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 GeckoRelay API 订阅")]),t._v(" "),l("p",[t._v("打开 GeckoRelay 管理门户，点击订阅名称进入订阅信息管理页面。在「自动配置」功能区找到桌面平台 – 「节点订阅」。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/6tib7.png",alt:"",title:"GeckoRelay API 订阅"}})]),t._v(" "),l("p",[t._v("点击按钮后会弹出新的窗口，在新的窗口中点击「普通模式」。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/p467g.png",alt:"",title:"GeckoRelay API 订阅模式"}})]),t._v(" "),l("p",[t._v("按钮上的文字应当在点击后变成「已经复制到剪贴板」，说明 GeckoRelay API URI 已经复制到你计算机的剪贴板中。")]),t._v(" "),l("p",[t._v("这个 API URI 非常重要，你应当把它当做密码一样妥善保管，避免泄露。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/kh4at.png",alt:"",title:"复制 API URI 到剪贴板"}})]),t._v(" "),l("h2",{attrs:{id:"配置-koolss"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置-koolss","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 KoolSS")]),t._v(" "),l("p",[t._v("点击「已安装」选项卡中的「科学上网」插件进入插件管理页面。")]),t._v(" "),l("p",[t._v("如果是第一次使用此插件，则可能弹出此会话框：")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/xw3x7.png",alt:"",title:"首次使用提示"}})]),t._v(" "),l("p",[t._v("点击「订阅节点」按钮进入更新管理页面。")]),t._v(" "),l("p",[t._v("如果没有弹出此会话框，则手动打开 KoolSS 开关并点击「更新管理」选项卡。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/4t8kw.png",alt:"",title:"更新管理页面"}})]),t._v(" "),l("p",[t._v("进入「更新管理」页面后，滑动页面到下方的「SSR 订阅设置」区域。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/c6y24.png",alt:"",title:"SSR 订阅设置"}})]),t._v(" "),l("p",[t._v("在「订阅地址管理」中粘贴我们之前复制的 GeckoRelay API URI，然后进行如下设定：")]),t._v(" "),l("div",{staticClass:"warning custom-block"},[l("p",{staticClass:"custom-block-title"},[t._v("订阅设置")]),t._v(" "),l("p",[t._v("将「订阅节点模式设定」设置为「游戏模式」")]),t._v(" "),l("p",[t._v("将「订阅节点混淆参数设定」设置为「使用订阅设定」")]),t._v(" "),l("p",[t._v("将「下载订阅时走 SS 网络」设置为「不走 SS」")]),t._v(" "),l("p",[t._v("开启「订阅计划任务」，并选择一个你可能不会使用网络的时间。")])]),t._v(" "),l("p",[t._v("设置完成后，点击「保存并订阅」按钮。页面会打开一个新的提示框并出现类似下图中的内容：")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/afxde.png",alt:"",title:"正在进行订阅"}})]),t._v(" "),l("p",[t._v("订阅完成后，页面会自动跳转到主页面，此时 KoolSS 的开关可能将会再次出于关闭状态，点击开关来打开它。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/25eg5.png",alt:"",title:"打开 KoolSS 开关"}})]),t._v(" "),l("h2",{attrs:{id:"附加设置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#附加设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 附加设置")]),t._v(" "),l("p",[t._v("为了使我们的使用更加舒适，我们需要进行一些附加设置。")]),t._v(" "),l("p",[t._v("点击「更新管理」选项卡，将「规则定时更新任务」设置为「开启」，然后选择一个你可能不会使用网络的时间段。并将所有规则的更新全部勾选，然后点击「保存设置」。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/7pfas.png",alt:"",title:"开启规则更新"}})]),t._v(" "),l("p",[t._v("页面将会自动跳转，完成后应当再次返回此页面，然后点击「立即更新」。以确保 KoolSS 已经获取到最新的规则。")]),t._v(" "),l("p",[t._v("点击「DNS 设定」选项卡，然后进行以下设定：")]),t._v(" "),l("div",{staticClass:"tip custom-block"},[l("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),l("p",[t._v("将选择国内 DNS 设置为运营商 DNS，如果你的运营商 DNS 存在劫持，则可以使用"),l("code",[t._v("119.29.29.29")]),t._v("或自定义设置为"),l("code",[t._v("119.28.28.28")])]),t._v(" "),l("p",[t._v("将「选择国外 DNS」设置为"),l("code",[t._v("ss-tunnel")]),t._v("，然后设置你喜欢的国外公共 DNS 服务提供商")])]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/1z7ik.png",alt:"",title:"DNS 设定"}})]),t._v(" "),l("h2",{attrs:{id:"开启-koolss"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#开启-koolss","aria-hidden":"true"}},[t._v("#")]),t._v(" 开启 KoolSS")]),t._v(" "),l("p",[t._v("完成附加设置后，点击「账号设置」选项卡，选择需要的接入点，然后点击底部的「提交」按钮。KoolSS 将会启动。")]),t._v(" "),l("p",[t._v("一段时间后，页面将会自动刷新并返回到账号设置页面，此时 KoolSS 会自动检测状态，如果国内国外均为 OK 状态即可正常使用。")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://rixcloud-1255365801.file.myqcloud.com/image/wxhxb.png",alt:"",title:"KoolSS 已经正常运行"}})]),t._v(" "),l("p",[t._v("某些情况下，显示连接错误并非未能连接上，而是可能的测试失败，请实际使用浏览器打开网页测试。")])])}],!1,null,null,null);e.default=i.exports}}]);