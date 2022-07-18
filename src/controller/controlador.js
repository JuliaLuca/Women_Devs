import axios from "axios";

export const getIndex = async (req, res) => {
  //rota principal
  res.render("index");
};

export const getEmenta = async (req, res) => {
  res.render("ementa");
};

export const getCadastro = async (req, res) => {
  res.render("cadastro");
};

export const postCadastro = async (req, res) => {
  const { nome, email, celular, descricao, sim, nao, date } = req.body;
  const conhecimento = sim? "Possui conhecimento em tecnologia": "Não possui conhecimento em tecnologia";

  const response = await axios.post("https://apiwomendevs-production.up.railway.app/usuarios", {
      nome,
      email,
      celular,
      descricao,
      conhecimento,
      nascimento: date,
    }).catch(err => console.log(err.message));
  res.redirect("/");
};
