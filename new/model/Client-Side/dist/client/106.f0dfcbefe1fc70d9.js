"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[106],{106:($,m,o)=>{o.r(m),o.d(m,{AdminModule:()=>O});var i=o(6895),g=o(6150),p=o(6564),d=o(8505),t=o(1571),a=o(4004),f=o(2340),l=o(529);let u=(()=>{class r{constructor(e){this.http=e,this.host=f.N.apiUrl}getDashboardDetails(){return this.http.get(`${this.host}/admin/user-stats`).pipe((0,a.U)(e=>e.data))}getProRequestUsers(){return this.http.get(`${this.host}/admin/pro-request/users`).pipe((0,a.U)(e=>e.data.users))}activateProRequestUser(e){return this.http.patch(`${this.host}/admin/pro-request/user/${e}/activate`,{}).pipe((0,a.U)(n=>n.data))}getWithdrawRequests(){return this.http.get(`${this.host}/admin/pro-request/withdraw/requests`).pipe((0,a.U)(e=>e.data))}acceptWithdrawRequests(e){return this.http.patch(`${this.host}/admin/pro-request/withdraw/requests/${e}`,{}).pipe((0,a.U)(n=>n.data))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(l.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function v(r,s){if(1&r&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),t._uU(5,"Subscriber"),t.qZA(),t.TgZ(6,"h6",6),t._uU(7,"Number of users subscribed"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA()()(),t.TgZ(10,"div",3)(11,"div",4)(12,"h5",5),t._uU(13,"Pro Users"),t.qZA(),t.TgZ(14,"h6",6),t._uU(15,"Number of pro users"),t.qZA(),t.TgZ(16,"p",7),t._uU(17),t.qZA()()(),t.TgZ(18,"div",3)(19,"div",4)(20,"h5",5),t._uU(21,"Pro Requests"),t.qZA(),t.TgZ(22,"h6",6),t._uU(23,"Number of pro requests"),t.qZA(),t.TgZ(24,"p",7),t._uU(25),t.qZA()()()(),t.TgZ(26,"div",8)(27,"div",9),t._UZ(28,"canvas",10),t.qZA()(),t.BQk()),2&r){const e=s.ngIf,n=t.oxw();t.xp6(9),t.Oqu(e.subscriber),t.xp6(8),t.Oqu(e.proUsers),t.xp6(8),t.Oqu(e.proRequest),t.xp6(3),t.Q6J("data",n.pieChartData)("type",n.pieChartType)("options",n.pieChartOptions)("plugins",n.pieChartPlugins)}}let Z=(()=>{class r{constructor(e){this.adminService=e,this.stats$=null,this.pieChartOptions={responsive:!0,plugins:{legend:{display:!0,position:"top"}}},this.pieChartData={labels:["Subscribers","Pro Users","Pro Requests"],datasets:[{data:[0,0,0]}]},this.pieChartType="pie",this.pieChartPlugins=[]}ngOnInit(){this.stats$=this.adminService.getDashboardDetails().pipe((0,d.b)(e=>{this.pieChartData.datasets[0]={data:[e.subscriber,e.proUsers,e.proRequest]}}))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dashboard"]],viewQuery:function(e,n){if(1&e&&t.Gf(p.jh,5),2&e){let c;t.iGM(c=t.CRH())&&(n.chart=c.first)}},decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row"],[1,"col","m-2","card","text-bg-dark","text-center"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"row","my-4"],[1,"col-12","col-lg-5","col-md-6"],["baseChart","",3,"data","type","options","plugins"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,29,7,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.stats$)))},dependencies:[i.O5,p.jh,i.Ov]}),r})();var _=o(5226),q=o.n(_);function U(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"h5",6),t._uU(3),t.qZA(),t.TgZ(4,"h6",7),t._uU(5),t.ALo(6,"titlecase"),t.qZA(),t.TgZ(7,"p",8),t._uU(8),t.qZA(),t.TgZ(9,"a",9),t.NdJ("click",function(){const h=t.CHM(e).$implicit,I=t.oxw(2);return t.KtG(I.activateUser(h._id))}),t._uU(10,"Activate"),t.qZA()()()}if(2&r){const e=s.$implicit;t.xp6(3),t.Oqu(e.username),t.xp6(2),t.Oqu(t.lcZ(6,3,e.provider)),t.xp6(3),t.Oqu(e.email)}}function A(r,s){if(1&r&&(t.ynx(0),t.TgZ(1,"div",2),t.YNc(2,U,11,5,"div",3),t.qZA(),t.BQk()),2&r){const e=s.ngIf;t.xp6(2),t.Q6J("ngForOf",e)}}function R(r,s){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",7),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit,h=t.oxw(2);return t.KtG(h.approveRequest(c._id))}),t._uU(2,"Approve"),t.qZA(),t.BQk()}}function b(r,s){1&r&&(t.TgZ(0,"small"),t._uU(1,"Approved"),t.qZA())}function T(r,s){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,R,3,0,"ng-container",5),t.YNc(7,b,2,0,"ng-template",null,6,t.W1O),t.qZA()()),2&r){const e=s.$implicit,n=t.MAs(8);t.xp6(2),t.Oqu(e.orderNo),t.xp6(2),t.Oqu(e.amount),t.xp6(2),t.Q6J("ngIf",!e.isApproved)("ngIfElse",n)}}function w(r,s){if(1&r&&(t.ynx(0),t.TgZ(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Withdraw Requests"),t.qZA()()(),t.TgZ(5,"table",3)(6,"thead")(7,"th"),t._uU(8,"Request Id"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Amount"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Action"),t.qZA()(),t.TgZ(13,"tbody"),t.YNc(14,T,9,4,"tr",4),t.qZA()(),t.BQk()),2&r){const e=s.ngIf;t.xp6(14),t.Q6J("ngForOf",e)}}const x=[{path:"dashboard",component:Z},{path:"pre-request",component:(()=>{class r{constructor(e){this.adminService=e}ngOnInit(){this.getUsers()}getUsers(){this.proUsers$=this.adminService.getProRequestUsers()}activateUser(e){this.adminService.activateProRequestUser(e).pipe((0,d.b)(n=>{q().fire({icon:"success",title:"Activated successfully",showConfirmButton:!1,timer:1500}).then(()=>{this.getUsers()})})).subscribe()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-pro-request"]],decls:3,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"row","g-6"],["class","col-4 m-2 card text-bg-dark",4,"ngFor","ngForOf"],[1,"col-4","m-2","card","text-bg-dark"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,A,3,1,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.proUsers$)))},dependencies:[i.sg,i.O5,i.Ov,i.rS]}),r})()},{path:"withdraw-request",component:(()=>{class r{constructor(e){this.adminService=e}ngOnInit(){this.updateRequest()}updateRequest(){this.withdrawRequest$=this.adminService.getWithdrawRequests()}approveRequest(e){this.adminService.acceptWithdrawRequests(e).pipe((0,d.b)(()=>{q().fire({icon:"success",title:"Request Accepted",showConfirmButton:!1,timer:1500}),this.updateRequest()})).subscribe()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-pro-user-withdraw-request"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"row"],[1,"col-12"],[1,"table","table-dark","table-striped-columns"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["approved",""],[1,"btn","btn-primary",3,"click"]],template:function(e,n){1&e&&(t.YNc(0,w,15,1,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.withdrawRequest$))},dependencies:[i.sg,i.O5,i.Ov]}),r})()},{path:"",pathMatch:"full",redirectTo:"dashboard"}];let y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(x),g.Bz]}),r})();var P=o(9532);let O=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[{provide:l.TP,useClass:P.z,multi:!0},u],imports:[i.ez,p.vQ,l.JF,y]}),r})()}}]);