//
//  HomeViewController.m
//  HBuilder
//
//  Created by Li Noah on 2019/8/15.
//  Copyright © 2019 DCloud. All rights reserved.
//

#import "HomeViewController.h"
#import "ViewController.h"
#import "WebViewController.h"

@interface HomeViewController ()

@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(100, 100, 200, 45)];
    self.view.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:button];
    button.center = self.view.center;
    [button setTitle:@"进入uni 页面" forState: UIControlStateNormal];
    [button addTarget:self action:@selector(onButtonClick) forControlEvents:UIControlEventTouchUpInside];
    [button setBackgroundColor:[UIColor grayColor]];
    
    UIButton *plugin = [[UIButton alloc] initWithFrame:CGRectMake(100, 200, 200, 45)];
    self.view.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:plugin];
    [plugin setTitle:@"进入5+plugin 页面" forState: UIControlStateNormal];
    [plugin addTarget:self action:@selector(OnPluginButtonClick) forControlEvents:UIControlEventTouchUpInside];
    [plugin setBackgroundColor:[UIColor grayColor]];
    
}

- (void)onButtonClick {
    ViewController *controller = [[ViewController alloc] init];
    [self presentViewController:controller animated:true completion:nil];
}

- (void)OnPluginButtonClick {
    WebViewController *controller = [[WebViewController alloc] init];
    [self presentViewController:controller animated:true completion:nil];
}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
