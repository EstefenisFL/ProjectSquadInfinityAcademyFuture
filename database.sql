CREATE DATABASE academiasaudemais;
USE DATABASE academiasaudemais;

CREATE TABLE `User`
(
 `id_user`          int NOT NULL ,
 `user_nome`        varchar(100) NOT NULL ,
 `user_idade`       int NOT NULL ,
 `user_sexo`        varchar(10) NOT NULL ,
 `user_endereco`    varchar(100) NOT NULL ,
 `user_cpf`         varchar(15) NOT NULL ,
 `user_rg`          varchar(15) NOT NULL ,
 `user_data_nasc`   date NOT NULL ,
 `user_tel`         varchar(20) NOT NULL ,
 `plano_id_plano`   int NOT NULL ,
 `status_id_status` int NOT NULL ,
 `user_is`          varchar(20) NOT NULL ,

PRIMARY KEY (`id_user`),
KEY `FK_117` (`plano_id_plano`),
CONSTRAINT `FK_115` FOREIGN KEY `FK_117` (`plano_id_plano`) REFERENCES `Plano` (`id_plano`),
KEY `FK_120` (`status_id_status`),
CONSTRAINT `FK_118` FOREIGN KEY `FK_120` (`status_id_status`) REFERENCES `Status` (`id_status`)
);

CREATE TABLE `Plano`
(
 `plano_desconto`   float NOT NULL ,
 `plano_descricao`  varchar(100) NOT NULL ,
 `quantidade_meses` int NOT NULL ,
 `id_plano`         int NOT NULL ,

PRIMARY KEY (`id_plano`)
);

CREATE TABLE `Pagamento`
(
 `id_pagamento`                 int NOT NULL ,
 `plano_id_plano`               int NOT NULL ,
 `pagamento_valor`              decimal(12,2) NOT NULL ,
 `pagamento_valor_com_desconto` decimal(12,2) NOT NULL ,
 `user_id_user`                 int NOT NULL ,

PRIMARY KEY (`id_pagamento`),
KEY `FK_128` (`plano_id_plano`),
CONSTRAINT `FK_126` FOREIGN KEY `FK_128` (`plano_id_plano`) REFERENCES `Plano` (`id_plano`),
KEY `FK_131` (`user_id_user`),
CONSTRAINT `FK_129` FOREIGN KEY `FK_131` (`user_id_user`) REFERENCES `User` (`id_user`)
);

CREATE TABLE `Status`
(
 `id_status`       int NOT NULL ,
 `status_situacao` varchar(45) NOT NULL ,

PRIMARY KEY (`id_status`)
);

CREATE TABLE `User_Modalidade`
(
 `user_id_user`       int NOT NULL ,
 `horario_id_horario` int NOT NULL ,
 `data_cadastro`      date NOT NULL ,

KEY `FK_123` (`user_id_user`),
CONSTRAINT `FK_121` FOREIGN KEY `FK_123` (`user_id_user`) REFERENCES `User` (`id_user`),
KEY `FK_145` (`horario_id_horario`),
CONSTRAINT `FK_143` FOREIGN KEY `FK_145` (`horario_id_horario`) REFERENCES `Horario` (`id_horario`)
);

CREATE TABLE `Pagamento_Modalidade`
(
 `pagamento_id_pagamento`   int NOT NULL ,
 `modalidade_id_modalidade` int NOT NULL ,

KEY `FK_105` (`pagamento_id_pagamento`),
CONSTRAINT `FK_103` FOREIGN KEY `FK_105` (`pagamento_id_pagamento`) REFERENCES `Pagamento` (`id_pagamento`),
KEY `FK_108` (`modalidade_id_modalidade`),
CONSTRAINT `FK_106` FOREIGN KEY `FK_108` (`modalidade_id_modalidade`) REFERENCES `Modalidade` (`id_modalidade`)
);

CREATE TABLE `Avaliacao`
(
 `id_avaliacao`             int NOT NULL ,
 `avaliacao_peso`           float NOT NULL ,
 `avaliacao_massa_muscular` float NOT NULL ,
 `avaliacao_data`           date NOT NULL ,

PRIMARY KEY (`id_avaliacao`)
);

CREATE TABLE `Horario`
(
 `id_horario`               int NOT NULL ,
 `horario_inicio`           varchar(15) NOT NULL ,
 `horario_fim`              varchar(15) NOT NULL ,
 `modalidade_id_modalidade` int NOT NULL ,

PRIMARY KEY (`id_horario`),
KEY `FK_140` (`modalidade_id_modalidade`),
CONSTRAINT `FK_138` FOREIGN KEY `FK_140` (`modalidade_id_modalidade`) REFERENCES `Modalidade` (`id_modalidade`)
);

CREATE TABLE `Modalidade`
(
 `id_modalidade`        int NOT NULL ,
 `modalidade_nome`      varchar(45) NOT NULL ,
 `modalidade_descricao` varchar(100) NOT NULL ,
 `modalidade_preco`     float NOT NULL ,

PRIMARY KEY (`id_modalidade`)
);

CREATE TABLE `Instrutor_modalidade`
(
 `user_id_user`             int NOT NULL ,
 `modalidade_id_modalidade` int NOT NULL ,

KEY `FK_137` (`modalidade_id_modalidade`),
CONSTRAINT `FK_135` FOREIGN KEY `FK_137` (`modalidade_id_modalidade`) REFERENCES `Modalidade` (`id_modalidade`),
KEY `FK_155` (`user_id_user`),
CONSTRAINT `FK_153` FOREIGN KEY `FK_155` (`user_id_user`) REFERENCES `User` (`id_user`)
);





