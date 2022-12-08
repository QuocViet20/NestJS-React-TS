import { RegisterFormField } from "./ResgisterFormField.interface";

export type NewUser = Omit<RegisterFormField, "confirmPassword">;
