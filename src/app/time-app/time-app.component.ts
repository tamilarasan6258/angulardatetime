import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-app',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './time-app.component.html',
  styleUrls: ['./time-app.component.css']
})
export class TimeAppComponent implements OnInit, OnDestroy {
  localTime: string = '';
  zones: string[] = [];
  selectedZone: string = '';
  zoneTime: string = '';

  private localInterval: any;
  private zoneInterval: any;
  private isBrowser: boolean;

  constructor(
    private timeService: TimeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.fetchLocalTime();
      this.localInterval = setInterval(() => this.fetchLocalTime(), 1000);

      this.fetchZones();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      clearInterval(this.localInterval);
      clearInterval(this.zoneInterval);
    }
  }

  fetchLocalTime() {
    this.timeService.getLocalTime().subscribe({
      next: (data) => this.localTime = data,
      error: (err) => console.error('Error fetching local time', err)
    });
  }

  fetchZones() {
    this.timeService.getTimeZones().subscribe({
      next: (data) => this.zones = data,
      error: (err) => console.error('Error fetching time zones', err)
    });
  }

  onZoneChange() {
    if (!this.selectedZone || !this.isBrowser) return;

    if (this.zoneInterval) clearInterval(this.zoneInterval);

    this.fetchZoneTime();
    this.zoneInterval = setInterval(() => this.fetchZoneTime(), 1000);
  }

  fetchZoneTime() {
    this.timeService.getTimeByZone(this.selectedZone).subscribe({
      next: (data) => this.zoneTime = data,
      error: (err) => console.error('Error fetching zone time', err)
    });
  }
}
