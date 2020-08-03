import React, { useState, useEffect } from 'react';

import { Table } from './styles';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import FlexGroup from '../../components/FlexGroup';
import Modal from '../../components/Modal';

import NewChannel from '../new-channel';
import NewVideo from '../new-video';

import useModal from '../../hooks/useModal';
import myListRepository from '../../repositories/myList';

function MyList() {
  const [display, toggleModal] = useModal();
  const [modalContent, setModalContent] = useState();
  const [myList, setMyList] = useState();

  function handleModal(content) {
    setModalContent(content);
    toggleModal();
  }

  function updateList() {
    myListRepository.getAll()
      .then((res) => setMyList(res));
  }

  function handleDelete(id) {
    myListRepository.remove(id);
    updateList();
  }

  function modalClose() {
    toggleModal();
    updateList();
  }

  useEffect(() => {
    updateList();
  }, []);

  return (
    <Layout>
      <FlexGroup>
        <Button onClick={() => handleModal('video')}>
          Add video
        </Button>
        <Button onClick={() => handleModal('channel')}>
          Add channel
        </Button>
      </FlexGroup>

      <h1 style={{ marginTop: '32px' }}>
        My List
      </h1>
      <Table>
        <thead>
          <tr>
            <Table.Header>Title</Table.Header>
            <Table.Header>Channel</Table.Header>
            <Table.Header />
          </tr>
        </thead>
        <tbody>
          {myList && myList.map((listItem) => (
            <tr key={listItem.id}>
              <Table.Cell>{listItem.title}</Table.Cell>
              <Table.Cell>{listItem.channel}</Table.Cell>
              <Table.Cell>
                <Button
                  style={{ height: '30px' }}
                  onClick={() => handleDelete(listItem.id)}
                >
                  Delete
                </Button>
              </Table.Cell>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        display={display}
        toggleModal={toggleModal}
      >
        {modalContent === 'video' && <NewVideo callback={modalClose} />}
        {modalContent === 'channel' && <NewChannel />}
      </Modal>
    </Layout>
  );
}

export default MyList;
