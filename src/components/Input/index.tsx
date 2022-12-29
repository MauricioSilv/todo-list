
import { InputCustom } from './styles';

type Props = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, ...props }: Props) {
  return (
    <InputCustom
      type="text"
      name={name}
      {...props}
    />
  )
}