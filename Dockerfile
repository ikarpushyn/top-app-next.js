# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущей директории в рабочую директорию
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем переменные окружения
ENV NODE_ENV production
ENV PORT 3000

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD [ "npm", "start" ]
