import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UpdateReviewForm from '../UpdateReviewForm';


function UpdateReviewModal ({ review, spot }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='review-edit-icon-div'>
                <i class={showModal ? '' :  "far fa-edit"} onClick={() => setShowModal(true)}></i>
            </div>
            {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <UpdateReviewForm spot={spot} setShowModal={setShowModal} showModal={showModal} review={review}/>
            </Modal>
          )}
        </>
    )
}

export default UpdateReviewModal;
