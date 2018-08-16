update stuff
set 
  name = $2, 
  quantity = $3, 
  favorite_color = $4
where id = $1;

select * from stuff;