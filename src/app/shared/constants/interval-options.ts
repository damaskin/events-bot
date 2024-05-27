import {IntervalOptionsEnum} from "../enums/interval-options.enum";
import {IIntervalOptionsInterface} from "../interfaces/interval-options.interface";

export const intervalOptions: IIntervalOptionsInterface[] = [
  { "value": IntervalOptionsEnum.ONE_MINUTE, "label": "1 минута" },
  { "value": IntervalOptionsEnum.THREE_MINUTES, "label": "3 минуты" },
  { "value": IntervalOptionsEnum.FIVE_MINUTES, "label": "5 минут" },
  { "value": IntervalOptionsEnum.FIFTEEN_MINUTES, "label": "15 минут" },
  { "value": IntervalOptionsEnum.THIRTY_MINUTES, "label": "30 минут" },
];
