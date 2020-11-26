import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.recordarme = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.usuario = new UsuarioModel();
    };
    RegistroComponent.prototype.onSubmit = function (form) {
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
        this.auth.nuevoUsuario(this.usuario)
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
    RegistroComponent = __decorate([
        Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router])
    ], RegistroComponent);
    return RegistroComponent;
}());
export { RegistroComponent };
//# sourceMappingURL=registro.component.js.map