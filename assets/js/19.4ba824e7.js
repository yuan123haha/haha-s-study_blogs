(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{305:function(v,_,r){"use strict";r.r(_);var t=r(0),p=Object(t.a)({},function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"性能测试小知识点（我的小笔记）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能测试小知识点（我的小笔记）","aria-hidden":"true"}},[v._v("#")]),v._v(" 性能测试小知识点（我的小笔记）")]),v._v(" "),r("h2",{attrs:{id:"性能测试小工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能测试小工具","aria-hidden":"true"}},[v._v("#")]),v._v(" 性能测试小工具")]),v._v(" "),r("p",[r("strong",[v._v("弱网测试（fiddler）")]),v._v("：fiddler是以代理web服务器的形式工作的，它使用代理地址：127.0.0.1，默认端口：8888")]),v._v(" "),r("p",[r("strong",[v._v("ADB")]),v._v("（Android debug bridge）：安卓调试工具，默认端口：5037")]),v._v(" "),r("p",[r("strong",[v._v("devices三种状态")]),v._v("：")]),v._v(" "),r("p",[v._v("1、device")]),v._v(" "),r("p",[v._v("2、offline")]),v._v(" "),r("p",[v._v("3、no device")]),v._v(" "),r("p",[r("strong",[v._v("Monkey")]),v._v("：是Android附带的工具，可以运行在模拟器或实际设备中；它向系统发送伪随机流（按键输入，触摸屏。。。）实现对正在开发的应用程序进行压力测试")]),v._v(" "),r("p",[r("strong",[v._v("DDMC")]),v._v("（内存是否有泄漏）：是Android开发环境中的Dalvik虚拟机调试监控服务，通过ddmc可以看到目标机器运行的进程，线程情况，帮助开发和测试人员调试安卓程序")]),v._v(" "),r("p",[r("strong",[v._v("GT")]),v._v("（随身调）：是APP的随身调测平台，他是直接运行在手机上的‘集成调测环境’")]),v._v(" "),r("h3",{attrs:{id:"小小知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小小知识点","aria-hidden":"true"}},[v._v("#")]),v._v(" 小小知识点")]),v._v(" "),r("p",[r("strong",[v._v("性能操作")]),v._v("：通过自动化的测试工具模拟多种正常、峰值以及异常负载条件来对系统的各项性能指标进行测试")]),v._v(" "),r("p",[v._v("负载测试和压力测试都属于性能测试")]),v._v(" "),r("p",[r("strong",[v._v("测试计划")]),v._v("：例：")]),v._v(" "),r("p",[v._v("1、测试什么？")]),v._v(" "),r("p",[v._v("2、谁测试：jmeter-http sample")]),v._v(" "),r("p",[v._v("3、期待的结果：监听")]),v._v(" "),r("p",[v._v("4、如何判断结果对不对：断言")]),v._v(" "),r("p",[v._v("5、什么时候测试：调度")]),v._v(" "),r("p",[v._v("6：总结")]),v._v(" "),r("p",[v._v("如何区分软件是功能自动化（0-1）还是性能自动化（1-N）：？-？")]),v._v(" "),r("p",[v._v("selenium：功能UI界面自动化")]),v._v(" "),r("p",[v._v("soapUI：功能接口自动化")]),v._v(" "),r("p",[v._v("LR/Jmeter:功能+性能+接口自动化")]),v._v(" "),r("h3",{attrs:{id:"lr（loadrunner）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lr（loadrunner）","aria-hidden":"true"}},[v._v("#")]),v._v(" LR（LoadRunner）")]),v._v(" "),r("p",[r("strong",[v._v("LR")]),v._v("（LoadRunner）：是预测系统行为和性能的负载测试工具，通过以模拟上千万用户实施并发负载及实现性能监测的方式来确认和查找问题与瓶颈；可以最大限度的缩短测试时间，优化性能和加速应用系统的发布周期")]),v._v(" "),r("p",[r("strong",[v._v("LR测试流程")]),v._v("：")]),v._v(" "),r("p",[v._v("指定性能测试方案-》录制（开发）测试脚本：选择协议-》设计测试场景-》执行测试场景-》监控测试场景-》分析测试结果")]),v._v(" "),r("p",[r("strong",[v._v("LR事务")]),v._v("：就是一个计时标识，通常事务时间所反映的是一个操作过程的相应时间")]),v._v(" "),r("p",[r("strong",[v._v("使用事务的原因")]),v._v("：")]),v._v(" "),r("p",[v._v("1、事务是LR度量系统性能指标的唯一手段")]),v._v(" "),r("p",[v._v("2、通常事务计时实现了不同压力负载下的指标对比")]),v._v(" "),r("p",[v._v("3、通过事务计时可以帮助定位性能瓶颈")]),v._v(" "),r("p",[r("strong",[v._v("添加事务（事务点）的方法")]),v._v("：")]),v._v(" "),r("p",[v._v("1、录制时插入")]),v._v(" "),r("p",[v._v("2、维护脚本是操作")]),v._v(" "),r("p",[r("strong",[v._v("LR集合点")]),v._v("（只能向Action部分添加集合）：在需要测试并发前，所有虚拟用户等待和集合的位置")]),v._v(" "),r("p",[v._v("注意：集合点要在事务之前")]),v._v(" "),r("p",[r("strong",[v._v("LR参数化")]),v._v("：针对脚本中的某些常量，定义一个或者多个包含数据源的参数，达到模拟多用户真实使用环境的目的")]),v._v(" "),r("p",[r("strong",[v._v("目的：")])]),v._v(" "),r("p",[v._v("1、模拟更真实的用户使用环境")]),v._v(" "),r("p",[v._v("2、有些被测应用系统不允许用同一个账号多次登入")]),v._v(" "),r("p",[r("strong",[v._v("参数化过程：")])]),v._v(" "),r("p",[v._v("1、确定需要参数化的常量")]),v._v(" "),r("p",[v._v("2、准备参数化数据")]),v._v(" "),r("p",[v._v("3、对脚本进行参数化")]),v._v(" "),r("p",[r("strong",[v._v("补充")]),v._v("：")]),v._v(" "),r("p",[r("strong",[v._v("IP欺骗")]),v._v("：指行动产生的IP数据包为伪造的源IP地址，以便冒充其他系统或发件人的身份")]),v._v(" "),r("p",[r("strong",[v._v("目的")]),v._v("：增加访问频率和访问量，以达到压力测试的效果；通过调用不同的IP，可大程度上的模拟实际使用中多IP访问和测试服务器均衡能力")]),v._v(" "),r("h2",{attrs:{id:"场景分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#场景分析","aria-hidden":"true"}},[v._v("#")]),v._v(" 场景分析")]),v._v(" "),r("p",[v._v("（迭代运行，只迭代action部分）")]),v._v(" "),r("p",[r("strong",[v._v("手工场景")]),v._v("：自行设置虚拟用户的变化，通过设计用户的增加和减少的过程，来模拟真实的用户请求模拟，完成负载的生成；")]),v._v(" "),r("p",[v._v("手工场景：“定量型”性能测试，掌握负载的变化过程中系统各个组件的变化情况，定位性能的瓶颈并了解系统的处理能力，一般在负载测试和压力测试中应用")]),v._v(" "),r("p",[v._v("核心：设置‘用户负载方式’")]),v._v(" "),r("p",[r("strong",[v._v("目标场景")]),v._v("：设置一个运行目标，通过controller的auto load功能进行自动化负载，如果测试的结果达到目标，则说明系统的性能符合测试要求，否则就提示无法达到目标；")]),v._v(" "),r("p",[v._v("目标场景：“定性型”性能测试，只关心最后性能测试的结论是否符合性能需求，常常用在验收测试的场合")]),v._v(" "),r("p",[v._v("查看的5种类型：")]),v._v(" "),r("p",[v._v("virtual users：虚拟用户数，检验被测系统所需的用户数")]),v._v(" "),r("p",[v._v("hits per second：每秒点击量，每秒向服务器的请求数")]),v._v(" "),r("p",[v._v("transactions per second：可以选择一个在脚本里面已经定义好的事务，每秒事务数，反应系统处理能力")]),v._v(" "),r("p",[v._v("transactions response time：事务反应时间")]),v._v(" "),r("p",[v._v("pages per minute：每分钟页面刷新的次数")]),v._v(" "),r("p",[r("strong",[v._v("性能指标")]),v._v("：")]),v._v(" "),r("p",[v._v("LR性能运行监控指标")]),v._v(" "),r("p",[v._v("每秒事务数")]),v._v(" "),r("p",[v._v("平均事务响应时间")]),v._v(" "),r("p",[v._v("吞吐量：单位时间成功传送数据的数量")]),v._v(" "),r("p",[v._v("每秒点击量：客户端产生的每秒请求数")]),v._v(" "),r("p",[v._v("Windows系统资源")]),v._v(" "),r("p",[r("strong",[v._v("图表分析")]),v._v("：")]),v._v(" "),r("p",[v._v("事务平均响应时间")]),v._v(" "),r("p",[v._v("可以分析测试场景运行期间应用系统的性能走向")])])},[],!1,null,null,null);_.default=p.exports}}]);