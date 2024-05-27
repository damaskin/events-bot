import {IntervalOptionsEnum} from "../enums/interval-options.enum";

export interface IUser {
  allows_write_to_pm: boolean;
  id: number;
  is_premium: boolean;
  language_code: string;
  username: string;
  last_name: string;
  first_name?: string;
  photo_url?: string;
  settings: ISettings;
}

export interface ISettings {
  longPercent: string,
  longInterval: IntervalOptionsEnum,
  shortPercent: string,
  shortInterval: IntervalOptionsEnum
}
