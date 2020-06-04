import React from 'react';
import {Modal} from './Modal';

const modalData = {
  ro: [
    { id: '1-0', name: 'Conacul Zamfirache Ralli', url: "https://ro.wikipedia.org/wiki/Conacul_lui_Zamfirache_Ralli" },
    { id: '1-1', name: 'Vinăria, Poiana', url: 'http://vinariapoiana.md/' },
    { id: '1-2', name: 'Conacul Zamfirache Ralli', url: 'http://migdal.md/' },
    { id: '1-3', name: '', url: '' },
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
    { id: '5-6', name: '', url: '' },

    { id: '6-0', name: '', url: '' },
    { id: '6-1', name: '', url: '' },

    { id: '7-0', name: '', url: '' },
    { id: '7-1', name: '', url: '' },

    { id: '9-0', name: '', url: '' },
    { id: '9-1', name: '', url: '' },
    { id: '9-2', name: '', url: '' }
  ],
  en: [
    { id: '1-0', name: '', url: "https://ro.wikipedia.org/wiki/Conacul_lui_Zamfirache_Ralli" },
    { id: '1-1', name: '', url: 'http://vinariapoiana.md/' },
    { id: '1-2', name: '', url: 'http://migdal.md/' },
    { id: '1-3', name: '', url: '' },
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
};


export default ({ openedModal, closeModal, locId }) => modalData[locId].map(({ id, name, url }) => (
  <Modal
    key={`modal-${locId}-${id}`}
    visible = {openedModal === id}
    onClose = {closeModal}
    namePlace = {name || id}
    href = {url}
  />
));