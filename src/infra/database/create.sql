drop table if exists grimes.card;
drop table if exists grimes.column;
drop table if exists grimes.board;

create table grimes.board (
    id_board serial primary key,
    name text
);

create table grimes.column (
    id_column serial primary key,
    id_board integer references grimes.board (id_board),
    name text,
    has_estimative boolean
);

create table grimes.card (
    id_card serial primary key,
    id_column integer references grimes.column (id_column),
    title text,
    estimative integer
);

insert into grimes.board (id_board, name) values (1, 'Projeto 1');
insert into grimes.column (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into grimes.column (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into grimes.column (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into grimes.card (id_card, id_column, title,estimative) values (1, 1, "Atividade 1", 3);
insert into grimes.card (id_card, id_column, title,estimative) values (2, 1, "Atividade 2", 2);
insert into grimes.card (id_card, id_column, title,estimative) values (3, 1, "Atividade 3", 1);
