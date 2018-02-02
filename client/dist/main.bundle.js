webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var post_component_1 = __webpack_require__("../../../../../src/app/post/post.component.ts");
var post_list_component_1 = __webpack_require__("../../../../../src/app/post/post-list/post-list.component.ts");
var post_new_component_1 = __webpack_require__("../../../../../src/app/post/post-new/post-new.component.ts");
var post_show_component_1 = __webpack_require__("../../../../../src/app/post/post-show/post-show.component.ts");
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var user_show_component_1 = __webpack_require__("../../../../../src/app/user/user-show/user-show.component.ts");
var answer_new_component_1 = __webpack_require__("../../../../../src/app/post/answer-new/answer-new.component.ts");
var routes = [
    { path: 'user', component: user_component_1.UserComponent, children: [
            { path: 'new', component: user_new_component_1.UserNewComponent },
            { path: 'show/:id', component: user_show_component_1.UserShowComponent }
        ] },
    { path: 'dashboard', component: post_component_1.PostComponent, children: [
            { path: '', component: post_list_component_1.PostListComponent },
        ] },
    { path: '', pathMatch: 'full', component: user_component_1.UserComponent, children: [
            { path: '', component: user_new_component_1.UserNewComponent }
        ] },
    { path: 'post', component: post_component_1.PostComponent, children: [
            // localhost: 8000/post
            { path: '', pathMatch: 'full', component: post_list_component_1.PostListComponent },
            // localhost: 8000/post/new
            { path: 'new', component: post_new_component_1.PostNewComponent },
            // localhost: 8000/post/show
            { path: 'show/:id', component: post_show_component_1.PostShowComponent }
        ] },
    { path: 'post/:id/answer', component: answer_new_component_1.AnswerNewComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser(function (user) {
            console.log(_this._userService.currentUser);
            if (!user) {
                _this._route.navigateByUrl('/');
                return;
            }
            _this._route.navigateByUrl('/dashboard');
        }, console.log("hello"));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
// Routing
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
// Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
// Post
var post_component_1 = __webpack_require__("../../../../../src/app/post/post.component.ts");
var post_new_component_1 = __webpack_require__("../../../../../src/app/post/post-new/post-new.component.ts");
var post_list_component_1 = __webpack_require__("../../../../../src/app/post/post-list/post-list.component.ts");
var answer_new_component_1 = __webpack_require__("../../../../../src/app/post/answer-new/answer-new.component.ts");
// User
var user_component_1 = __webpack_require__("../../../../../src/app/user/user.component.ts");
var user_new_component_1 = __webpack_require__("../../../../../src/app/user/user-new/user-new.component.ts");
var post_show_component_1 = __webpack_require__("../../../../../src/app/post/post-show/post-show.component.ts");
var user_logout_component_1 = __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.ts");
// Services
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/post/answer.service.ts");
var user_show_component_1 = __webpack_require__("../../../../../src/app/user/user-show/user-show.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                post_component_1.PostComponent,
                post_new_component_1.PostNewComponent,
                post_list_component_1.PostListComponent,
                user_component_1.UserComponent,
                user_new_component_1.UserNewComponent,
                user_logout_component_1.UserLogoutComponent,
                post_show_component_1.PostShowComponent,
                answer_new_component_1.AnswerNewComponent,
                user_show_component_1.UserShowComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                post_service_1.PostService,
                user_service_1.UserService,
                answer_service_1.AnswerService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/post/answer-new/answer-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/answer-new/answer-new.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n\n<p><a [routerLink]=\"['/dashboard']\" >Home</a></p>\n\n\n<div id = \"new-question\">\n\t<h3>New Answer</h3>\n\n<form (submit)=\"onSubmit($event); \n\tcreateAnswer.resetForm()\" \n\t#createAnswer=\"ngForm\">\n<p>\n\tAnswer: <input \n\tid = \"padded\"\n\tname=\"content\"\n\trequired\n\tminlength=\"1\"\n\tmaxlength=\"20\"\n\t[(ngModel)]=\"answer.content\"\n\t#content=\"ngModel\" />\n\n\t{{ answer.errors | json }}\n</p>\n<p>\n\tDetails (optional): <textarea\n\tid = \"padded\"\n\tname=\"details\"\n\tminlength=\"1\"\n\tmaxlength=\"300\"\n\t[(ngModel)]=\"answer.details\"\n\t#details=\"ngModel\" >\n\t\t\n\n\t</textarea>\n\t{{ details.errors | json }}\n</p>\n\t<button type=\"submit\">\n\t\tSubmit Answer\t\n\t</button>\n\t\n</form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/post/answer-new/answer-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var post_1 = __webpack_require__("../../../../../src/app/post/post.ts");
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var answer_service_1 = __webpack_require__("../../../../../src/app/post/answer.service.ts");
var answer_1 = __webpack_require__("../../../../../src/app/post/answer.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AnswerNewComponent = /** @class */ (function () {
    function AnswerNewComponent(_postService, _answerService, _router, _route) {
        var _this = this;
        this._postService = _postService;
        this._answerService = _answerService;
        this._router = _router;
        this._route = _route;
        this.answer = new answer_1.Answer();
        this._router.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
        });
    }
    AnswerNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = new post_1.Post();
        this._postService.retrievePost(this.id, function (post) {
            _this.post = post;
        }, function (err) {
            console.log("error yo");
        });
    };
    AnswerNewComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.answer._post = this.post._id;
        this._answerService.createAnswer(this.answer, function (answer) {
            _this._route.navigateByUrl('/post');
        }, function (err) {
            console.log('error yooo');
        });
    };
    AnswerNewComponent = __decorate([
        core_1.Component({
            selector: 'app-answer-new',
            template: __webpack_require__("../../../../../src/app/post/answer-new/answer-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/answer-new/answer-new.component.css")]
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            answer_service_1.AnswerService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], AnswerNewComponent);
    return AnswerNewComponent;
}());
exports.AnswerNewComponent = AnswerNewComponent;


