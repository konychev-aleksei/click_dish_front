import { Button, Form, Text, TextField } from "@/shared/UI";
import type { TUseChangeEmail as TProps } from "../model/useChangeEmail";

export const ChangeEmailFormView = ({ form, onSubmit }: TProps) => {
  const { register } = form;

  return (
    <>
      <Text>Текущий email: konychevaleksei@yandex.ru</Text>
      <Form form={form} onSubmit={onSubmit}>
        <TextField {...register('email')} label="Новый email" />
        <Button width={200}>Сохранить</Button>
      </Form>
    </>
  );
};
