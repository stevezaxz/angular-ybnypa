import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  DateAdapter,
  MOMENT,
} from 'angular-calendar';
import moment from 'moment-timezone';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './component';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: momentAdapterFactory,
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarMomentDateFormatter,
        },
      }
    ),
    DemoUtilsModule,
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
  providers: [
    {
      provide: MOMENT,
      useValue: moment,
    },
  ],
})
export class DemoModule {}
