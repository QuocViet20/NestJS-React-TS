import { LengthOptions } from "./models/options/lenght";
import { ValidatorFn } from "./models/validatorFn";

const _validateLength: ValidatorFn = (
  text: string,
  options?: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  if (options?.min && textLength < options.min) return false;
  if (options?.max && textLength > options.max) return false;

  return true;
};

export const validateNameLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 2, max: 20 });
};

export const validatePasswordLength: ValidatorFn = (text: string): boolean => {
  return _validateLength(text, { min: 6, max: 20 });
};
