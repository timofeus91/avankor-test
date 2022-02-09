- Все задания выполнять не обязательно. По желанию и возможности.
- Для создания приложения необходимо использовать стандартную команду "npx create-react-app my-app";
- Необходимо подключить и настроить базовые пакеты webpack и babel (либо аналоги);
- Для выполнения задания необходимо использовать только базовые модули ReactJS;
- Верстка не столь важна, но желательно предоставить "читаемый" дизайн (без использования сторонних библиотек);
- После ознакомления с задачей, сообщите, пожалуйста, примерный срок ее выполнения;

Имеется список значений, приложенный в файле list.json. Идентификатор записей - entryPointDocument, выводимое наименование - description.
Необходимо создать одну страницу, на который выполнить следующие задания:

1. Создать и расположить (по одному каждого типа) следующие компоненты для выбора значения из списка (list.json). При выборе значения в одном компоненте должен отображаться выброр в остальных созданных компонентах. То есть одно актуальное выбранное значение для всех компонент. Необходимы компоненты на базе следующих основных html-элементов:
- select (option);
- input type="radio";
- table с выбором значения и отметкой текущего при нажатии на строку (ячейку) таблицы;

2. Создать компонент для выбора значения, аналогичный 1.3 (table) с построением таблицы на основе CSS grid.

3. Отсортировать значения списка кроме последнего ("Итоговые значения") по выводимому наименованию (description) в прямом алфавитном порядке. Запись "Итоговые значения" должна быть всегда последней в списке.

4. Создать компонент (input) для добавления новых значений в исходный список. Добавляемые значения должны отображаться в всех ранее созданных компонентах. Способ генерирации идентификатора записи (entryPointDocument) - на свое усмотрение, выводимое наименование (description) - вводимый в input текст.

5. Создать один модульный тест для контроля корректности добавления значения через созданный в п. 2.4 компонент добавления и отображение в одном из компонентов вывода (п. 2.1).

Если в каком-либо задании есть некорректность, допустимо выполнить ее, исходя из своей трактовки. Либо обратитесь за уточнением по указанным ниже контактам.

КОнтакты для связи:
Владимир Дмитриев
Тел: +7 (965) 183-62-61
Email: vmdmitriev@avancore.ru
Skype: vladimir.m.dmitriev


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
