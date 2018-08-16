drop table stuff if exists;

create table stuff (
  id serial primary key,
  name text,
  quantity integer,
  favorite_color text
);

select * from stuff;