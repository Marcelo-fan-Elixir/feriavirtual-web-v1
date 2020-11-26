import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    // Crear nuevo usuario
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // Login
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    function AuthService(http) {
        this.http = http;
        this.url = 'https://identitytoolkit.googleapis.com/v1';
        this.apikey = 'AIzaSyC1Gpq1kkK6FtpwnNpRj13Le9QKN6CK3Vc';
        this.leerToken();
    }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        var authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
        };
        return this.http.post(this.url + "/accounts:signInWithPassword?key=" + this.apikey, authData).pipe(map(function (resp) {
            _this.guardarToken(resp['idToken']);
        }));
    };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        var _this = this;
        var authData = {
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
        };
        return this.http.post(this.url + "/accounts:signUp?key=" + this.apikey, authData).pipe(map(function (resp) {
            _this.guardarToken(resp['idToken']);
        }));
    };
    AuthService.prototype.guardarToken = function (idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
    };
    AuthService.prototype.leerToken = function () {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    };
    AuthService.prototype.estaAutenticado = function () {
        return this.userToken.length > 2;
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map