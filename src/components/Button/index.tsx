
import { ButtonCustom, IconCustom } from './styles';


interface IButtonCustom {
  title: string;
}

type Props = IButtonCustom & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ title, ...props }: Props) {
  return (
    <ButtonCustom type="submit" {...props}>
      {title}
      <IconCustom size={16} weight="bold" />
    </ButtonCustom>
  )
}