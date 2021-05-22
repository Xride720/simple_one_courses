var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
    database: 'postgres',
    user: 'xride',
    password: '1234',
    host: 'localhost',
    port: 5432
});

router.post('/add', async function (req, res) {
    console.log(req.body);
    const client = await pool.connect();

    let result = await client.query(`SELECT * FROM task_11 WHERE name = '${req.body.name}'`);

    if (result.rows.length == 0) {
        result = await client.query(`SELECT id FROM task_11 ORDER BY id DESC;`);
        let id;
        if (result.rows.length != 0) {
            let idArr = result.rows.map(item => item.id);
            console.log(idArr);
            for (let i = 0; i <= idArr[0]; i++) {
                if (!idArr.includes(i)) {
                    id = i;
                    break;
                }
            }
            id = !id && id != 0 ? idArr[0] + 1 : id;
        } else id = 0;

        console.log(id);
        await client.query(`INSERT INTO task_11 (id, name) VALUES (${id}, '${req.body.name}')`);

        let respBody = {
            success: true,
            id: id,
            text: `Пользователь создан с ID: ${id}`
        };
        res.status(200).json(respBody);
    } else {
        let respBody = {
            success: false,
            error: 'Пользователь с выбранным именем уже существует'
        };
        res.status(400).json(respBody);
    }


});

router.put('/change_user', async function (req, res) {
    console.log(req.body);
    const client = await pool.connect();

    let result = await client.query(`UPDATE task_11 SET name = '${req.body.name}' WHERE id = ${req.body.id};`);
    console.log(result);
    res.status(200).json({
        success: true,
        text: `Пользователь с ID: ${req.body.id} успешно обновлён`
    });
});

router.get('/all_users', async function (req, res) {
    console.log(req.body);
    const client = await pool.connect();

    const result = await client.query(`SELECT * FROM task_11;`);
    res.status(200).json({ resArr: result.rows });
});

router.delete('/delete_user', async function (req, res) {

    let delete_id = req.body.id;
    const client = await pool.connect();

    const result = await client.query(`DELETE FROM task_11 WHERE id = ${delete_id};`);

    if (result.rowCount == 0) {
        res.status(400).json({
            success: false,
            error: 'Пользователя с таким ID не существует'
        });
    } else {
        res.status(200).json({
            success: true,
            text: `Пользователь с ID: ${delete_id} успешно удалён`
        });
    }
});

/* GET home page. */
router.get('/', async function (req, response, next) {
    response.render('index');
});

module.exports = router;
