import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { RecoverComponent } from './recover/recover.component';

import { AccountRouting } from './account.routing';

@NgModule({
    declarations: [
        RecoverComponent,
    ],
    imports: [
        CoreModule,
        AccountRouting,
    ],
})
export class AccountModule {
}
