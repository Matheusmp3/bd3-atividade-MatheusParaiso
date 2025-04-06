const database = 'BD3-NoSQL-AtlasMongoDB' ;
use(database) ;
db['bd3-nosql-atv2'].find (
    {'email' : { $regex: '@gmail.com$' }}
) ;