/***/ }),

/***/ "../../../../../src/app/post/answer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var AnswerService = /** @class */ (function () {
    function AnswerService(_http) {
        this._http = _http;
        this.answers = [];
    }
    AnswerService.prototype.createAnswer = function (answer, callback, errorback) {
        var _this = this;
        this._http.post('/answers', answer).subscribe(function (res) {
            console.log(res.json());
            var answer = res.json();
            _this.answer = answer;
            console.log(answer);
            callback(answer);
        }, function (err) {
            console.log("errorr rback");
            errorback(err.json());
        });
    };
    AnswerService.prototype.retrieveAnswers = function (id, callback, errorback) {
        var _this = this;
        this._http.get('/answers/' + id).subscribe(function (res) {
            var answers = res.json();
            _this.answers = answers;
            callback(answers);
        }, function (err) {
            errorback(err);
        });
    };
    AnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;


/***/ }),

/***/ "../../../../../src/app/post/answer.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "../../../../../src/app/post/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n\n\n<h3 id=\"greeting\">Doctor's Appointments</h3>\n\n<!-- <app-post-new></app-post-new> -->\n<div class='post-list'>\n\t<table id = \"table\">\n\t\t<thead id = \"thead\">\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\tDate\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tTime\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tPatient Name\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tComplain\n\t\t\t\t</th>\n\t\t\t\t<th id = \"delete\">\n\t\t\t\t\t\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let post of posts\">\n\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.date | date: 'longDate' }}<!-- <a [routerLink]=\"['/user', 'show', user._id]\" ></a> -->\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.time }} <!-- {{ post.title }} -->\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post._user.name }} \n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.description }} \n\t\t\t\t\t <!-- {{ post.createdAt | date:'mediumDate'}} -->\n\t\t\t\t</td>\t\t\t\t\n\t\t\t\t<td>\n\t\t\t\t\t<button *ngIf =\"user\" id = \"delete-button\" (click)=\"delete(post._id)\">Cancel</button>\n\t\t\t\t</td>\n\t\t\t</tr>\t\t\t\n\t\t</tbody>\n\t</table>\n\n<button id = \"new_app_route\"\n\t(click)=\"addRoute()\"\n\t>Add New Appointment\n</button>\n</div>\n\n<!-- \t\t<p>Title: {{ post.title }}</p>\n\t\t<p>Content: {{ post.content }}</p>\n\t\t<p>Date: {{ post.updatedAt | date: 'shortTime'}} </p>\n\t\t<p>Author: {{ post.user_id }}</p> -->\n\n<!-- <a [routerLink]=\"['/post', post._id, 'answer']\">answer</a> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/post/post-list/post-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(_route, _postService, _userService) {
        this._route = _route;
        this._postService = _postService;
        this._userService = _userService;
        this.loggedIn = true;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new user_1.User();
        this._postService.retrievePosts(function (posts) {
            _this.posts = posts;
            _this.user = _this._userService.currentUser;
        }, function (err) {
            console.log(err);
        });
        this._userService.retrieveUsers(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
    };
    PostListComponent.prototype.delete = function (id) {
        var _this = this;
        this._postService.deletePost(id, function (post) {
            _this._postService.retrievePosts(function (posts) {
                _this.posts = posts;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    PostListComponent.prototype.addRoute = function () {
        this._route.navigateByUrl('/post/new');
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'app-post-list',
            template: __webpack_require__("../../../../../src/app/post/post-list/post-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post-list/post-list.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            post_service_1.PostService,
            user_service_1.UserService])
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;


/***/ }),

/***/ "../../../../../src/app/post/post-new/post-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post-new/post-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h2>New Appointment</h2>\n<div id = \"new-question\">\n\n<form (submit)=\"onSubmit(); \n\tcreatePost()\" \n\t#createPost=\"ngForm\">\n\t<p>\n\t\tDate: <input \n\t\ttype=\"date\" \n\t\tname=\"date\"\n\t\trequired\n\t\t[(ngModel)]=\"post.date\"\n\t\t#date=\"ngModel\" > \n\n\t\tTime: <input \n\t\ttype=\"time\" \n\t\tname=\"time\"\n\t\trequired\n\t\tmin=\"8:00\"\n\t\tmax=\"17:00\"\n\t\t[(ngModel)]=\"post.time\"\n\t\t#time=\"ngModel\" >\n\t</p>\n\n\t<p>\n\t\tComplain: <textarea\n\t\tname=\"description\"\n\t\trequired\n\t\tminlength=\"10\"\n\t\tmaxlength=\"300\"\n\t\tplaceholder=\"Description\"\n\t\t[(ngModel)]=\"post.description\"\n\t\t#description=\"ngModel\" \n\t\t>\n\t\t</textarea>\n\t</p>\n\t<button id = \"home\"\n\t(click)=\"goHome()\"\n\t>Cancel\n\t</button>\n\t<button type=\"submit\">\n\t\tAdd Appointment\t\n\t</button>\n\n\n<!-- <small [hidden]= \"title.valid || (title.untouched)\">Minimum characters for title is 5.</small> -->\n\n<br>\n\n<small [hidden]= \"description.valid || (description.untouched)\">Minimum characters for description is 10.</small>\n\n\t\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post/post-new/post-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var post_1 = __webpack_require__("../../../../../src/app/post/post.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(_postService, _router, _userService) {
        this._postService = _postService;
        this._router = _router;
        this._userService = _userService;
    }
    PostNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = new post_1.Post();
        this._userService.retrieveUsers(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
    };
    PostNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._postService.createPost(this.post, function (post) {
            // this.post = new Post();  				
            _this._router.navigateByUrl('/dashboard');
        }, function (err) {
            console.log("error");
        });
    };
    PostNewComponent.prototype.goHome = function () {
        this._router.navigateByUrl('/dashboard');
    };
    PostNewComponent = __decorate([
        core_1.Component({
            selector: 'app-post-new',
            template: __webpack_require__("../../../../../src/app/post/post-new/post-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post-new/post-new.component.css")]
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            router_1.Router,
            user_service_1.UserService])
    ], PostNewComponent);
    return PostNewComponent;
}());
exports.PostNewComponent = PostNewComponent;


