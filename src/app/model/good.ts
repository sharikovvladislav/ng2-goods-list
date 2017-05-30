export class Good {
  static createFromObject (jsObject) {
    return new Good(jsObject.id, jsObject.name);
  }

  constructor(public id: number,
              public name: string) {
  }
}
