"use strict";(self.webpackChunktutor_finder_app=self.webpackChunktutor_finder_app||[]).push([[472],{5472:(J,c,s)=>{s.r(c),s.d(c,{LoginModule:()=>C});var d=s(8583),l=s(630),r=s(665),m=s(8049),t=s(639),p=s(6215),f=s(8002),h=s(2340),g=s(1841);let v=(()=>{class e{constructor(n){this.http=n,this.value='{"currentUser":"test"}',this.currentUserSubject=new p.X(JSON.parse(this.value)),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}login(n,o){const u={password:n,phone:o};return console.log("payload",u),this.http.post(`${h.N.apiUrl}/api/authenticate`,u).pipe((0,f.U)(a=>(console.log("user service",a),this.currentUserSubject.next(a),a)))}logout(){localStorage.removeItem("currentUser")}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Z(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Phone number is required"),t.qZA())}function U(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,Z,2,0,"div",17),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.phone.errors.required)}}function b(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function T(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,b,2,0,"div",17),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors.required)}}function A(e,i){1&e&&t._UZ(0,"span",18)}function L(e,i){if(1&e&&(t.TgZ(0,"div",19),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.error)}}const q=[{path:"",component:(()=>{class e{constructor(n,o,u,a,I){this.formBuilder=n,this.route=o,this.router=u,this.authenticationService=a,this.reactiveFormsModule=I,this.loading=!1,this.submitted=!1,this.returnUrl="/home",this.error="",this.loginForm=this.formBuilder.group({password:["",r.kI.required],phone:["",r.kI.compose([r.kI.required,r.kI.minLength(5),r.kI.maxLength(10)])]}),this.authenticationService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/home",console.log("return Url",this.returnUrl)}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,(!this.loginForm||!this.loginForm.invalid)&&(this.loading=!0,this.authenticationService.login(this.f.password.value,this.f.phone.value).pipe((0,m.P)()).subscribe(n=>{console.log("daat",this.returnUrl),this.router.navigate([this.returnUrl]),this.loading=!1},n=>{this.error=n,this.loading=!1}))}onSignup(){this.router.navigate(["/registration"])}clickReadme(){this.router.navigate(["/readme"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.qu),t.Y36(l.gz),t.Y36(l.F0),t.Y36(v),t.Y36(r.UX))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:36,vars:6,consts:[[1,"col-md-6","offset-md-3","mt-5"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],[1,"required-asterisk"],["type","text","formControlName","phone",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"btn","btn-secondary",3,"click"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h4",2),t._uU(3,"Tutor Finder Login page"),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"Phone Number"),t.TgZ(9,"span",7),t._uU(10,"*"),t.qZA(),t.qZA(),t._UZ(11,"input",8),t.YNc(12,U,2,1,"div",9),t.qZA(),t.TgZ(13,"div",5),t.TgZ(14,"label",10),t._uU(15,"Password"),t.TgZ(16,"span",7),t._uU(17,"*"),t.qZA(),t.qZA(),t._UZ(18,"input",11),t.YNc(19,T,2,1,"div",9),t.qZA(),t.TgZ(20,"button",12),t.YNc(21,A,1,0,"span",13),t._uU(22," Login "),t.qZA(),t._uU(23," \xa0\xa0 "),t.TgZ(24,"button",14),t.NdJ("click",function(){return o.onSignup()}),t._uU(25," Sign Up "),t.qZA(),t.YNc(26,L,2,1,"div",15),t.qZA(),t.TgZ(27,"div"),t.TgZ(28,"label"),t._uU(29,"Test login"),t.qZA(),t.TgZ(30,"label"),t._uU(31," username : :91280864"),t.qZA(),t.TgZ(32,"label"),t._uU(33,"password::test1234"),t.qZA(),t.qZA(),t.TgZ(34,"button",14),t.NdJ("click",function(){return o.clickReadme()}),t._uU(35," Readme "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("formGroup",o.loginForm),t.xp6(7),t.Q6J("ngIf",o.submitted&&o.f.phone.errors),t.xp6(7),t.Q6J("ngIf",o.submitted&&o.f.password.errors),t.xp6(1),t.Q6J("disabled",o.loading),t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(5),t.Q6J("ngIf",o.error))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,d.O5],encapsulation:2}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,S,r.UX,g.JF]]}),e})()}}]);