/***/ }),

/***/ "../../../../../src/app/post/post-show/post-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post-show/post-show.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n\n<p><a [routerLink]=\"['/dashboard']\" >Home</a></p>\n\n<h3>{{ post.title }}</h3>\n<p>{{ post.content }}</p>\n\n<div *ngFor=\"let answer of answers\">\n\t<div>\n\t\t<fieldset>\n\t\t\t<legend>Answer</legend>\n\t\t<p>{{ answer.content }}</p>\n\t\t<p>{{ answer.details }}</p>\n\t\t<p>{{ answer._user.name }}</p>\n\t\t</fieldset>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post/post-show/post-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var post_1 = __webpack_require__("../../../../../src/app/post/post.ts");
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var answer_service_1 = __webpack_require__("../../../../../src/app/post/answer.service.ts");
var PostShowComponent = /** @class */ (function () {
    function PostShowComponent(_postService, _activatedRoute, _answerService) {
        var _this = this;
        this._postService = _postService;
        this._activatedRoute = _activatedRoute;
        this._answerService = _answerService;
        this.answers = [];
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            console.log('params_id', _this.id);
        });
    }
    PostShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.post = new post_1.Post();
        this._postService.retrievePost(this.id, function (post) {
            _this.post = post;
            console.log(post);
        }, function (err) {
            console.log(err.json());
        });
        this._answerService.retrieveAnswers(this.id, function (answers) {
            _this.answers = answers;
            console.log(answers);
        }, function (err) {
            console.log(err.json());
        });
    };
    PostShowComponent = __decorate([
        core_1.Component({
            selector: 'app-post-show',
            template: __webpack_require__("../../../../../src/app/post/post-show/post-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post-show/post-show.component.css")]
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            router_1.ActivatedRoute,
            answer_service_1.AnswerService])
    ], PostShowComponent);
    return PostShowComponent;
}());
exports.PostShowComponent = PostShowComponent;


