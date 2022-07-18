import express from 'express';
import {getIndex, getCadastro, getEmenta, postCadastro} from '../controller/controlador.js';
const routers= express.Router();

routers.get('/', getIndex);

routers.get('/ementa', getEmenta);

routers.get("/cadastro", getCadastro);


routers.post("/add", postCadastro);

export default routers;


