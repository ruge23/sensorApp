webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, deviceMotion) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.deviceMotion = deviceMotion;
        this.ballwidthNumber = 150;
        this.perdio = false;
        /* this.x="-";
        this.y="-"; */
        this.z = "-";
        //this.timeStamp="-";
        this.count = 0;
        this.arranco = false;
        this.color = "";
        this.golpe = "Golpe";
        this.start();
        this.message = "Pica para jugar!";
    }
    /*
    let toast2 = this.toastCtrl.create({
      message: 'Golpear',
      duration: 1000,
      position: 'middle'
    })
    toast2.present(toast2);
      
    */
    HomePage.prototype.showMoveBall = function () {
        if (!this.arranco) {
            this.arranco = true;
            var toast = this.toastCtrl.create({
                message: 'Baja',
                duration: 5000,
                position: 'middle'
            });
            toast.present(toast);
        }
    };
    HomePage.prototype.refresh = function () {
        //console.log('ee!');
        this.count = 0;
        this.color = "primary";
        this.message = "Pica para jugar!";
        this.z = "-";
        this.agrandar();
        this.perdio = false;
        this.arranco = false;
        //this.ballwidthNumber = 0;
        // this.stop();
        this.start();
    };
    HomePage.prototype.sumaPtos = function () {
        this.count += 1;
    };
    HomePage.prototype.start = function () {
        var _this = this;
        this.deviceMotion.getCurrentAcceleration().then(function (acceleration) { return console.log('acc!', acceleration); }, function (error) { return console.log(error); });
        try {
            var option = {
                frequency: 200,
            };
            this.id = this.deviceMotion.watchAcceleration(option).subscribe(function (acc) {
                _this.x = "" + acc.x;
                _this.y = "" + acc.y;
                _this.z = "" + acc.z;
                _this.ballwidthNumber = $(".ball").width();
                if (_this.ballwidthNumber >= 120) {
                    _this.color = "secondary";
                }
                else {
                    _this.color = "danger";
                }
                if (acc.z >= 12) {
                    if (!_this.arranco) {
                        _this.arranco = true;
                        _this.message = "Jugando";
                        _this.achicar();
                        _this.agrandar();
                    }
                    else {
                        _this.pego = false;
                        if (_this.ballwidthNumber >= 80 && _this.ballwidthNumber <= 145) {
                            _this.pego = true;
                            _this.sumaPtos();
                            _this.achicar();
                            //if x y
                            _this.agrandar();
                            //else otro lado
                        }
                        if (_this.ballwidthNumber > 145 && !_this.pego) {
                            _this.message = "Perdiste! Total puntos: " + _this.count;
                            $(".ball").css({ "width": "150px", "height": "150px", "left": "50%", "top": "50%" });
                            _this.perdio = true;
                            _this.stop();
                        }
                    }
                }
            });
        }
        catch (err) {
            alert("Error" + err);
        }
    };
    HomePage.prototype.stop = function () {
        this.id.unsubscribe();
    };
    HomePage.prototype.withBall = function () {
        this.ballwidthNumber = $(".ball").width();
    };
    HomePage.prototype.achicar = function () {
        $(".ball").animate({ width: '10px', height: '10px', left: '50%', top: '50%' }, 3000);
        //this.withBall();
    };
    HomePage.prototype.agrandar = function () {
        $(".ball").animate({ width: '150px', height: '150px', left: '50%', top: '50%' }, 3000);
        //this.withBall();
    };
    HomePage.prototype.vaArriba = function () {
        $(".ball").animate({ width: '300px', height: '300px', top: "-800px" });
    };
    HomePage.prototype.vaAbajo = function () {
        $(".ball").animate({ width: '300px', height: '300px', top: "800px" });
    };
    HomePage.prototype.vaDerecha = function () {
        $(".ball").animate({ width: '300px', height: '300px', left: "800px" });
    };
    HomePage.prototype.vaIzquierda = function () {
        $(".ball").animate({ width: '300px', height: '300px', left: "-800px" });
    };
    HomePage.prototype.vaRebota = function () {
        $(".ball").animate({ width: '10px', height: '10px', left: '50%', top: '50%' });
        $(".ball").animate({ width: '50px', height: '50px', left: '50%', top: '50%' });
        $(".ball").animate({ width: '10px', height: '10px', left: '50%', top: '50%' });
        $(".ball").animate({ width: '30px', height: '30px', left: '50%', top: '50%' });
        $(".ball").animate({ width: '10px', height: '10px', left: '50%', top: '50%' });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/sensorApp/sensorApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Count: {{count}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refresh()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h1>T = {{ballwidthNumber}}</h1>\n        <h1>{{message}}</h1>        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-badge color={{color}}>{{golpe}}</ion-badge>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <div full><h1>X: {{x}}</h1></div>\n  <div full><h1>Y: {{y}}</h1></div>\n  <div full><h1>TimeStamp: {{timeStamp}}</h1></div>\n  <div full><h1>Z: {{z}}</h1></div>\n-->\n\n<!-- <button ion-button full color="dark" (click)="start()">Start Listening</button> -->\n  <!-- <button ion-button full (click)="stop()">Stop Listening</button> -->\n  <div class="ball" [style.width.px]="ballwidthNumber" [style.height.px]="ballwidthNumber" ></div>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/sensorApp/sensorApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__["a" /* DeviceMotion */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device_motion__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_device_motion__["a" /* DeviceMotion */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/sensorApp/sensorApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/sensorApp/sensorApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map