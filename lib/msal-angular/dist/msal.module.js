import { Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MsalService, MSAL_CONFIG } from "./msal.service";
import { MsalGuard } from "./msal-guard.service";
import { BroadcastService } from "./broadcast.service";
Injectable();
export class WindowWrapper extends Window {
}
export class MsalModule {
    static forRoot(config) {
        return {
            ngModule: MsalModule,
            //A provider is an instruction to the DI system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.
            providers: [
                { provide: MSAL_CONFIG, useValue: config }, { provide: WindowWrapper, useValue: window }
            ]
        };
    }
}
MsalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
                providers: [MsalGuard, BroadcastService, MsalService],
            },] },
];
/** @nocollapse */
MsalModule.ctorParameters = () => [];
//# sourceMappingURL=msal.module.js.map