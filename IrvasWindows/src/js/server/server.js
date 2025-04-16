const express = require('express');
const app = express();
const cors = require('cors'); // Импортируем CORS

app.use(cors()); // Разрешаем все запросы с любых доменов
app.use(express.json());

app.post('/api/data', (req, res) => {
    console.log(req.body); // Тело POST-запроса
    res.json({ status: 'OK', data: req.body });
});

app.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'));