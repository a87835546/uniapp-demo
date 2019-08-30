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

