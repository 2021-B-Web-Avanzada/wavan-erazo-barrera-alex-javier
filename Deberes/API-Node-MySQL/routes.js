const express = require('express');
const routes = express.Router();

routes.get('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 
        if(err) return res.send(err);
        conn.query('SELECT * FROM marca_celular', (err, rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        })
    })
} );

routes.post('/',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 

        if(err) return res.send(err);
        conn.query('INSERT INTO marca_celular SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);
            res.send("La marca se ha registrado");
        })
    })
} )

//el nombre del parametro se define en el url
routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 

        if(err) return res.send(err);
        conn.query('DELETE FROM marca_celular WHERE id_marca = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send("Se ha eliminado la marca");
        })
    })
} )

routes.put('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('UPDATE marca_celular SET ? WHERE id_marca = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send("Se ha actualizado la marca");
        })
    })
} )

//========Celulares==========
routes.get('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 
        if(err) return res.send(err);
        conn.query('SELECT * FROM celular WHERE id_marca = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        })
    })
} );

routes.post('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 

        if(err) return res.send(err);
        conn.query('INSERT INTO celular SET ?, id_marca = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send("El celular se ha registrado");
        })
    })
} )

routes.delete('/:id/:idCel',(req, res)=>{
    req.getConnection((err, conn)=>{
        //Hacemos la query que queremos 

        if(err) return res.send(err);
        conn.query('DELETE FROM celular WHERE id_marca = ? AND id_celular = ?', [req.params.id, req.params.idCel], (err, rows)=>{
            if(err) return res.send(err);
            res.send("Se ha eliminado el celular");
        })
    })
} )

routes.put('/:id/:idCel',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('UPDATE celular SET ? WHERE id_marca = ? AND id_celular = ?', [req.body, req.params.id, req.params.idCel], (err, rows)=>{
            if(err) return res.send(err);
            res.send("Se ha actualizado el celular");
        })
    })
} )

module.exports = routes