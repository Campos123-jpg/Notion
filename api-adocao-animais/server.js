
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');


const app = express();
const PORT = 3000;
const ARQUIVO_JSON = path.join(__dirname, 'animais.json');


app.use(express.json());


app.use(cors());

function lerAnimais() {
  const dados = fs.readFileSync(ARQUIVO_JSON, 'utf-8');
  return JSON.parse(dados);
}

function escreverAnimais(animais) {
  fs.writeFileSync(ARQUIVO_JSON, JSON.stringify(animais, null, 2), 'utf-8');
}

function gerarNovoId(animais) {
  if (animais.length === 0) return '1';
  const maiorId = Math.max(...animais.map((a) => parseInt(a.id, 10)));
  return String(maiorId + 1);
}


function validarAnimal(body) {
  const erros = [];

  if (!body.tipo || typeof body.tipo !== 'string' || body.tipo.trim() === '') {
    erros.push('O campo "tipo" é obrigatório e deve ser um texto.');
  } else if (!['cachorro', 'gato'].includes(body.tipo.toLowerCase())) {
    erros.push('O campo "tipo" deve ser "cachorro" ou "gato".');
  }

  if (!body.raca || typeof body.raca !== 'string' || body.raca.trim() === '') {
    erros.push('O campo "raca" é obrigatório e deve ser um texto.');
  }

  if (
    !body.caracteristicas ||
    typeof body.caracteristicas !== 'string' ||
    body.caracteristicas.trim() === ''
  ) {
    erros.push('O campo "caracteristicas" é obrigatório e deve ser um texto.');
  }

  return erros;
}

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Adoção de Animais funcionando! Use /animais' });
});


app.get('/animais', (req, res) => {
  try {
    const animais = lerAnimais();
    res.status(200).json(animais);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao ler os dados dos animais.' });
  }
});

app.get('/animais/:id', (req, res) => {
  try {
    const animais = lerAnimais();
    const animal = animais.find((a) => a.id === req.params.id);

    if (!animal) {
      return res.status(404).json({ erro: 'Animal não encontrado.' });
    }

    res.status(200).json(animal);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar o animal.' });
  }
});


app.post('/animais', (req, res) => {
  try {
    const erros = validarAnimal(req.body);
    if (erros.length > 0) {
      return res.status(400).json({ erros });
    }

    const animais = lerAnimais();

    const novoAnimal = {
      id: gerarNovoId(animais),
      tipo: req.body.tipo.toLowerCase(),
      raca: req.body.raca,
      caracteristicas: req.body.caracteristicas,
    };

    animais.push(novoAnimal);
    escreverAnimais(animais);

    res.status(201).json(novoAnimal);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao adicionar o animal.' });
  }
});


app.put('/animais/:id', (req, res) => {
  try {
    const animais = lerAnimais();
    const indice = animais.findIndex((a) => a.id === req.params.id);

    if (indice === -1) {
      return res.status(404).json({ erro: 'Animal não encontrado.' });
    }

    const erros = validarAnimal(req.body);
    if (erros.length > 0) {
      return res.status(400).json({ erros });
    }

    animais[indice] = {
      id: req.params.id,
      tipo: req.body.tipo.toLowerCase(),
      raca: req.body.raca,
      caracteristicas: req.body.caracteristicas,
    };

    escreverAnimais(animais);

    res.status(200).json(animais[indice]);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar o animal.' });
  }
});

app.delete('/animais/:id', (req, res) => {
  try {
    const animais = lerAnimais();
    const indice = animais.findIndex((a) => a.id === req.params.id);

    if (indice === -1) {
      return res.status(404).json({ erro: 'Animal não encontrado.' });
    }

    const animalRemovido = animais.splice(indice, 1);
    escreverAnimais(animais);

    res.status(200).json({
      mensagem: 'Animal removido com sucesso.',
      animal: animalRemovido[0],
    });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao remover o animal.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
