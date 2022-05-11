"use strict";(self.webpackChunktutor_finder_app=self.webpackChunktutor_finder_app||[]).push([[214],{8214:(M,m,d)=>{d.r(m),d.d(m,{RegistrationModule:()=>O});var p=d(8583),c=d(630),r=d(665),_=d(8049),t=d(639),g=d(8002),l=d(2340),f=d(1841);let Z=(()=>{class i{constructor(e){this.http=e}addUser(e){const s=this.mapUserData(e);return this.http.post(`${l.N.apiUrl}/api/insert-user-detail`,s).pipe((0,g.U)(n=>n))}getGrades(){return this.http.get(`${l.N.apiUrl}/api/get-grade`).pipe((0,g.U)(e=>e))}getAllSubjects(){return this.http.get(`${l.N.apiUrl}/api/get-subject`).pipe((0,g.U)(e=>e))}getAllRoles(){return this.http.get(`${l.N.apiUrl}/api/get-role`).pipe((0,g.U)(e=>e))}mapUserData(e){let s,n=[];return e.gradeSubjects.forEach(a=>{n.push({grade:a.gradeId,subject:a.subjectName})}),console.log("gradeSubject",n),console.log("request mapp",e),s={firstName:e.firstName,lastName:e.lastName,password:e.password,phoneNumber:e.phoneNumber,email:e.email,addressLine1:e.addressLine1,addressLine2:e.addressLine2,role:e.role.role_id,city:e.city,state:e.state,zipcode:e.zipcode,gradeSubjects:n},s}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(f.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function v(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function h(i,o){if(1&i&&(t.TgZ(0,"div",40),t.YNc(1,v,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required)}}function T(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function q(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1," Phone Number must be at least 10 characters long."),t.qZA())}function b(i,o){if(1&i&&(t.TgZ(0,"div",40),t.YNc(1,T,2,0,"div",41),t.YNc(2,q,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",e.f.password.errors.maxlength)}}function A(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function x(i,o){if(1&i&&(t.TgZ(0,"div",40),t.YNc(1,A,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.firstName.errors.required)}}function N(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"lastName is required"),t.qZA())}function U(i,o){if(1&i&&(t.TgZ(0,"div",40),t.YNc(1,N,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.lastName.errors.required)}}function C(i,o){if(1&i&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.name)}}function R(i,o){if(1&i&&(t.TgZ(0,"option",42),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.description)}}function J(i,o){if(1&i&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.Oqu(e.description)}}function S(i,o){if(1&i&&(t.TgZ(0,"li"),t.TgZ(1,"span",45),t._uU(2),t.qZA(),t.qZA()),2&i){const e=o.$implicit;t.xp6(2),t.AsE("",e.grade," - ",e.subject,"")}}function j(i,o){if(1&i&&(t.TgZ(0,"div",43),t.TgZ(1,"ul",44),t.YNc(2,S,3,2,"li",24),t.qZA(),t.qZA()),2&i){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.gradeSubjectList)}}function w(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function y(i,o){if(1&i&&(t.TgZ(0,"div",46),t.YNc(1,w,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required)}}function L(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function Y(i,o){if(1&i&&(t.TgZ(0,"div",40),t.YNc(1,L,2,0,"div",41),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.password.errors.required)}}function F(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"form",5),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().onSubmit()}),t.TgZ(2,"div",6),t.TgZ(3,"div",6),t.TgZ(4,"label",7),t._uU(5,"Phone Number:"),t.TgZ(6,"span",8),t._uU(7,"*"),t.qZA(),t.qZA(),t._UZ(8,"input",9),t.YNc(9,h,2,1,"div",10),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",11),t._uU(12,"Password:"),t.TgZ(13,"span",8),t._uU(14,"*"),t.qZA(),t.qZA(),t._UZ(15,"input",12),t.YNc(16,b,3,2,"div",10),t.qZA(),t.TgZ(17,"label",13),t._uU(18,"First Name:"),t.TgZ(19,"span",8),t._uU(20,"*"),t.qZA(),t.qZA(),t._UZ(21,"input",14),t.YNc(22,x,2,1,"div",10),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"label",15),t._uU(25,"Last Name:"),t.TgZ(26,"span",8),t._uU(27,"*"),t.qZA(),t.qZA(),t._UZ(28,"input",16),t.YNc(29,U,2,1,"div",10),t.qZA(),t.TgZ(30,"div",6),t.TgZ(31,"label",17),t._uU(32,"Role:"),t.TgZ(33,"span",8),t._uU(34,"*"),t.qZA(),t.qZA(),t.TgZ(35,"select",18),t.TgZ(36,"option"),t._uU(37,"Choose role"),t.qZA(),t.YNc(38,C,2,2,"option",19),t.qZA(),t.qZA(),t.TgZ(39,"div",20),t.TgZ(40,"div",21),t.TgZ(41,"label",17),t._uU(42,"Grades: "),t.TgZ(43,"span",8),t._uU(44,"*"),t.qZA(),t.qZA(),t.TgZ(45,"select",22),t.NdJ("change",function(n){return t.CHM(e),t.oxw().selectGrade(n)}),t.TgZ(46,"option"),t._uU(47,"Choose Grades"),t.qZA(),t.YNc(48,R,2,2,"option",19),t.qZA(),t.qZA(),t.TgZ(49,"div",21),t.TgZ(50,"label",17),t._uU(51,"Subjects: "),t.TgZ(52,"span",8),t._uU(53,"*"),t.qZA(),t.qZA(),t.TgZ(54,"select",23),t.NdJ("change",function(n){t.CHM(e);const a=t.oxw();return a.selectSubject(n,a.selectedGrade)}),t.TgZ(55,"option"),t._uU(56,"Choose Subjects"),t.qZA(),t.YNc(57,J,2,1,"option",24),t.qZA(),t.qZA(),t.YNc(58,j,3,1,"div",25),t.qZA(),t.TgZ(59,"div",6),t.TgZ(60,"label",26),t._uU(61,"Email:"),t.qZA(),t._UZ(62,"input",27),t.qZA(),t.TgZ(63,"div",6),t.TgZ(64,"label",28),t._uU(65,"Address Line 1:"),t.qZA(),t._UZ(66,"input",29),t.YNc(67,y,2,1,"div",30),t.qZA(),t.TgZ(68,"div",6),t.TgZ(69,"label",31),t._uU(70,"Address Line 2:"),t.qZA(),t._UZ(71,"input",32),t.qZA(),t.TgZ(72,"div",6),t.TgZ(73,"label",33),t._uU(74,"City:"),t.TgZ(75,"span",8),t._uU(76,"*"),t.qZA(),t.qZA(),t._UZ(77,"input",34),t.YNc(78,Y,2,1,"div",10),t.qZA(),t.TgZ(79,"div",6),t.TgZ(80,"label",35),t._uU(81,"State:"),t.qZA(),t._UZ(82,"input",36),t.qZA(),t.TgZ(83,"div",6),t.TgZ(84,"label",37),t._uU(85,"Zip Code:"),t.qZA(),t._UZ(86,"input",38),t.qZA(),t.TgZ(87,"button",39),t._uU(88," Register "),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.registrationForm),t.xp6(8),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(6),t.Q6J("ngIf",e.submitted&&e.f.firstName.errors),t.xp6(7),t.Q6J("ngIf",e.submitted&&e.f.lastName.errors),t.xp6(9),t.Q6J("ngForOf",e.roleList),t.xp6(10),t.Q6J("ngForOf",e.gradeList),t.xp6(6),t.Q6J("disabled",e.hideSubjects),t.xp6(3),t.Q6J("ngForOf",e.subjectList),t.xp6(1),t.Q6J("ngIf",!e.hideSubjects),t.xp6(9),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(11),t.Q6J("ngIf",e.submitted&&e.f.password.errors),t.xp6(9),t.Q6J("disabled",e.loading)}}const Q=[{path:"",component:(()=>{class i{constructor(e,s,n,a){this.fb=e,this.route=s,this.router=n,this.registrationService=a,this.loading=!1,this.submitted=!1,this.returnUrl="/login",this.error="",this.loadpage=!1,this.hideSubjects=!0,this.gradeSubjectList=[],this.roleList=[{id:1,name:"student"},{id:2,name:"facilitator"}],this.gradeList=[{id:1,description:"grade1"},{id:2,description:"grade2"},{id:3,description:"grade3"}],this.subjectList=[{id:1,description:"matchs"},{id:2,description:"science"}],this.registrationForm=this.fb.group({firstName:["",r.kI.required],lastName:["",r.kI.required],email:[""],phoneNumber:["",r.kI.required],password:["",r.kI.required,r.kI.maxLength(10)],addressLine1:[""],addressLine2:[""],city:["",r.kI.required],state:[""],zipcode:[""],role:["",r.kI.required],gradeSubjects:[this.gradeSubjectList,r.kI.required],addDynamicElement:this.fb.array([])}),this.selectedGrade=""}ngOnInit(){setTimeout(()=>{this.populateDropdown(),this.loadpage=!0},2e3)}get f(){return this.registrationForm.controls}selectGrade(e){console.log("hello",e.target.value),this.selectedGrade=e.target.value,this.hideSubjects=!1}selectSubject(e,s){const n=this.gradeList.find(u=>u.description===this.selectedGrade),a=this.subjectList.find(u=>u.description==e.target.value);this.gradeSubjectList.push({gradeId:n?n.grade:0,grade:this.selectedGrade,subject:e.target.value,subjectName:a?a.name:""}),this.hideSubjects=!1}onSubmit(){this.submitted=!0,console.log("form values",this.registrationForm.value),this.loading=!0,this.registrationService.addUser(this.registrationForm.value).pipe((0,_.P)()).subscribe(e=>{console.log("daat",this.returnUrl),this.router.navigate([this.returnUrl]),this.loading=!1},e=>{this.error=e,this.loading=!1})}populateDropdown(){this.registrationService.getAllRoles().pipe((0,_.P)()).subscribe(e=>{this.roleList=e,console.log("get sub",e)},e=>{this.error=e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.qu),t.Y36(c.gz),t.Y36(c.F0),t.Y36(Z))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-registration"]],decls:7,vars:1,consts:[[1,"col-md-6","offset-md-3","mt-5"],[1,"card"],[1,"card-header"],["class","card-body",4,"ngIf"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","phoneNumber"],[1,"required-asterisk"],["type","text","formControlName","phoneNumber",1,"form-control"],["style","color: red;",4,"ngIf"],["for","password"],["type","password","formControlName","password","minlength","10","maxlength","10",1,"form-control"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control"],["for","role"],["formControlName","role",1,"form-control"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"form-group","row"],[1,"col-6"],[1,"form-control",3,"change"],[1,"form-control",3,"disabled","change"],[4,"ngFor","ngForOf"],["class","row",4,"ngIf"],["for","email"],["type","text","formControlName","email",1,"form-control"],["for","addressLine1"],["type","text","formControlName","addressLine1",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","addressLine2"],["type","text","formControlName","addressLine2",1,"form-control"],["for","city"],["type","text","formControlName","city",1,"form-control"],["for","State"],["type","text","formControlName","state",1,"form-control"],["for","zipcode"],["type","text","formControlName","zipcode",1,"form-control"],[1,"btn","btn-primary",3,"disabled"],[2,"color","red"],[4,"ngIf"],[3,"ngValue"],[1,"row"],[1,""],[1,"badge"],[1,"invalid-feedback"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h4",2),t.TgZ(3,"u"),t.TgZ(4,"b"),t._uU(5,"Tutor Finder Login page"),t.qZA(),t.qZA(),t.qZA(),t.YNc(6,F,89,13,"div",3),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Q6J("ngIf",s.loadpage))},directives:[p.O5,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wO,r.nD,r.EJ,r.YN,r.Kr,p.sg],styles:[".invalid-feedback[_ngcontent-%COMP%]{font-style:italic;color:red}"]}),i})()}];let I=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Q)],c.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.ez,I,r.UX,f.JF]]}),i})()}}]);