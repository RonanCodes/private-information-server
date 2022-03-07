import { Injectable } from '@nestjs/common';

import * as privateInformation from '../private-information.json';

@Injectable()
export class AppService {
  getPrivateInformation(): Record<string, string> {
    return privateInformation;
  }
}
