import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../../components/Layout'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: 'black',
  }

  const [newCategory, setNewCategory] = useState(initialValues)
  const [categories, setCategories] = useState([])

  function handleChange({ target }) {
    setNewCategory({
      ...newCategory,
      [target.getAttribute('name')]: target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setCategories([...categories, newCategory])
    setNewCategory(initialValues)
  }

  return (
    <Layout>
      <h1>Cadastro de Categoria: {newCategory.name}</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          placeholder="Insira a categoria"
          value={newCategory.name}
          onChange={handleChange}
        />
        <FormField
          label="Descrição da categoria"
          type="textarea"
          name="description"
          placeholder="Insira a descrição"
          value={newCategory.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor da categoria"
          type="color"
          name="color"
          value={newCategory.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <h2>Categorias:</h2>
      <ul>
        {categories.map(category => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </Layout>
  )
}

export default CadastroCategoria