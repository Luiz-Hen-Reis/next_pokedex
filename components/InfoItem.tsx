
type Props = {
    info: string;
    value: string;
}

const InfoItem = ({ info, value }: Props) => {
  return (
    <p>{info}: {value}</p>
  )
}

export default InfoItem