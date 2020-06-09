import React from 'react';
import {Modal} from './Modal';
import attractions from "../../../../lib/attractions";

export default ({
  openedModal,
  closeModal,
  locId
}) => attractions.map(({
  id,
  googleLoc,
  [locId]: {
    desc,
    district,
    title,
    url
  }
}) => (
  <Modal
    key={`modal-${locId}-${id}`}
    visible = {openedModal === id}
    onClose = {closeModal}
    namePlace = {id}
    url = {url}
    desc={desc}
    district={district}
    title={title}
    googleLoc={googleLoc}
    seeMore={attractions[0].seeMore[locId]}
    locLink={attractions[0].locLink[locId]}
    locId={locId}
  />
));