/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var PostComponent = /** @class */ (function () {
    function PostComponent(_userService) {
        this._userService = _userService;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        core_1.Component({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;


/***/ }),

/***/ "../../../../../src/app/post/post.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var PostService = /** @class */ (function () {
    function PostService(_http) {
        this._http = _http;
        this.answers = [];
        this.posts = [];
        this.posts = [];
    }
    PostService.prototype.createPost = function (post, callback, errorback) {
        var _this = this;
        this._http.post('/posts', post).subscribe(function (res) {
            var post = res.json();
            console.log(post);
            console.log(post._user);
            console.log(post._user.name);
            _this.posts.push(post);
            callback(post);
        }, function (err) {
            errorback(err.json());
        });
    };
    PostService.prototype.retrievePosts = function (callback, errorback) {
        var _this = this;
        this._http.get('/posts').subscribe(function (res) {
            _this.posts = res.json();
            console.log("Lookout!", _this.posts);
            callback(_this.posts);
        }, function (err) {
            errorback(err.json());
        });
    };
    PostService.prototype.retrievePost = function (id, callback, errorback) {
        var _this = this;
        this._http.get('/posts/' + id).subscribe(function (res) {
            var post = res.json();
            _this.post = post;
            console.log(post);
            callback(_this.post);
        }, function (err) {
            errorback(err.json());
        });
    };
    PostService.prototype.createAnswer = function (qid, answer, callback, errorback) {
        var _this = this;
        this._http.post('/posts/' + qid + '/answer', answer).subscribe(function (res) {
            console.log('posting an answer');
            var answer = res.json();
            _this.posts.push(answer);
            callback(answer);
        }, function (err) {
            errorback(err);
        });
    };
    PostService.prototype.retrieveAnswers = function (id, callback, errorback) {
        var _this = this;
        console.log('retrieving answers');
        this._http.get('/posts/' + id + '/answers/').subscribe(function (res) {
            var answers = res.json();
            _this.answers = answers;
            callback(answers);
        }, function (err) {
            errorback(err);
        });
    };
    PostService.prototype.deletePost = function (id, callback, errorback) {
        this._http.delete('/posts/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            errorback(err.json());
        });
    };
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;


/***/ }),

/***/ "../../../../../src/app/post/post.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
        this.answers = [];
    }
    return Post;
}());
exports.Post = Post;


