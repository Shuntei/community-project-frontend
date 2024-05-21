import { useEffect, useRef, useState } from 'react';

export function useModal() {
  const [modals, setModals] = useState({});

  const showModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: true,
    }));
  };

  const hideModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: false,
    }));
  };

  const toggleModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const modalRefs = {};

  useEffect(() => {
    function handleClickOutside(event, modalName) {
      if (
        modalRefs[modalName].current &&
        !modalRefs[modalName].current.contains(event.target)
      ) {
        hideModal(modalName);
      }
    }

    Object.keys(modals).forEach((modalName) => {
      if (modals[modalName]) {
        document.addEventListener('mousedown', (event) =>
          handleClickOutside(event, modalName)
        );
      } else {
        document.removeEventListener('mousedown', (event) =>
          handleClickOutside(event, modalName)
        );
      }
    });

    return () => {
      Object.keys(modals).forEach((modalName) => {
        document.removeEventListener('mousedown', (event) =>
          handleClickOutside(event, modalName)
        );
      });
    };
  }, [modals]);

  const getModalProps = (modalName) => ({
    isVisible: modals[modalName] || false,
    showModal: () => showModal(modalName),
    hideModal: () => hideModal(modalName),
    toggleModal: () => toggleModal(modalName),
    ref: (el) => (modalRefs[modalName] = el),
  });

  return getModalProps;
}
