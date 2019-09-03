1. 导入项目中的文件
	InvoiceSDK.frameWork
2. 引入发票管理的SDK头文件
	#import <InvoiceSDK/InvoiceManager.h>
3. 入参说明
		InvoiceModel
		int type 类型 2支付宝 1 微信 (必填)
		NSString *weixinId  微信id （必填	）
		NSString * cardSign  签名 （必填）
		NSString * nonceStr 随机字符串
		NSString * timestamp unix 十位时间戳 
		NSString * signType 加密方式 SHA1

4. 调用方法
	if([InvoiceManager respondsToSelector:@selector(clickWeChatInvoiceWithReq:)]){
        InvoiceModel * model = [[InvoiceModel alloc] init];
        model.weixinId = @"wx57f8ea9fb25ce3fb";
        [[InvoiceManager shareInstance] clickWeChatInvoiceWithReq:model getResult:^(NSArray * _Nonnull cards) {
            NSLog(@"%@",cards);
        }];
    }
	cards 就是发票的详情数组
		数组中的每个对象的值
				参数	类型	是否必填	描述
				fee	Int	是	发票加税合计金额，以分为单位
				title	String	是	发票的抬头
				billing_time	Int	是	开票时间，为十位时间戳（utc+8）
				billing_no	String	是	发票代码
				billing_code	String	是	发票号码
				info	List	否	商品信息结构，见下方说明
				fee_without_tax	Int	是	不含税金额，以分为单位
				tax	Int	是	税额,以分为单位
				pdf_url	String	是	这张发票对应的PDF_URL
				trip_pdf_url	String	否	其它消费凭证附件对应的URL，如行程单、水单等
				reimburse_status	String	是	发票报销状态，
				check_code	String	是	校验码（必填）
				buyer_number	String	否	购买方纳税人识别号（选填）
				buyer_address_and_phone	String	否	购买方地址、电话（选填）
				buyer_bank_account	String	否	购买方开户行及账号（选填）
				seller_number	String	否	销售方纳税人识别号（选填）
				seller_address_and_phone	String	否	销售方地址、电话（选填）
				seller_bank_account	String	否	销售方开户行及账号（选填）
				remarks	String	否	备注
				cashier	String	否	收款人，发票左下角处（选填）
				maker	String	否	开票人，发票有下角处（选填）
	调用方法之前的设置如下
	
	在appledelegate中要设置
	[WXApi registerApp:@"wx4a031bd1b0a68fe1”];
	还要设置 url scheme 为 wx4a031bd1b0a68fe1
	wx4a031bd1b0a68fe1为微信的appid根据自己项目设置
	还要设置微信的回调
	[WXApi handleOpenURL:url delegate:self];
	并且在微信回调的代理方法中实现 如下方法
	- (void)onResp:(BaseResp *)resp {
		if ([resp isKindOfClass:[WXChooseInvoiceResp class]]) {
			WXChooseInvoiceResp *invoice =(WXChooseInvoiceResp *) resp;
			 [[InvoiceManager shareInstance] handleApplicationWithCardIdArr:invoice.cardAry];
		}
	}
	
	注意：other Link Flags 中添加-Objc；bitCode关闭NO

