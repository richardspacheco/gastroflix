import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import { FormGroup, ButtonPrimary, ButtonBlack } from './styles';

import useForm from '../../../hooks/useForm';
import categoryRepositories from '../../../repositories/category';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    description: '',
    color: '#000000',
  };

  const [category, handleChange, handleClear] = useForm(initialValues);
  const [categoryList, setCategoryList] = useState([]);

  async function fetchCategoryList() {
    const data = await categoryRepositories.getAll();
    setCategoryList(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategoryList([...categoryList, category]);
    handleClear(e);
  }

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <Layout>
      <h1>
        Cadastro de Categoria:
        {` ${category.titulo}`}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <FormField
            label="Título da categoria"
            type="text"
            name="titulo"
            value={category.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Cor da categoria"
            type="color"
            name="color"
            value={category.color}
            onChange={handleChange}
          />
        </FormGroup>
        <FormField
          label="Descrição da categoria"
          type="textarea"
          name="description"
          value={category.description}
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

      <h2>Categorias:</h2>
      <ul>
        {categoryList.map((categoryItem) => (
          <li key={categoryItem.titulo}>
            {categoryItem.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </Layout>
  );
}

export default CadastroCategoria;
