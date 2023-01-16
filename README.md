Запусти команды в терминале и сделай отдельный скриншот результата выполнения
каждой команды.

# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list -
https://monosnap.com/file/aRLkmJSz0DHCjjZejhIV6RmPWcI03V

# Получаем контакт по id

node index.js --action get --id 5 -
https://monosnap.com/file/YnxOu7i81G5fppwryo0uDRr0jghtsv

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone -
https://monosnap.com/file/fSTh5eywBRYh7zvoudQ63g1VuUH6K6 322-22-22 -

# Удаляем контакт

node index.js --action remove --id=3 -
https://monosnap.com/file/XYb58rZOkl6955x6zrkrBLEcgGbjnK