/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<button id = \"logout-button\"\n\t(click)=\"logout()\"\n\t>Logout\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-logout/user-logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var UserLogoutComponent = /** @class */ (function () {
    function UserLogoutComponent(_route, _userService) {
        this._route = _route;
        this._userService = _userService;
    }
    UserLogoutComponent.prototype.ngOnInit = function () {
    };
    UserLogoutComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            console.log("TEST LOGOUT");
            console.log(res);
            _this._route.navigateByUrl('/');
        }, console.log("ok"));
    };
    UserLogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-user-logout',
            template: __webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-logout/user-logout.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], UserLogoutComponent);
    return UserLogoutComponent;
}());
exports.UserLogoutComponent = UserLogoutComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<h1>Doctor's Appointments</h1>\n<div class=\"user-new-div\">\n\t<form \n\t(submit)=\"onSubmit(); createUser.resetForm()\" \n\t#createUser=\"ngForm\"\n\t>\n\t<label>Name:</label>\n\t<input\n\t\ttype=\"text\"\n\t\tname=\"name\"\n\t\trequired\n\t\tminlength=\"1\"\n\t\tmaxlength=\"30\"\n\t\t[(ngModel)]=\"user.name\"\n\t\t#name=\"ngModel\"\n\t\t/>\n\n\t\t<small\n\t\t\tclass=\"errors\"\n\t\t\t[hidden]=\"name.valid || (name.untouched && !createUser.submitted)\"\n\t\t\t>\n\t\t\tName is required. (Minimum character length of 1).\n\t\t</small>\n\t\t\n\t\t<button\n\t\t\tclass=\"user-new-submit\"\n\t\t\t[disabled]=\"!createUser.valid\"\n\t\t\t>\n\t\t\tEnter\n\t\t</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-new/user-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(_userService, _route) {
        this._userService = _userService;
        this._route = _route;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
        if (this._userService.currentUser) {
            this._route.navigateByUrl('/dashboard');
        }
    };
    UserNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.createUser(this.user, function (user) {
            _this._route.navigateByUrl('/dashboard');
        }, function (err) {
            console.log(err);
        });
        this.user = new user_1.User();
    };
    UserNewComponent = __decorate([
        core_1.Component({
            selector: 'app-user-new',
            template: __webpack_require__("../../../../../src/app/user/user-new/user-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-new/user-new.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], UserNewComponent);
    return UserNewComponent;
}());
exports.UserNewComponent = UserNewComponent;


/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-logout></app-user-logout>\n\n<p><a [routerLink]=\"['/dashboard']\" >Home</a></p>\n\n<h3>{{ user.name }}'s Bucket List</h3>\n\n<div *ngFor=\"let post of posts\">\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\tCheck?\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tAuthor\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tTitle\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tDescription\n\t\t\t\t</th>\n\t\t\t\t<th>\n\t\t\t\t\tDate\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let post of posts\">\n\t\t\t\t<td>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<input type = \"checkbox\">\n\t\t\t\t\t</form>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<a [routerLink]=\"['/user', 'show', user._id]\" >{{ post._user.name }}</a>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.title }}\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.description }}\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t{{ post.createdAt | date:'mediumDate'}}\n\t\t\t\t</td>\t\t\t\t\t\n\t\t\t\t<td>\n\t\t\t\t\t<button id = \"delete-button\" (click)=\"delete(post._id)\">delete</button>\n\t\t\t\t</td>\n\t\t\t</tr>\t\t\t\n\t\t</tbody>\n\t</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-show/user-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var post_service_1 = __webpack_require__("../../../../../src/app/post/post.service.ts");
var user_1 = __webpack_require__("../../../../../src/app/user/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserShowComponent = /** @class */ (function () {
    function UserShowComponent(_postService, _activatedRoute, _userService) {
        var _this = this;
        this._postService = _postService;
        this._activatedRoute = _activatedRoute;
        this._userService = _userService;
        this.users = [];
        this._activatedRoute.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            console.log('params_id', _this.id);
        });
    }
    UserShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new user_1.User();
        this._userService.getCurrentUser(function (user) {
            _this.user = user;
            console.log(user.name);
        }, function (err) {
            console.log(err.json());
        });
    };
    UserShowComponent = __decorate([
        core_1.Component({
            selector: 'app-user-show',
            template: __webpack_require__("../../../../../src/app/user/user-show/user-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-show/user-show.component.css")]
        }),
        __metadata("design:paramtypes", [post_service_1.PostService,
            router_1.ActivatedRoute,
            user_service_1.UserService])
    ], UserShowComponent);
    return UserShowComponent;
}());
exports.UserShowComponent = UserShowComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.users = [];
    }
    UserService.prototype.createUser = function (user, callback, errorback) {
        var _this = this;
        this._http.post('/users', user).subscribe(function (res) {
            var user = res.json();
            console.log("Hi Error User!");
            _this.currentUser = user;
            callback(_this.getCurrentUser);
        }, function (err) {
            errorback();
        });
    };
    UserService.prototype.getCurrentUser = function (callback, errorback) {
        var _this = this;
        this._http.get('/sessions').subscribe(function (res) {
            var user = res.json();
            if (user) {
                _this.currentUser = user;
            }
            // console.log(user.name)
            callback(user);
        }, function (err) {
            errorback(err);
        });
    };
    UserService.prototype.retrieveUsers = function (callback, errorback) {
        var _this = this;
        this._http.get('/users').subscribe(function (res) {
            _this.users = res.json();
            console.log("Lookout!", _this.users);
            callback(_this.users);
        }, function (err) {
            errorback(err.json());
        });
    };
    UserService.prototype.logout = function (callback, errorback) {
        var _this = this;
        this._http.delete('/sessions').subscribe(function (res) {
            _this.currentUser = null;
            callback(res.json());
        }, function (err) {
            errorback(err);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.name = '';
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map