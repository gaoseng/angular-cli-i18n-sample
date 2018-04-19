紧接着开始我们关于i18n解决方法。
这个文件目录底下输入命令来安装ng2-translate：

npm install  ng2-translate            --save
npm install  @ngx-translate/core         
npm install  @ngx-translate/http-loader 
然后打开我们的文件在一个文件名为assets底下新建一个文件夹名字叫i18n，assets在文件src里面，然后文件夹里面再创建两个json文件，名字分别为“en.json”和“zh-CN.json”，分别代表英文和中文（记得编辑器生成后改编码utf-8，不然之后浏览器显示中文会乱码）。

en.json：

{
    "app":{
        "label":"english"
    }
}
zh-CN.json:

{
    "app":{
        "label":"中文"
    }
}
然后在打开app文件，在 app.module.ts 中添加以下代码：

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';


export function HttpLoaderFactory(http:HttpClient){
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


然后在app.component.ts文件里面：添加一下代码：

import {TranslateService} from 'ng2-translate';

export class AppComponent {
    getLangs:any[];  //定义一个数组
    constructor(private translate: TranslateService) {
    //添加语言支持
    }
    ngOnInit(){
        //下拉按钮的值
        this.getLangs = [
            {label:'中文',value:'zh-CN'},
            {label:'英语',value:'en'}
        ];
        //添加语言
        this.translate.addLangs(['zh-CN', 'en']);

        //设置默认语言
        this.translate.setDefaultLang('zh-CN');

        //获取当前浏览器环境的语言比如en、zh-CN
        let broswerLang = this.translate.getBrowserLang();
        
        //使用语言
        this.translate.use(broswerLang.match(/en|zh-CN/) ? broswerLang : 'zh-CN');    
    }

    changeLang(index) {
         this.translate.use(index);
    }
    
      title = 'angular-Translate';
}


最后html代码呈上：

<div style="text-align:center">
    <h1>
        Welcome to {{title}}!
    </h1>
  </div>
  <div class="language">{{ 'app.label' | translate }}</div>
  <div>
    <select #langSelect (change)="changeLang($event.target.value)" class="selectBtn">
          <option *ngFor="let lang of getLangs" [value]="lang.value">{{lang.label}}</option>
    </select>
</div>


最后一步：
输入指令

ng serve //启动服务
