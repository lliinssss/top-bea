

document.getElementById("button_main_page").onclick = function() {
    document.getElementById('section_2').scrollIntoView({
        behavior: 'smooth'
    });
};

document.getElementById("button_about_us").onclick = function() {
    document.getElementById('section_4').scrollIntoView({
        behavior: 'smooth'
    });
};

document.getElementById("button_contacts").onclick = function() {
    document.getElementById('section_10').scrollIntoView({
        behavior: 'smooth'
    });
};
document.getElementById("button_contact_us").onclick = function() {
    document.getElementById('section_10').scrollIntoView({
        behavior: 'smooth'
    });
};



document.getElementById("button_account").onclick = function() {
    document.getElementById("div_login").classList.remove("hidden")
    document.getElementById("div_login").style.display = "flex";
    document.querySelector('.div_login').classList.add('active');
    document.getElementById("invis_div").style.display = "flex";

};

// Закрытие модального окна при клике вне его содержимого
// window.onclick = function(event) {
//     if (event.target !== div_login) {
//         div_login.style.display = "block";
//     }
// }





// document.getElementById("LogBtn").onclick = function() {
// 	if (document.getElementById("loginEmail").value == "") {
// 		alert("Введите значения!");
// 	} else {
// 		document.getElementById("div_login").classList.add("hidden")
// 		document.getElementById("div_login").style.display = "none";
// 	}
// }

// document.getElementById("closeService").onclick = function () {
// 	document.getElementById("serviceModal").classList.add("hidden")
// 	document.getElementById("serviceModal").style.display = "none";
// }










// document.getElementById("NoteBtn").onclick = function() {
// 	if (document.getElementById("select_service").value == "" || document.getElementById("service_data").value == "") {
// 		alert("Введите значения!");
// 	} else {
// 		document.getElementById("overlay").classList.remove("hidden")
// 		document.getElementById("loginModal").classList.add("hidden")
// 		document.getElementById("loginModal").style.display = "none";
// 		document.getElementById("registerModal").classList.add("hidden")
// 		document.getElementById("registerModal").style.display = "none";
// 		document.getElementById("serviceModal").classList.add("hidden")
// 		document.getElementById("serviceModal").style.display = "none";
// 		document.getElementById("noteModal").classList.remove("hidden")
// 		document.getElementById("noteModal").style.display = "flex";
// 	}}

// document.getElementById("closeNote").onclick = function () {
// 	document.getElementById("overlay").classList.add("hidden")
// 	document.getElementById("noteModal").classList.add("hidden")
// 	document.getElementById("noteModal").style.display = "none";

// }




// ymaps.ready(init);

// function init(){
//     var myMap = new ymaps.Map("map", {
//         center: [55.778216, 37.662439],
//         zoom: 15
//         },);
    
//     ['zoomControl', 'searchControl', 'rulerControl',
//     'typeSelector', 'fullscreenControl', 'trafficControl'].forEach(elem => myMap.controls.remove(elem));
    
// }




// function init() {
//     var myMap = new ymaps.Map("map", {
//         center: [55.778216, 37.662439], // Устанавливаем центр карты
//         zoom: 12 // Уровень масштабирования
//     });

//     // Создание метки на карте
//     var myPlacemark = new ymaps.Placemark([55.778216, 37.662439], {
//         balloonContent: 'Точка с координатами 55.778216, 37.662439' // Содержимое балуна
//     });

//     // Добавление метки на карту
//     myMap.geoObjects.add(myPlacemark);

//     ['zoomControl', 'searchControl', 'rulerControl',
//         'typeSelector', 'fullscreenControl', 'trafficControl'].forEach(elem => myMap.controls.remove(elem));
// }

const suggestionsData = [
    "Связаться с нами",
    "Маникюр",
    "Педикюр",
    "Стрижка",
    "Укладка",
    "Массаж спины",
    "Массаж лица",
    "Процедуры для лица",
    "Массаж ног",
    "Макияж"
];

function showSuggestions(value) {
    const suggestionsContainer = document.getElementById("suggestions");
    
    // Очищаем предыдущие подсказки
    suggestionsContainer.innerHTML = '';

        if (value.length === 0) {
            suggestionsContainer.style.display = 'none'; // Скрываем, если ничего не введено
            return;
        }

        // Фильтруем подсказки
        const filteredSuggestions = suggestionsData.filter(item => 
            item.toLowerCase().includes(value.toLowerCase())
        );

        // Если есть подходящие подсказки
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = suggestion;

                // Добавляем событие клика на подсказку
                suggestionItem.onclick = () => {
                    document.getElementById("search").value = suggestion; // Устанавливаем значение в поле ввода
                    suggestionsContainer.style.display = 'none'; // Скрываем подсказки
                };

                suggestionsContainer.appendChild(suggestionItem);
            });
            
            suggestionsContainer.style.display = 'block'; // Показываем контейнер с подсказками
        } else {
            suggestionsContainer.style.display = 'none'; // Скрываем, если нет подходящих подсказок
        }
    }






    document.getElementById('searchButton').addEventListener('click', function () {
        const searchTerm = document.getElementById('search').value.trim();

        // Удаляем предыдущие выделения
        document.querySelectorAll('.highlight').forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
        });

        if (searchTerm) {
            const regex = new RegExp(`(${searchTerm})`, 'gi'); // Регулярное выражение для поиска
            let found = false;

            // Проходим по всем текстовым узлам
            const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
            while (walk.nextNode()) {
                const node = walk.currentNode;

                if (regex.test(node.nodeValue)) {
                    found = true;

                    // Создаем элемент <span> для выделения
                    const span = document.createElement('span');
                    span.className = 'highlight';
                    span.textContent = node.nodeValue.match(regex)[0];

                    // Разбиваем текстовый узел
                    const parts = node.nodeValue.split(regex);
                    const fragment = document.createDocumentFragment();

                    parts.forEach((part, index) => {
                        if (index % 2 === 0) {
                            fragment.appendChild(document.createTextNode(part));
                        } else {
                            const highlightSpan = span.cloneNode();
                            highlightSpan.textContent = part;
                            fragment.appendChild(highlightSpan);
                        }
                    });

                    // Заменяем старый текстовый узел на новый фрагмент
                    node.parentNode.replaceChild(fragment, node);

                    // Прокручиваем к первому совпадению
                    span.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break; // Останавливаемся на первом совпадении
                }
            }

            if (!found) {
                alert('Слово не найдено.');
            }
        } else {
            alert('Введите слово для поиска.');
        }
    });

    


        window.onclick = function(event) {
            if (event.target == document.getElementById("invis_div")) {
                document.getElementById("div_login").style.display = "none";
            }
        }




        document.getElementById("LogBtn").onclick = function() {
            const loginEmailInput = document.getElementById('loginEmail');
        
            if (loginEmailInput) {
                const emailValue = loginEmailInput.value.trim(); // Get the value and trim whitespace
        
                if (emailValue === "") {
                    alert("Пожалуйста, введите свой email."); // Or display an error message in the page
                } else {
                    window.location.href = "service.html"; // Redirect if email is not empty (or do something else)
                }
            } else {
                alert("Login email input field not found!"); // Handle the case where the input field doesn't exist
            }
        };
        
      

        