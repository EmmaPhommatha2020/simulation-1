update shelfie
set name = $1, price = $2, imageurl = $3
where productid = $4;

select * from shelfie;