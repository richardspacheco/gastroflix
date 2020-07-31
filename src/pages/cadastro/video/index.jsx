import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import { FormGroup, ButtonPrimary, ButtonBlack } from './styles';

import useForm from '../../../hooks/useForm';
import categoryRepositories from '../../../repositories/category';
import videoRepository from '../../../repositories/video';

function CadastroVideo() {
  const [video, handleChange, handleClear] = useForm({});
  const [categoryList, setCategoryList] = useState([]);
  const categoryTitleList = categoryList.map((category) => category.titulo);

  const history = useHistory();

  async function fetchCategoryList() {
    const data = await categoryRepositories.getAll();
    setCategoryList(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const chosenCategory = categoryList.find((category) => category.titulo === video.category);

    videoRepository.create({
      titulo: video.titulo,
      url: video.url,
      categoriaId: chosenCategory.id,
    })
      .then(() => {
        history.push('/');
      });
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <Layout>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <FormField
            label="Título do vídeo"
            type="text"
            name="titulo"
            value={video.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Categoria do vídeo"
            type="text"
            name="category"
            value={video.category}
            options={categoryTitleList}
            onChange={handleChange}
          />
        </FormGroup>

        <FormField
          label="URL do vídeo"
          type="text"
          name="url"
          value={video.url}
          onChange={handleChange}
        />

        <FormGroup>
          <ButtonPrimary>
            Salvar
          </ButtonPrimary>

          <ButtonBlack onClick={handleClear}>
            Limpar
          </ButtonBlack>
        </FormGroup>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </Layout>
  );
}

export default CadastroVideo;
