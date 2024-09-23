// import { News } from '@app/entities/News';
import { MeteorologicRecordsExternalService } from '@app/services/meteorologic-records/create-meteorologic-prevision.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class MeteorologicRecordsHttpClient
  implements MeteorologicRecordsExternalService
{
  constructor(private httpService: HttpService) {}

  async createMeteorologicPrevisions(localeId: string) {
    const meteorologicPrevisions = await this.httpService
      .get(
        `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${localeId}/days/15`,
        {
          params: { token: process.env.CLIMA_TEMPO_KEY },
        },
      )
      .pipe(map((response) => response.data))
      .toPromise();

    return meteorologicPrevisions.data;
  }
}
