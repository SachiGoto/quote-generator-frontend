import { z } from 'zod';

export const LoginSchema = z.object({
  password: z.string().min(10, { message: "パスワードは10文字以上でなければなりません。" }).refine(value => /[A-Z]/.test(value), {
    message: "パスワードは最低でも大文字が一つ必要です。",
  }).refine(value => /[a-z]/.test(value), {
    message: "パスワードは最低でも小文字が一つ必要です。",
  }).refine(value => /[0-9]/.test(value), {
    message: "パスワードは最低で数字が一つ必要です。",
  }).refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
    message: "パスワードは最低で特殊文字が一つ必要です。",
  }),
    email: z.string().email({ message: "フォーマットが正しくありません。" }),
  });

export type LoginSchemaType = z.infer<typeof LoginSchema>;