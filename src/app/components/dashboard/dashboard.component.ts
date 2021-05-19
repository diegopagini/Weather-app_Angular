import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public urlImg =
    'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting';
  public ciudad: string;
  public climaCiudad: Observable<any>;
  public loading: boolean = false;
  public query: boolean = false;
  public mostrarError: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  obtenerClima() {
    this.loading = true;
    this.weatherService
      .getWeather(this.ciudad)
      .pipe(filter((data) => !!data))
      .subscribe(
        (data) => {
          this.loading = false;
          this.mostrarError = false;
          this.query = true;
          this.climaCiudad = data;
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.mostrarError = true;
        }
      );
  }
}
