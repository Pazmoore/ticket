"use client";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import styles from "./eventcard.module.scss";

interface EventProps {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

const EventCard: React.FC<EventProps> = ({
  id,
  image,
  title,
  description,
  date,
}) => {
  const navigate = useRouter();
  const handleViewDetails = () => navigate.push(`event/${id}`);

  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={375}
        height={240}
        alt="img"
      />
      <p className={styles.one}>{date}</p>
      <p className={styles.two}>{title}</p>
      <p className={styles.three}>{description}</p>
      <button
        className={styles.btn}
        onClick={handleViewDetails}
      >
        <p>Get Ticket</p>
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default EventCard;

