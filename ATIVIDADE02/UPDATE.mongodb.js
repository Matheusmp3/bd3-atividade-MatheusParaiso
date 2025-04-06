const database = 'BD3-NoSQL-AtlasMongoDB' ;
use(database) ;
db['bd3-nosql-atv2'].updateOne (
    { 'cod_aluno' : 1 } ,
    {
        $set:{
            "cod_aluno": 51 ,
            "cod_turma": 101 ,
            "nome": "Isabela Torres" ,
            "cpf": "42434445462" ,
            "rg": "424344454" ,
            "telefone_aluno": "11937383940" ,
            "telefone_responsavel": "11940393837" ,
            "email": "isabela.torres@etec.sp.gov.br" ,
            "data_nascimento": "2005-10-21T00:00:00"}}
) ;
db['bd3-nosql-atv2'].find();
