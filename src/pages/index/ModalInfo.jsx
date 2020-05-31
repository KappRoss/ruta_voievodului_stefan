import React from 'react';
import {Modal} from './Modal';
import './map.css';

const modalData = [
  { id: '1-0', name: 'Conacul Zamfirache Ralli', url: "https://ro.wikipedia.org/wiki/Conacul_lui_Zamfirache_Ralli" },
  { id: '1-1', name: 'Vinăria, Poiana', url: 'http://vinariapoiana.md/' },
  { id: '1-2', name: 'Conacul Zamfirache Ralli', url: 'http://migdal.md/' },

  { id: '2-0', name: '', url: '' },
  { id: '2-1', name: '', url: '' },
  { id: '2-2', name: '', url: '' },
  { id: '2-3', name: '', url: '' },
  { id: '2-4', name: '', url: '' },
  { id: '2-5', name: '', url: '' },

  { id: '3-0', name: '', url: '' },
  { id: '3-1', name: '', url: '' },
  { id: '3-2', name: '', url: '' },

  { id: '4-0', name: '', url: '' },
  { id: '4-1', name: '', url: '' },
  { id: '4-2', name: '', url: '' },
  { id: '4-3', name: '', url: '' },

  { id: '5-0', name: '', url: '' },
  { id: '5-1', name: '', url: '' },
  { id: '5-2', name: '', url: '' },
  { id: '5-3', name: '', url: '' },
  { id: '5-4', name: '', url: '' },
  { id: '5-5', name: '', url: '' },

  { id: '6-0', name: '', url: '' },
  { id: '6-1', name: '', url: '' },

  { id: '7-0', name: '', url: '' },
  { id: '7-1', name: '', url: '' },

  { id: '9-0', name: '', url: '' },
  { id: '9-1', name: '', url: '' },
  { id: '9-2', name: '', url: '' }
]


export default ({ openedModal, closeModal }) => modalData.map(({ id, name, url }) => (
  <Modal
    key={`modal-${id}`}
    visible = {openedModal === id}
    onClose = {closeModal}
    namePlace = {name || id}
    href = {url}
  />
));