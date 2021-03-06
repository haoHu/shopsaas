(function ($) {
	IX.ns("Hualala.TypeDef");

	// 商户中心角色配置
	// DongBo 要求角色数据并不是保存在后台数据库中，而是将角色常量维护在后台代码中，所以
	// 前端也维护一份配置信息，与后台保持一致
	Hualala.TypeDef.SiteRoleType = [
		{id : 1, name : "店长", "sortIndex" : 5, "roleType" : "manager", "operationScope" : "single-shop", "desc" : "可以管理单店的信息和功能"},
		{id : 2, name : "财务", "sortIndex" : 4, "roleType" : "finance", "operationScope" : "settle", "desc" : "可以管理多个结算账户"},
		{id : 3, name : "区域经理", "sortIndex" : 3, "roleType" : "area-manager", "operationScope" : "multi-shop", "desc" : "可以开店，并管理多个店铺的基本信息和功能"},
		{id : 4, name : "集团经理", "sortIndex" : 2, "roleType" : "general", "desc" : "管理所有店铺信息和功能及结算数据"},
		{id : 5, name : "系统管理员", "sortIndex" : 1, "roleType" : "admin", "desc" : "超级管理员，全部权限"}
	];

	// 站点导航数据
	Hualala.TypeDef.SiteNavType = [
		{name : 'shop', label : '店铺', type:"link"},
		{name : 'setting', label : '业务', type:"link"},
		{name : 'order', label : '订单', type:"link"},
		{name : 'account', label : '结算', type:"link"},
		{name : 'crm', label : '会员', type:"subnav",
			subnavs : [
				{name : "crmMemberSchema", label : "会员概况", type : "link", src : "CRMMemberSubNavType"},
				{name : "crmDealSummary", label : "交易报表", type : "link", src : "CRMDealSubNavType"},
				{name : "crmParameter", label : "参数设置", type : "link", src : "CRMParamsSubNavType"}
			]
		},
		{name : 'mcm', label : '营销', type : "subnav",
			subnavs : [
				{name : "mcmGiftsMgr", label : "礼品管理", type : "link", src : ""},
				{name : "mcmEventMgr", label : "活动管理", type : "link", src : ""}
			]
		},
		{name : 'weixin', label : '微信', type:"subnav",
			subnavs : [
				{name : "wxReply", label : "微信管理", type : "link", src : "WeixinAdminSubNavType"},
				{name : "wxAdvertorial", label : "素材管理", type : "link", src : "WeixinMaterialSubNavType"}
			]
		},
		{name : 'user', label : '权限', type:"link"}
        
	];
    
    Hualala.TypeDef.WeixinAdminSubNavType = [
		{name : "wxReply", label : "自动回复"},
		{name : "wxSubscribe", label : "关注自动回复"},
		{name : "wxMenu", label : "自定义菜单"}//,
        //{name : "wxQrCode", label : "二维码维护"}
	];
    Hualala.TypeDef.WeixinMaterialSubNavType = [
        {name : "wxAdvertorial", label : "软文管理"},
		{name : "wxContent", label : "图文管理"},
		{name : "wxText", label : "文本管理"}
	];

	Hualala.TypeDef.CRMMemberSubNavType = [
		{name : "crmMemberSchema", label : "会员概览", pkeys : []},
		{name : "crmQueryMember", label : "会员查询", pkeys : []},
		{name : "crmCardStats", label : "入会统计", pkeys : []}
	];
	Hualala.TypeDef.CRMDealSubNavType = [
		{name : "crmDealSummary", label : "储值消费汇总", pkeys : []},
		{name : "crmDealDetail", label : "交易明细", pkeys : []},
		{name : "crmRechargeReconciliation", label : "储值对账", pkeys : []}
	];
	Hualala.TypeDef.CRMParamsSubNavType = [
		{name : "crmParameter", label : "会员系统参数", pkeys : []},
        {name : "crmCardLevels", label : "会员等级", pkeys : []},
		{name : "crmRechargePackageBusiness", label : "充值套餐", pkeys : []},
		{name : "crmShopSpecialPrice", label : "店铺特惠", pkeys : []}
	];
    
    

	Hualala.TypeDef.OrderSubNavType = [
		// Note：先屏蔽，第二版本开放
		// {name : 'order', label : '概览', pkeys : []},
		{name : 'orderQuery', label : '订单查询', pkeys : ['startDate','endDate','cityID','shopID','orderStatus','userMobile','orderID','s_orderTotal','e_orderTotal']},
		{name : 'orderQueryDay', label : '订单日汇总', pkeys : ['startDate','endDate','cityID','shopID','orderStatus']},
		{name : 'orderQueryDuring', label : '订单期间汇总', pkeys : ['startDate','endDate','cityID','shopID','orderStatus']},
		{name : 'orderDishesHot', label : '菜品销量排行', pkeys : ['startDate','endDate','cityID','shopID','foodCategoryName']},
		{name : 'orderQueryCustomer', label : '顾客统计', pkeys : ['startDate','endDate','cityID','shopID','userLoginMobile','userName']}
	];

	Hualala.TypeDef.GENDER = [
		{value : '0', valueStr : 'female', label : '女士'},
		{value : '1', valueStr : 'male', label : '先生'},
		{value : '2', valueStr : 'unkonwn', label : '未知'}
	];
	/**
	 * 店铺备注类型
	 * 备注类型10:口味，20：作法，30：品注，40：单注，45：赠菜原因，50：退菜原因，60：退单原因
	 */
	Hualala.TypeDef.ShopNoteType = {
		TASTE : 10,
		COOKING : 20,
		FOOD_COMMENT : 30,
		ORDER_COMMENT : 40,
		FREE_REASON : 45,
		RETURN_REASON : 50,
		CHARGE_BACK : 60
	};
	/**
	 * 订单子类型
	 * 10：预订 11：闪吃  12：店内自助点菜 15：排队取号 20：外送 21：自提 
	 */
	Hualala.TypeDef.OrderSubType = {
		EATIN : 0,
		RESERVE : 10,
		Flash : 11,
		DIY : 12,
		QUEUE : 15,
		TAKEOUT : 20,
		PICKUP : 21
	};
	/**
	 * 时段类型定义
	 */
	Hualala.TypeDef.TimeID = {
		allday : {value : 0, label : "全天"},
		breakfast : {value : 1, label : "早餐"},
		lunch : {value : 2, label : "午餐"},
		afternoon : {value : 3, label : "下午茶"},
		dinner : {value : 4, label : "晚餐"},
		supper : {value : 5, label : "夜宵"}
	};
	/**
	 * 店铺状态
	 */
	Hualala.TypeDef.ShopStatus = [
		{value : 0, label : "待开放"},
		{value : 1, label : "正常"},
		{value : 2, label : "装修暂停营业"},
		{value : 3, label : "菜单更新暂停服务"},
		{value : 4, label : "信息更新暂停服务"},
		{value : 5, label : "店内放假暂停服务"},
		{value : 8, label : "信息完善中"},
		{value : 9, label : "已关闭"}
	];

	/**
	 * 订单状态
	 * @type {Array}
	 */
	Hualala.TypeDef.OrderStatus = [
		{value : '', label : "全部"},
		// {value : '0', label : "已取消"},
		// {value : '10', label : "未完成"},
		// {value : '15', label : "已确认"},
		{value : '20', label : "待消费(已付款)"},
		{value : '30', label : "已退单"},
		{value : '40', label : "已消费"}
		// {value : '50', label : "已完成 "},
	];

	/**
	 * 菜品属性
	 */
	Hualala.TypeDef.FoodAttr = {
		// 是否必点
		AUTOADD : 1,
		// 是否店家招牌菜
		SPECIALTY : 1,
		// 推荐菜
		RECOMMEND : 1,
		// 新菜
		NEW : 1,
		// 打折菜
		DISCOUNT : 1,
		// 允许点评
		COMMENTS : 1,
		// 能退订退款
		CANREFUND : 1,
		// 是套餐
		SETFOOD : 1,
		// 外送标记
		TakeawayTag : {
			NOTAKEAWAY : 0,
			TAKEAWAY : 1,
			ONLYTAKEAWAY : 2
		},
		HASIMAGE : 1
	};
	/**
	 * 交易类型 
	 * 101：网上订餐消费（卖出）+ 102：账户充值+ 199：账户资金调加+ 201：订餐消费后退款（退款）- 202：平台预付款- 203：提现- 204：支付平台服务费- 205：支付平台广告费- 206：支付平台信息费- 299：账户资金调减-
	 */
	Hualala.TypeDef.FSMTransType = [
		{value : '', label : "全部"},
		{value : 101, label : "网上订餐", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"},
		//{value : 102, label : "账户充值", tpl : "tpl_fsmcustomer_detail", queryCall : "Hualala.Global.queryAccountFsmCustomerDetail", queryKeys : "SUA_TransItemID,transType"},
		//{value : 103, label : "网上订餐用券", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"},
		//{value : 104, label : "到店消费验券", tpl : "tpl_chktick_detail", queryCall : null, queryKeys : null},
		{value : 105, label : "会员在线储值", tpl : "tpl_fsmcustomer_detail", queryCall : "Hualala.Global.queryAccountFsmCustomerDetail", queryKeys : "SUA_TransItemID,transType"},
		//{value : 199, label : "账户资金调加"},
		{value : 201, label : "订单退款", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"},
		//{value : 202, label : "平台预付款"},
		{value : 203, label : "提现", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"},
		// {value : 204, label : "支付平台服务费"},
		// {value : 205, label : "支付平台广告费"},
		// {value : 206, label : "支付平台信息费"},
		//{value : 207, label : "订餐消费后退券", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"},
		//{value : 299, label : "账户资金调减"},
		{value : 410, label : "店内自助点菜结账", tpl : "tpl_orderpay_detail", queryCall : "Hualala.Global.queryAccountOrderPayDetail", queryKeys : "orderKey,orderID"}
	];
	/**
	 * 交易状态
	 * 0：等待交易完成 1：交易成功 2：交易关闭
	 * 
	 */
	Hualala.TypeDef.FSMTransStatus = [
		{value : '', label : "全部"},
		{value : 0, label : "等待交易完成"},
		{value : 1, label : "交易成功"},
		{value : 2, label : "交易关闭"}
	];
	/**
	 * 支付类型
	 *  10：预付款.现金 11：预付款.支票 12：预付款.银行转账 13：预付款.刷银行卡 18：预付款.商户让利 20：帐户充值.现金 21：帐户充值.支票 22：帐户充值.银行转账 23：帐户充值.刷银行卡 24：帐户充值.在线支付 30：帐户提现.现金 31：帐户提现.支票 32：帐户提现.银行转账 33：帐户提现.刷银行卡 
	 */
	Hualala.TypeDef.FSMTransDetail = [
		{value : 10, label : "预付款.现金"},
		{value : 11, label : "预付款.支票"},
		{value : 12, label : "预付款.银行转账"},
		{value : 13, label : "预付款.刷银行卡"},
		{value : 18, label : "预付款.商户让利"},
		{value : 20, label : "帐户充值.现金"},
		{value : 21, label : "帐户充值.支票"},
		{value : 22, label : "帐户充值.银行转账"},
		{value : 23, label : "帐户充值.刷银行卡"},
		{value : 24, label : "帐户充值.在线支付"},
		{value : 30, label : "帐户提现.现金"},
		{value : 31, label : "帐户提现.支票"},
		{value : 32, label : "帐户提现.银行转账"},
		{value : 33, label : "帐户提现.刷银行卡"}
	];

	/**
	 * 结算账户收款方方式
	 * @type {Array} 1:个人;2:单位
	 */
	Hualala.TypeDef.AccountReceiverTypes = [
		{value : 2, label : "单位"},
		{value : 1, label : "个人"}
	];

	Hualala.TypeDef.ShopOperationMode = [
		{value : 0, label : "正餐"},
		{value : 1, label : "快餐"},
		{value : 2, label : "美食广场"}
	];

	/**
	 * 店铺业务类型
	 * 10：常规预订，11：闪吃，20：外送，21：到店自提，41：店内点菜，42：店内买单
	 * 业务表单参数：
	 * advanceTime:提前预订时间 int 分钟 0：无需提前
	 * noticeTime:POS提前通知时间 int 分钟 0|null 立即通知
	 * minAmount:最低消费金额 int 0
	 * serviceAmount:服务费 int 0
	 * freeServiceAmount:免服务费菜品金额
	 * holidayFlag:节假日开放 0:包含节假日（默认），1:只能在节假日，2:不包含节假日
	 * openDays: 开放服务天数 int
	 * servicePeriods: 开放时段 string hhmm,hhmm; 支持结束日期小于终止日期，时段最小间隔不应小于2个小时
	 * reserveTableTime: 留位时间 int 分钟
	 * reserveTableDesc: 留位说明40字
	 * takeawayDeliveryAgent: 配送单位，默认"自助配送"
	 * takeawayDeliveryTime: 送达时间 int 分钟
	 * takeawayScope: floor 公里
	 * takeawayScopeDesc: 外卖送餐范围说明200字
	 * submitSMSTemplateID: 下单后短信模板ID
	 * checkSMSTemplateID: 验单后短信模板ID
	 * payMethod: 支付方式 int 0：仅支持在线支付（默认）；1：仅支持线下支付；2：都支持
	 * needInputTableName: 下单时需要输入桌号 int 0：不需要；1：需要
	 * supportInvoice: 提供发票 int 0：不需要;1:需要（默认）
	 * supportCommitToSoftware: 支持下单到餐饮软件 0：不支持（默认）；1：支持
	 * payMethodAtShop: 店内支付方式 int 0：均不支持（默认）；1：直接输入金额付款；2：扫码付款；3：均支持
	 * checkSpotOrder: 顾客可通过手机结账 int 0: 不支持；1:支持
	 * payBeforeCommit: 支付完成后才能下单 int 0：不支持（不支持）；1：支持
	 * fetchFoodMode : 取餐模式 int 0：流水号模式（默认）；1：牌号模式；2：收银台直接出餐
	 * 
	 */
	Hualala.TypeDef.ShopBusiness = [
		{id : 41, label : "店内自助", name : "spot_order", businessIsSupported : true,
			callServer : 'Hualala.Global.setSpotOrderParams',
			// formKeys : 'fetchFoodMode,payMethodAtShop,payBeforeCommit,supportCommitToSoftware',
			formKeys : 'fetchFoodMode,checkSpotOrder,payBeforeCommit,supportCommitToSoftware',
			operationMode : {
				// 正餐
				// 0 : 'payMethodAtShop,payBeforeCommit,supportCommitToSoftware',
				// @Note for 1.1 delete supportCommitToSoftware(#4105)
				0 : 'payBeforeCommit',
				// 快餐
				// @Note for 1.1 delete supportCommitToSoftware(#4105)
				1 : 'fetchFoodMode',
				2 : 'payBeforeCommit'
			}
		},
		{
			id : 10, label : "订座点菜", name : "commonreserve_order", businessIsSupported : true, 
			callServer : 'Hualala.Global.setCommonReserveParams',
			formKeys : 'advanceTime,noticeTime,minAmount,reserveTableTime,reserveTableDesc,payMethod'
		},
		{id : 11, label : "闪吃", name : "justeat_order", businessIsSupported : true,
			callServer : 'Hualala.Global.setJustEatParams',
			formKeys : 'advanceTime,noticeTime,minAmount,holidayFlag,servicePeriods,reserveTableTime,reserveTableDesc,payMethod'
		},
		{id : 20, label : "外送", name : "takeaway_order", businessIsSupported : true,
			callServer : 'Hualala.Global.setTakeAwayParams',
			// formKeys : 'advanceTime,noticeTime,minAmount,serviceAmount,freeServiceAmount,holidayFlag,servicePeriods,takeawayDeliveryAgent,takeawayDeliveryTime,takeawayScope,takeawayScopeDesc,payMethod'
			formKeys : 'noticeTime,servicePeriods,holidayFlag,takeawayDeliveryTime,minAmount,serviceAmount,freeServiceAmount,takeawayScope,payMethod'
		},
		{id : 21, label : "自提", name : "takeout_order", businessIsSupported : true,
			callServer : 'Hualala.Global.setTakeOutParams',
			// formKeys : 'advanceTime,freeServiceAmount,holidayFlag,minAmount,serviceAmount,servicePeriods,noticeTime,payMethod'
			formKeys : 'noticeTime,servicePeriods,holidayFlag,advanceTime,minAmount,payMethod'
		},
		{id : 1000, label : "会员卡", name : "crm", businessIsSupported : true, callServer : null, formKeys : null},
		{id : 2000, label : "老板通", name : "bi", businessIsSupported : true, callServer : null, formKeys : null}
		// {id : 42, label : "店内买单", name : "spot_pay"}
	];

	/**
	 * 店铺业务状态切换的相关提示消息
	 * @type {Array}
	 * 10：常规预订，11：闪吃，20：外送，21：到店自提，41：店内点菜，42：店内买单，1000: 会员卡，2000: 老板通
	 * title : 业务名称
	 * id : 业务ID
	 * desc : 业务说明信息
	 * switchOn : 开启操作的确认文字
	 * switchOff : 关闭操作的确认文字
	 */
	Hualala.TypeDef.ShopBusinessSwitcherTips = [
		{
			id : 41, name : "spot_order", title : "店内自助", 
			desc : "开启此功能后顾客到店即可通过手机扫描二维码进行自助点菜、自助结账，此项功能将有效的缓解服务人员少、服务量大的问题，提升顾客体验、提升点菜、结账效率", 
			switchOn : "开启此功能请确保店内餐饮软件与哗啦啦接口打通，并已在店内安装了哗啦啦代理程序否则顾客将无法使用此功能！", 
			switchOff : "关闭此功能将导致顾客无法通过手机进行自助点菜结账！"
		},
		{
			id : 10, name : "commonreserve_order", title : "订座点菜", 
			desc : "开启此功能后顾客可通过手机或网上随时预订本店桌台、提前点菜、提前支付", 
			switchOn : "开启此功能请确保店内已安装了哗啦啦代理程序，否则将无法接收到顾客预订订单！", 
			switchOff : "关闭此功能将导致顾客无法通过网上下预订订单！"
		},
		{
			id : 11, name : "justeat_order", title : "闪吃", 
			desc : "开启此功能后顾客可通过手机提前点菜、支付并填写到店就餐时间，店内收到订单通知后提前备餐，顾客到店就能就餐，吃完就闪。这项服务大大节省了顾客的就餐时间，服务体验明显提升", 
			switchOn : "开启此功能请确保店内已经安装了哗啦啦代理程序，否则将无法接受顾客闪吃订单！", 
			switchOff : "关闭此功能将导致顾客无法通过网上下闪吃订单，将丢失需要快速就餐的顾客！"
		},
		{
			id : 20, name : "takeaway_order", title : "外送", 
			desc : "开启此功能后顾客可通过手机下外卖订单，避免了订餐电话占线、接线口音、手写记录错误等诸多问题，让店内外卖业务不堵塞更顺畅高效", 
			switchOn : "开启此功能请确保店内已安装了哗啦啦代理程序，否则将无法接收到顾客外卖订单！", 
			switchOff : "关闭此功能将导致顾客无法通过网上下外卖订单！"
		},
		{
			id : 21, name : "takeout_order", title : "自提", 
			desc : "开启此功能后顾客可通过手机提前点菜支付下单，并告知到店自取时间，店内收到订单通知后提前备餐，顾客到店即可提取", 
			switchOn : "开启此功能请确保店内已经安装了哗啦啦代理程序，否则将无法接受顾客自提订单！", 
			switchOff : "关闭此功能将导致顾客无法通过网上下自提订单！"
		},
		
		{
			id : 1000, name : "crm", title : "会员卡", 
			desc : "开启此功能后，顾客即可随时随地自助注册成为会员，在线储值、卡余额核销、查询卡信息等全自助操作，结合有效的运营策略您将看到会员数、消费粘性及储值快速增长。", 
			switchOn : "开启此功能请确保店内已经安装了哗啦啦代理程序，否则顾客将无法使用会员功能！", 
			switchOff : "关闭此功能将导致本店已有会员无法在本店享受会员服务（会员优惠、积分、卡余额支付等）！"
		},
		{
			id : 2000, name : "bi", title : "老板通", 
			desc : "开启此功能后餐厅老板即可通过《哗啦啦-饮食老板通》APP随时随地掌握本店营业实况、运营趋势等重要经营数据", 
			switchOn : "开启此功能需要店内餐饮软件与哗啦啦接口打通，并已在店内安装了哗啦啦代理程序否则将无法使用此功能！", 
			switchOff : "关闭此功能将导致老板在《哗啦啦-饮食老板通》APP中无法查到本店数据信息！"
		}
	];

	Hualala.TypeDef.PayMethodOptions = [
		{value : 0, label : "仅支持在线支付"},
		{value : 1, label : "仅支持线下支付"},
		{value : 2, label : "均支持"},
	];

	Hualala.TypeDef.PayMethodAtShopOptions = [
		{value : 0, label : "均不支持"},
		{value : 1, label : "直接输入金额付款"},
		{value : 2, label : "扫码付款"},
		{value : 3, label : "均支持"}
	];

	Hualala.TypeDef.FetchFoodModeOptions = [
		{value : 0, label : "流水号模式"},
		{value : 1, label : "牌号模式"},
		{value : 2, label : "收银台直接出餐"}
	];

	Hualala.TypeDef.HolidayFlagOptions = [
		{value : 0, label : "包含节假日"},
		{value : 1, label : "只能在节假日"},
		{value : 2, label : "不包含节假日"}
	];

	Hualala.TypeDef.PayBeforeCommitOptions = [
		{value : 1, label : "餐前结账"},
		{value : 0, label : "餐后结账"}
	];

	/**
	 * 获取一天(默认)的时间间隔选项数据
	 * 1小时内，时间间隔15分钟
	 * 1-3小时内，时间间隔30分钟
	 * 3-12小时内，时间间隔3小时
	 * 24小时以上，时间间隔24小时
	 * @param {NULL | int} endMin 结束的分钟数
	 * @return {Array} 时间间隔选项数据[{value : minutes, label : 'time format string'}]
	 */
	Hualala.TypeDef.MinuteIntervalOptions = function (endMin) {
		var start = 0, end = endMin || Hualala.Constants.SecondsOfDay / 60, gap = 15, i = 1;
		var list = [], cur = 0, minsOfHour = Hualala.Constants.SecondsOfHour / 60,
			minsOfDay = minsOfHour * 24;
		var formatTime = function (m) {
			if (m == 0) return '不限';
			var day = m % minsOfDay == 0 ? m / minsOfDay : 0;
				hour = (m < minsOfHour || m % minsOfDay == 0) ? 0 : (m == minsOfHour) ? 1 : parseInt(m / minsOfHour),
				min = m % minsOfHour;
			return (day == 0 ? '' : day + '天') + (hour == 0 ? '' : hour + '小时') + (min == 0 ? '' : (min + '分钟'));
		};
		while(cur <= end) {
			list.push({
				value : cur,
				label : formatTime(cur)
			});
			if (cur < minsOfHour) {
				cur += gap * i;
			} else if (cur < minsOfHour * 3) {
				i = 2;
				cur += gap * i;
			} else if (cur < minsOfHour * 12) {
				i = 4 * 3;
				cur += gap * i;
			} else if (cur <= minsOfHour * 24) {
				i = 4 * 12;
				cur += gap * i;
			}
		}
		return list;
	};

	/*银行代码列表*/
	Hualala.TypeDef.BankOptions = [
		{
			value: "CBC",
			label: "中国建设银行"
		},
		{
			value: "BC",
			label: "中国银行"
		},
		{
			value: "ABC",
			label: "中国农业银行"
		},
		{
			value: "ICBC",
			label: "中国工商银行"
		},
		{
			value: "PSBC",
			label: "中国邮政储蓄"
		},
		{
			value: "CEBB",
			label: "中国光大银行"
		},
		{
			value: "CGB",
			label: "广发银行"
		},
		{
			value: "CMB",
			label: "招商银行"
		},
		{
			value: "CMBC",
			label: "民生银行"
		},
		{
			value: "CDB",
			label: "国家开发银行"
		},
		{
			value: "CIB",
			label: "兴业银行"
		},
		{
			value: "BCM",
			label: "交通银行"
		},
		{
			value: "HXB",
			label: "华夏银行"
		},
		{
			value: "SPDB",
			label: "浦发银行"
		},
		{
			value: "HSBC",
			label: "汇丰银行"
		},
		{
			value: "Other",
			label: "其他"
		}
	];

	/*用户账号状态*/
	Hualala.TypeDef.UserStatus = [
		{value : 0, label : "停用"},
		{value : 1, label : "正常"}
	];

	Hualala.TypeDef.MCMDataSet = {
		/*礼品类型*/
		GiftTypes : [
			{value : '', label : "全部"},
			{value : 10, label : "电子代金券", type : 'voucher', unit : '元', bgColor : "#ff6600",
				 navs : [
				 	{label : "发送数", value : "tab_send"},
				 	{label : "使用数", value : "tab_used"},
				 	{label : "赠送", value : "tab_give"},
				 	{label : "支付", value : "tab_pay"},
				 	{label : "网上出售", value : "tab_onlinesale"}
				 ]
			},
			// {value : 20, label : "菜品优惠券"},
			// {value : 30, label : "实物礼品"},
			{value : 40, label : "会员充值", type : 'card', unit : '元', bgColor : "#cc0000",
				navs : [
					{label : "发送数", value : "tab_send"},
				 	{label : "使用数", value : "tab_used"}
				]
			},
			{value : 42, label : "会员积分", type : 'point', unit : '点', bgColor : "#009999",
				navs : [
					{label : "发送数", value : "tab_send"},
				 	{label : "使用数", value : "tab_used"}
				]
			}
		],
		/*礼品发出方式*/
		GiftDistributeTypes : [
			{value : "", label : "全部"},
			{value : "10", label : "消费返券", include : true},
			{value : "20", label : "摇奖活动", include : true},
			{value : "30", label : "积分摇奖", include : true},
			{value : "40", label : "积分兑换", include : true},
			{value : "50", label : "订单摇奖"},
			{value : "60", label : "免费领取", include : true},
			{value : "70", label : "商家赠送", include : true},
			{value : "80", label : "商家支付", include : true},
			{value : "90", label : "商家卖出", include : true},
			{value : "91", label : "会员摇奖"},
			{value : "92", label : "免费领取"},
			{value : "93", label : "积分兑换"},
			{value : "94", label : "参与活动"},
			{value : "95", label : "有奖竞猜"},
			{value : "96", label : "套餐充值"}
		],
		/*礼品使用状态*/
		GiftStatus : [
			{value : "", label : "全部"},
			{value : "1", label : "可使用"},
			{value : "2", label : "已使用"},
			{value : "3", label : "已过期"},
			{value : "4", label : "已退订"}
		],
		/*礼品业务支持*/
		GiftSupportOrderTypes : [
			{value : 2, label : "全部支持"},
			{value : 0, label : "堂食"},
			{value : 1, label : "外送"}
		],
		/*礼品使用时段限制*/
		GiftUsingTimeTypes : [
			{value : "1", label : "早餐"},
			{value : "2", label : "午餐"},
			{value : "3", label : "下午茶"},
			{value : "4", label : "晚餐"},
			{value : "5", label : "夜宵"}
		],
		/*实物礼品派发状态*/
		GiftIsSended : [
			{value : "0", label : "待发送"},
			{value : "1", label : "已发送"}
		],
		/*消费金额限制类型*/
		GiftMonetaryLimitTypes : [
			{value : "0", label : "不限"},
			{value : "1", label : "每满"},
			{value : "2", label : "满"}
		],
		/*电子礼品类，是否支持线下使用*/
		GiftIsOfflineUsing : [
			{value : "0", label : "不支持"},
			{value : "1", label : "支持"}
		],
		/*电子礼品类，节假日使用限制*/
		GiftIsHolidayUsing : [
			{value : "0", label : "不限制"},
			{value : "1", label : "不含节假日"},
			{value : "2", label : "仅节假日"}
		],
		/*电子礼品类，菜品范围限制*/
		GiftFoodScope : [
			{value : "0", label : "不限"},
			{value : "1", label : "仅可打折菜品"}
		],
		/*礼品审核状态*/
		GiftAuditStatus : [
			{value : "0", label : "未提交审核"},
			{value : "1", label : "审核未通过"},
			{value : "2", label : "审核通过"},
			{value : "3", label : "审核中"}
		],
		/*营销活动类型定义*/
		EventTypes : [
			{value : "", label : "全部"},
			{value : "20", label : "摇奖活动", type : "lucky-joy", bgColor : "rgb(204, 0, 0)"},
			{value : "21", label : "免费领取", type : "free-get", bgColor : "rgb(102, 153, 0)"},
			{value : "22", label : "报名活动", type : "apply-evt", bgColor : "rgb(102, 51, 102)"},
			{value : "30", label : "积分兑换", type : "credit-exchange", bgColor : "rgb(0, 153, 204)"},
			{value : "40", label : "营销红包", type : "marketing-redenvelope", bgColor : "rgb(156, 111, 109)"},
			{value : "41", label : "消费红包", type : "consume-redenvelope", bgColor : "rgb(199, 148, 148)"}
		],
		/*营销活动摇奖方式*/
		EventLuckJoyTypes : [
			{value : "0", label : "大转盘"},
			{value : "1", label : "老虎机"},
			{value : "2", label : "刮刮卡"}
		],
		/*营销活动用户参与终端限制*/
		EventJoinClientTypes : [
			{value : "0", label : "不限制"},
			{value : "1", label : "仅限PC客户端"},
			{value : "2", label : "仅限手机客户端"},
			{value : "3", label : "仅限Pad客户端"},
			{value : "4", label : "仅限手机和Pad客户端"}
		],
		/*营销活动用户参与范围*/
		EventJoinUserRange : [
			{value : "0", label : "不限制"},
			{value : "1", label : "仅限绑定手机号码的用户"},
			{value : "2", label : "仅限在本集团订过餐的用户"}
		],
		/*营销活动开关*/
		EventIsActive : [
			{value : "", label : "不限"},
			{value : "0", label : "未启用"},
			{value : "1", label : "已启用"}
		],
		/*营销活动状态定义*/
		EventStatus : [

		],
		EventCardLevels : [
			{value : "-1", label : "所有顾客参与（含非会员）"},
			{value : "0", label : "仅会员"}
		],
		EventCountCycleDays : [
			{value : 0, label : "不限次数"},
			{value : 1, label : "限制次数"},
			{value : 2, label : "限制参与次数的周期"}
		],
		IsVIPBirthdayMonth : [
			{value : 0, label : "不限制"},
			{value : 1, label : "仅本月生日的会员可参与"}
		],
		WinTypes : [
			{value : '', label : "不限"},
			{value : '0', label : "未中奖"}
		],
		JoinTypes : [
			{value : '', label : "不限"},
			{value : '0', label : "未入围"},
			{value : '1', label : "已入围"}
		]

	};

	

    Hualala.TypeDef.CRM = {
        //会员来源类型
        sourceType: {
            '10': 'WEB网站',
            '12': 'APP客户端',
            '14': '触屏版',
            '20': '店内',
            '22': '原会员导入',
            '30': '微信',
            '40': '淘宝',
            '50': '百度'
        },
        //会员来源途径
        sourceWay: { '0': '线下', '1': '线上' },
        transWay: { '0': '线下', '1': '线上' },
        //会员卡状态类型
        cardStatus: {
            '10': '正常',
            '20': '挂失中',
            '30': '冻结',
            '40': '注销'
        },
        //会员性别类型
        customerSex: { '0': '女', '1': '男', '2': '未知' },
        //会员交易类型
        transType: {
            '10': '初始转入', 
            '20': '储值', 
            '30': '消费', 
            '50': '活动赠积分', 
            '60': '积分兑换', 
            '70': '积分清零', 
            '80': '活动赠余额', 
            '90': '消费撤销'
        },
        //会员活动类型
        eventWay: {
            '20': '摇奖', 
            '21': '领取', 
            '22': '报名', 
            '24': '有奖竞答', 
            '30': '积分兑换'
        },
        //会员优惠券获取方式
        getWay: {
            '10': '消费返券',
            '20': '摇奖活动', 
            '30': '积分摇奖', 
            '40': '积分兑换', 
            '50': '订单摇奖',
            '60': '免费领取',
            '70': '商家赠送',
            '80': '商家支付',
            '90': '换卡转入 ',
            '91': '会员摇奖',
            '92': '免费领取',
            '93': '积分兑换',
            '94': '参与活动',
            '95': '有奖竞猜',
            '96': '套餐充值',  
            '100': '批量导入'
        },
        //会员优惠券状态
        giftStatus: { '1': '未使用', '2': '已使用', '3': '已过期', '4': '已退订' },
        //会员卡日志类型
        logType: {
            '0': '其他', 
            '10': '挂失', 
            '11': '解除挂失', 
            '20': '冻结', 
            '21': '解冻', 
            '30': '注销', 
            '31': '激活', 
            '40': '卡遗损补办', 
            '41': '换手机号', 
            '42': '补办实体卡', 
            '50': '转让', 
            '60': '升级', 
            '61': '降级'
        }
    }


})(jQuery);











