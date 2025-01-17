
interface TitleMediumProps {
  title: string;
}

export default function TitleMedium({ title }: TitleMediumProps) {
  return (
    <h3 className="font-poppins font-semibold text-lg leading-6">{title}</h3>
  )
}
