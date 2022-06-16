CREATE SCHEMA Nepar;

use Nepar;

CREATE TABLE users (
  id int(30) NOT NULL AUTO_INCREMENT,
  nome varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  phone varchar(11) NOT NULL,
  password_hash varchar(100) NOT NULL,
  date_birth date NOT NULL,
  adm boolean NOT NULL,
  graduate_id varchar(30) NOT NULL,
  description text,
  instagram varchar(20),
  twitter varchar(20),
  facebook varchar(30),
  linkedin varchar(50),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime,
  CONSTRAINT pk_users PRIMARY KEY (id)
);
/*
INSERT INTO users(nome, email, phone, password_hash, date_birth, adm, graduate_id, instagram, twitter, facebook, linkedin, created_at, updated_at) VALUES(
  "Andre Medeiros",
  "andre@medeiros.com",
  "40028922",
  "naotemsenha",
  '1999-8-25',
  TRUE,
  '',
  "andremm00",
  "dedezin",
  "andremedeiros",
  "andremmedeiros99",
  '2021-8-31',
  '2021-8-31'
);

CREATE TABLE graduates (
  id varchar(30) NOT NULL,
  nomeGrad varchar(30) NOT NULL,
  description text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  CONSTRAINT pk_grad PRIMARY KEY (id)
);

CREATE TABLE transaction_types (
  id varchar(30) NOT NULL,
  codigo varchar(50) NOT NULL,
  nomett varchar(20) NOT NULL,
  description text NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  CONSTRAINT pk_tt PRIMARY KEY (id)
);

CREATE TABLE transactions (
  id varchar(30) NOT NULL,
  price float NOT NULL,
  datatr date NOT NULL,
  description text,
  type_id varchar(30) NOT NULL,
  user_id varchar(30) NOT NULL,
  created_by varchar(30) NOT NULL,
  updated_by varchar(30) NOT NULL,
  deleted_by varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime,
  CONSTRAINT pk_tr PRIMARY KEY (id)
);

CREATE TABLE courses (
  id varchar(30) PRIMARY KEY,
  nome varchar(20) NOT NULL,
  url varchar(30),
  description text,
  buy_id varchar(20) NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);
INSERT INTO courses(id, nome, url, buy_id, created_at, updated_at) VALUES(
  "12312313",
  "CienciadaComputacao",
  "naoseioqeisso",
  "0000123",
  '2021-8-31',
  '2021-8-31'
);

CREATE TABLE departments (
  id varchar(30) PRIMARY KEY,
  codigodep varchar(30) NOT NULL,
  nomedep varchar(30) NOT NULL,
  description text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);
*/
CREATE TABLE warnings (
  id varchar(30) PRIMARY KEY,
  nomewarning varchar(30) NOT NULL,
  description text,
  points int NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);
/*
CREATE TABLE points (
  id INT PRIMARY KEY,
  user_id varchar(30) NOT NULL,
  warning_id varchar(30) NOT NULL,
  date date NOT NULL,
  created_by varchar(30) NOT NULL,
  updated_by varchar(30) NOT NULL,
  deleted_by varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime
);

CREATE TABLE components (
  id varchar(30) PRIMARY KEY,
  nome varchar(30) NOT NULL,
  description text,
  type_id varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

CREATE TABLE component_types (
  id varchar(30) PRIMARY KEY,
  nome varchar(30) NOT NULL,
  description text,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

CREATE TABLE storages (
  id varchar(30) PRIMARY KEY,
  component_id varchar(30) NOT NULL,
  buy_id varchar(30) NOT NULL,
  created_by varchar(30) NOT NULL,
  updated_by varchar(30) NOT NULL,
  deleted_by varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime
);

CREATE TABLE buys (
  id varchar(30) PRIMARY KEY,
  price float NOT NULL,
  total_installments int NOT NULL,
  interest float NOT NULL,
  date date NOT NULL,
  created_by varchar(30) NOT NULL,
  updated_by varchar(30) NOT NULL,
  deleted_by varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime
);

CREATE TABLE installments (
  id varchar(30) PRIMARY KEY,
  buy_id varchar(30) NOT NULL,
  pedido INT NOT NULL,
  due_date date NOT NULL,
  transaction_id varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);

CREATE TABLE users_departments (
  id varchar(30) PRIMARY KEY,
  user_id varchar(30) NOT NULL,
  department_id varchar(30) NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime
);
*/
CREATE TABLE projects (
  id varchar(30) PRIMARY KEY,
  title varchar(30),
  descricao varchar(30),
  start_date date,
  end_date date,
  created_by varchar(30) NOT NULL,
  updated_by varchar(30) NOT NULL,
  deleted_by varchar(30),
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
  deleted_at datetime
);

CREATE TABLE users_projects (
  id varchar(30) PRIMARY KEY,
  user_id varchar(30) NOT NULL,
  project_id varchar(30) NOT NULL,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL
);
/*
ALTER TABLE users ADD FOREIGN KEY (graduate_id) REFERENCES graduates (id);
ALTER TABLE users DROP COLUMN graduate_id;

ALTER TABLE transactions ADD FOREIGN KEY (type_id) REFERENCES transaction_types (id);

ALTER TABLE transactions ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE transactions ADD FOREIGN KEY (created_by) REFERENCES users (id);

ALTER TABLE transactions ADD FOREIGN KEY (updated_by) REFERENCES users (id);

ALTER TABLE transactions ADD FOREIGN KEY (deleted_by) REFERENCES users (id);

ALTER TABLE courses ADD FOREIGN KEY (buy_id) REFERENCES buys (id);

ALTER TABLE points ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE points ADD FOREIGN KEY (warning_id) REFERENCES warnings (id);

ALTER TABLE points ADD FOREIGN KEY (created_by) REFERENCES users (id);

ALTER TABLE points ADD FOREIGN KEY (updated_by) REFERENCES users (id);

ALTER TABLE points ADD FOREIGN KEY (deleted_by) REFERENCES users (id);

ALTER TABLE components ADD FOREIGN KEY (type_id) REFERENCES component_types (id);

ALTER TABLE storages ADD FOREIGN KEY (component_id) REFERENCES components (id);

ALTER TABLE storages ADD FOREIGN KEY (buy_id) REFERENCES buys (id);

ALTER TABLE storages ADD FOREIGN KEY (created_by) REFERENCES users (id);

ALTER TABLE storages ADD FOREIGN KEY (updated_by) REFERENCES users (id);

ALTER TABLE storages ADD FOREIGN KEY (deleted_by) REFERENCES users (id);

ALTER TABLE buys ADD FOREIGN KEY (created_by) REFERENCES users (id);

ALTER TABLE buys ADD FOREIGN KEY (updated_by) REFERENCES users (id);

ALTER TABLE buys ADD FOREIGN KEY (deleted_by) REFERENCES users (id);

ALTER TABLE installments ADD FOREIGN KEY (buy_id) REFERENCES buys (id);

ALTER TABLE installments ADD FOREIGN KEY (transaction_id) REFERENCES transactions (id);

ALTER TABLE users_departments ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE users_departments ADD FOREIGN KEY (department_id) REFERENCES departments (id);

ALTER TABLE projects ADD FOREIGN KEY (created_by) REFERENCES users (id);

ALTER TABLE projects ADD FOREIGN KEY (updated_by) REFERENCES users (id);

ALTER TABLE projects ADD FOREIGN KEY (deleted_by) REFERENCES users (id);

ALTER TABLE users_projects ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE users_projects ADD FOREIGN KEY (project_id) REFERENCES projects (id);

ALTER TABLE components ADD FOREIGN KEY (description) REFERENCES components (type_id);
*/