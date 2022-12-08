import { ResetPasswordFormField } from "./ResetPasswordFormField.interface";

export type ResetPasswordUser = Omit<ResetPasswordFormField, "confirmPassword">;
