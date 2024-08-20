import React, { useState, useEffect } from 'react';
import { StyledContact, StyledH1, StyledH1Image } from "./Styled";
import Button from "../Button/Button";
import emailjs from '@emailjs/browser';
import Modal from '../Modal/Modal';
import titleImg from "../../assets/imgs/title.svg"
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success');

  const [animateClass, setAnimateClass] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimateClass('animate');
    } else {
      setAnimateClass('exit');
    }
  }, [inView]);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  };

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || message === '') {
      alert(t("fieldEmpty"));
      return;
    }

    if (!isValidEmail(email)) {
      alert(t("invalidEmail"));
      return;
    }

    if (!isValidPhone(phone)) {
      alert(t("invalidPhone"));
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    };

    emailjs.send("service_l21jzfj", "template_smknx7y", templateParams, "8DKi-0EYtP_xyzaMY")
      .then(() => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setModalMessage(t('emailSuccess'));
        setModalType('success');
        setShowModal(true);
      }, () => {
        setModalMessage(t('emailError'));
        setModalType('error');
        setShowModal(true);
      });
  }

  return (
    <StyledContact id='contato'>
      <div className="interface">
        <StyledH1 className={animateClass} ref={ref}>
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
          {t("contactTitle")}
          <StyledH1Image src={titleImg} alt={t("imgtitle")} />
        </StyledH1>
        <form onSubmit={sendEmail} className={animateClass} ref={ref} noValidate>
          <input
            type="text"
            name="nome"
            placeholder={t("contactName")}
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            name="email"
            placeholder={t("contactEmail")}
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            name="celular"
            placeholder={t("contactPhone")}
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <textarea
            name="mensagem"
            placeholder={t("contactMessage")}
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <Button word={t("buttonContact")} type="submit" />
        </form>
        {showModal && <Modal message={modalMessage} isSuccess={modalType === 'success'} onClose={() => setShowModal(false)} />}
      </div>
    </StyledContact>
  );
}

export default Contact;
