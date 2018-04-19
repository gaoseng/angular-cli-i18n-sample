import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router,NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd) { // 当导航成功结束时执行
        console.log('NavigationEnd:', res);
      }
    })
    // console.log(this.route)
  }

  ngOnInit() {
    // this.router.navigate(['/users', { id: 1, foo: 'foo' }]);
    // console.log(this.router);
    // console.log(this.route)
  }

}
