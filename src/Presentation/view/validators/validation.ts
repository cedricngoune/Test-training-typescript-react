export default interface Validation {
  validate(field: string, input: object): string;
}
