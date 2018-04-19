import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
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
      console.log(broswerLang)
      
      //使用语言
      this.translate.use(broswerLang.match(/en|zh-CN/) ? broswerLang : 'zh-CN');    
  }

  changeLang(index) {
       this.translate.use(index);
       console.log(this.translate);
  }
  
    title = 'angular-Translate';
}
