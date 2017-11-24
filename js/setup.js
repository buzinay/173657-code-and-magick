'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Выбираем нужный элемент в разметке и удаляем класс скрытия
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Находим в разметке список пожих персонажей и шаблон
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// Функция для выбора случайного элемента в массиве
var getRandomElement = function (array) {
  var randomElement = Math.floor(Math.random() * array.length);
  return randomElement;
};

// Функция создания одного объекта Волшебника
var createWizard = function () {
  var wizard = {};
  wizard.name = WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SURNAME[getRandomElement(WIZARD_SURNAME)];
  wizard.coatColor = WIZARD_COAT_COLOR[getRandomElement(WIZARD_COAT_COLOR)];
  wizard.eyesColor = WIZARD_EYES_COLOR[getRandomElement(WIZARD_EYES_COLOR)];
  return wizard;
};

// Создаем массив из объектов Волшебник
var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards[i] = createWizard();
}

// Функция создания DOM-элемента из шаблона
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Функция формирования фрагмента кода
var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

// Вставляем элемент в разметку
similarListElement.appendChild(fragment);

var similarList = document.querySelector('.setup-similar');
similarList.classList.remove('hidden');
