export interface ITgButton {
  show(): void,
  hide(): void,
  setText(text: string): void,
  setUrl(url: string): void,
  setCallbackData(callbackData: string): void,
  setType(type: string): void,
  setOneTime(oneTime: boolean): void,
}
