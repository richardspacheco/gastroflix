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

  async function handleDelete(id) {
    await myListRepository.remove(id);
    updateList();
  }

  function closeModal(keepOpen) {
    if (!keepOpen) toggleModal();
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
            <Table.Row key={listItem.id}>
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
            </Table.Row>
          ))}
        </tbody>
      </Table>
      <Modal
        display={display}
        toggleModal={toggleModal}
      >
        {modalContent === 'video' && <NewVideo callback={closeModal} />}
        {modalContent === 'channel' && <NewChannel />}
      </Modal>
    </Layout>
  );
}

export default MyList;
