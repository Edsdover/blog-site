import React from 'react';
import Modal from 'react-modal';
import '../styles/gif-detail-modal.css';

const GifDetailModal = (props) => {
  if (!props.selectedGif) {
    return <div></div>;
  }

  const style = {
      content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        height: 'auto',  // set height
        left: '50%',
        padding: '2rem',
        right: 'auto',
        top: '35%', // start from center
        transform: 'translate(-50%,-250px)', // adjust top "up" based on height
        width: 'auto',
        maxWidth: '40rem'
      }
    };

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      style={style}
      ariaHideApp={false}
      onRequestClose={ () => props.onRequestClose() }>
      <div className='modal-image'>
        <img src={ props.selectedGif.images.original.url } alt='loading' />
      </div>
      <div className='modal-body'>
        <p><strong>Title:</strong> { props.selectedGif.title }</p>
        <p><strong>Uploaded:</strong> { props.selectedGif.import_datetime } </p>
        <p><strong>Rating:</strong> { props.selectedGif.rating }</p>
        <button className='closeButton' onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifDetailModal;
