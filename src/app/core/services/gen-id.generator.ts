export class GenId {
  private count = 0;

  generate(): number {
      return this.count + 1;
  }
}
