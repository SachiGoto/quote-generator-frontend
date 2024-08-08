import * as z from "zod";

export const SignupSchema = z.object({
    fullName: z.string().min(1, { message: "ユーザー名を入力してください。" }),
    email: z.string().email({ message: "フォーマットが正しくありません。" }),
    password: z.string().min(10, { message: "パスワードは10文字以上でなければなりません。" }).refine(value => /[A-Z]/.test(value), {
      message: "パスワードは最低でも大文字が一つ必要です。",
    }).refine(value => /[a-z]/.test(value), {
      message: "パスワードは最低でも小文字が一つ必要です。",
    }).refine(value => /[0-9]/.test(value), {
      message: "パスワードは最低で数字が一つ必要です。",
    }).refine(value => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "パスワードは最低で特殊文字が一つ必要です。",
    }),
    confirm: z.string(),
  }).refine((data) => data.password === data.confirm, {
    message: "パスワードが一致しません。",
    path: ["confirm"], 
  });

  export type SignupSchemaType = z.infer<typeof SignupSchema>;