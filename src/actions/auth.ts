import { FormState, RegisterFormSchema } from "@/lib/feature/register/register.schema";

export async function register(formData: FormData, state: FormState) {
  const validatedFields = RegisterFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
}
