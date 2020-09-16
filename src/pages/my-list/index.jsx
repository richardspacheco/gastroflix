import React, { useState, useEffect } from 'react';
import { Delete } from '@styled-icons/material';

import { Table } from './styles';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import FlexGroup from '../../components/FlexGroup';
import Modal from '../../components/Modal';
import Loading from '../../components/Loading';
import Message from '../../components/Message';

import NewChannel from '../new-channel';
import NewVideo from '../new-video';

import useModal from '../../hooks/useModal';
import myListRepository from '../../repositories/myList';
import channelRepository from '../../repositories/channel';

function MyList() {
  const [display, toggleModal] = useModal();
  const [modalContent, setModalContent] = useState();
  const [myList, setMyList] = useState();
  const [channels, setChannels] = useState();
  const [serverError, setServerError] = useState();

  function handleModal(content) {
    setModalContent(content);
    toggleModal();
  }

  function updateLists() {
    myListRepository.getAll()
      .then((res) => setMyList(res))
      .catch((err) => setServerError(err));

    channelRepository.getAll()
      .then((res) => setChannels(res))
      .catch((err) => setServerError(err));
  }

  async function handleDelete(target, id) {
    if (target === 'myList') {
      await myListRepository.remove(id);
    } else if (target === 'channel') {
      await channelRepository.remove(id);
    }
    updateLists();
  }

  function closeModal(keepOpen) {
    if (!keepOpen) toggleModal();
    updateLists();
  }

  useEffect(() => {
    updateLists();
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

      {serverError && <Message error>{serverError}</Message>}

      {(!serverError && !myList) && <Loading />}

      {myList && (
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
                  <Button.Icon onClick={() => handleDelete('myList', listItem.id)}>
                    <Delete size="24" title="Delete" />
                  </Button.Icon>
                </Table.Cell>
              </Table.Row>
            ))}
          </tbody>
        </Table>
      )}

      <h1 style={{ marginTop: '32px' }}>
        My Channels
      </h1>

      {serverError && <Message error>{serverError}</Message>}

      {(!serverError && !channels) && <Loading />}

      {channels && (
        <Table>
          <tbody>
            {channels && channels.map((listItem) => (
              <Table.Row key={listItem.id}>
                <Table.Cell>{listItem.title}</Table.Cell>
                <Table.Cell>
                  <Button.Icon onClick={() => handleDelete('channel', listItem.id)}>
                    <Delete size="24" title="Delete" />
                  </Button.Icon>
                </Table.Cell>
              </Table.Row>
            ))}
          </tbody>
        </Table>
      )}

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
