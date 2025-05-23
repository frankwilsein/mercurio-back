const {response} = require('express')

const usuariosGet=(req, res= response) =>{
    res.json({
        msg:'get API -controlador'
    });
  }
  const usuariosPost=(req, res= response) =>{
    const body =req.body;

    res.json({
        msg:'Post API -controlador',
        body
    });
  }
  const usuariosPut=(req, res= response) =>{
    const id =req.params.id;
    res.json({
        msg:'Put API -controlador'
    });
  }
  const usuariosPatch=(req, res= response) =>{
    res.json({
        msg:'Patch API -controlador'
    });
  }
  const usuariosDelete=(req, res= response) =>{
    res.json({
        msg:'Delete API -controlador'
    });
  }

  module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

  }