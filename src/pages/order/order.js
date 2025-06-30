const element = document.querySelector('.js-choice');
 const choices = new Choices(element, {
   choices : [
     {
      value: 'value2',
      label: 'Москва',
    },
    {
      value: 'value1',
      label: 'Москва',
    },
     {
       value: 'value3',
       label: 'Москва',
     },
     {
       value: 'value4',
       label: 'Москва',
     },
     {
       value: 'value5',
       label: 'Москва',
     },
     {
       value: 'value6',
       label: 'Москва',
     },
     {
       value: 'value7',
       label: 'Москва',
     },
   ],
   searchEnabled: true,
   searchChoices: true,
   searchResultLimit: 4,
   loadingText: 'Загрузка...',
   noResultsText: 'Результатов не найдено',
   noChoicesText: 'Нет вариантов на выбор',
   itemSelectText: '',
   classNames: {
   }
 });
