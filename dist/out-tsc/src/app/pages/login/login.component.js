import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new UsuarioModel();
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        Swal.fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor..'
        });
        Swal.showLoading();
        this.auth.login(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
            Swal.close();
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            Swal.fire({
                icon: 'error',
                title: 'Error al autenticar!',
                text: err.error.error.message
            });
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map