const express = require('./js/node_modules/express');
const app = express();
const path = require('path');

// Установка пути к статическим файлам (HTML, CSS, изображения и т.д.)
app.use('/js', express.static(path.join(__dirname, 'node_modules')));

// Маршрут для загрузки HTML-файла
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});