import React from 'react';
import styles from "./modal.module.scss";
import Image from "next/image";

interface ModalProps {
  ticketData: {
    fullName: string;
    email: string;
    avatarUrl: string;
  }| null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ ticketData, onClose }) => {

  if (!ticketData) return null;  
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h2>Conference Ticket</h2>
        <div className={styles.ticket_content}>
          <div className={styles.ticket_avatar}>
            <Image
              src={ticketData.avatarUrl}
              alt="logo"
              width={100}
              height={10}
              quality={100}
              className={styles.img}
            />
          </div>
          <div className={styles.ticket_info}>
            <p><strong>Full Name:</strong> {ticketData.fullName}</p>
            <p><strong>Email:</strong> {ticketData.email}</p>
          </div>
        </div>
        <button onClick={onClose} className={styles.close_btn}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
