const { Model, DataTypes } = require("sequelize");

class pessoa extends Model {
  static init(sequelize) {    
    super.init(
      {
        nome: DataTypes.STRING,
        nomefantasia: DataTypes.STRING,
        tipo: DataTypes.STRING,
        cpf: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        datanascimento: DataTypes.DATEONLY,
        sexo: DataTypes.STRING,
        endereco: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cep: DataTypes.STRING,
        complemento: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        telefone: DataTypes.STRING,
        celular: DataTypes.STRING,
        email: DataTypes.STRING,
        numero: DataTypes.STRING,
        barcode: DataTypes.DECIMAL(50),
        biometria: DataTypes.STRING(20000),
        titular_id: DataTypes.INTEGER,
        fornecedor: DataTypes.BOOLEAN,
        grau_parentesco: DataTypes.STRING,
        tipo_cobranca: DataTypes.STRING,
        carteirinha_codigo: DataTypes.INTEGER,
        barcode_temporario: DataTypes.DECIMAL(50),
        estado_civil: DataTypes.STRING,
        numero_dependente: DataTypes.INTEGER,
        reduzido: DataTypes.INTEGER,
        ativo: DataTypes.BOOLEAN,
        observacao: DataTypes.STRING(5000),
        local_trabalho: DataTypes.STRING,
        nome_pai: DataTypes.STRING,
        nome_mae: DataTypes.STRING,
        estudante: DataTypes.BOOLEAN,
        entidade_ensino: DataTypes.STRING,
        data_matricula: DataTypes.DATEONLY,
        data_final_isencao: DataTypes.DATEONLY,
        inscricao_estadual: DataTypes.STRING,
        inscricao_municipal: DataTypes.STRING,
        pix: DataTypes.STRING,
        conta: DataTypes.INTEGER,
        banco: DataTypes.STRING,
        // banco_id: DataTypes.INTEGER,
        cod_banco: DataTypes.INTEGER,
        agencia: DataTypes.STRING,
        agencia_id: DataTypes.INTEGER,
        crn: DataTypes.STRING,
        rfid: DataTypes.INTEGER,
        comissionado: DataTypes.BOOLEAN,
        responsavel1: DataTypes.STRING,
        responsavel2: DataTypes.STRING,
        funcionario: DataTypes.BOOLEAN,
        conta_contabil_id: DataTypes.INTEGER,
        data_criacao: DataTypes.DATE,
        hora_criacao: DataTypes.TIME,
        usuario_criou: DataTypes.INTEGER,
        data_alteracao: DataTypes.DATE,
        hora_alteracao: DataTypes.TIME,
        usuario_alterou: DataTypes.INTEGER,
        tipo_cobranca_servico: DataTypes.STRING,
        observacao_pagamento: DataTypes.STRING,
        dependente_cobrar: DataTypes.INTEGER,
        id_optantes: DataTypes.INTEGER,
      },{
        sequelize
      }  
    );
  }
}

module.exports = pessoa;