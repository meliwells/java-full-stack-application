drop database if exists authentication;
create database authentication;
use authentication;
CREATE TABLE users (
  id varchar(36) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(100) NOT NULL,
  role varchar(50) NOT NULL,
  enabled tinyint NOT NULL,
  PRIMARY KEY (id)
);
insert into users values('b3b2c3d4-e5f6-7890-1234-56789abcdef2', 'admin@email.com', 'password', 'ROLE_ADMIN', 1);

insert into users values('b3b2c3d4-e5f6-7890-1234-56789abcdef3', 'user@email.com', 'password', 'ROLE_USER', 1);
