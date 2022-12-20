import styles from '../styles/InfoItem.module.css';

type Props = {
  info: string;
  value: string;
};

const InfoItem = ({ info, value }: Props) => {
  return (
    <div className={`flex ${styles.info}`}>
      <p>{info}:</p>
      <p>{value}</p>
    </div>
  );
};

export default InfoItem;
