var elList = document.querySelector(".film__list");

function normalizDate(format) {
    var date = new Date(format);
    var day = String(date.getDate()).padStart(2, 0);
    var month = String(date.getMonth() + 1).padStart(2,0);
    var year = date.getFullYear();

    return day + '.' + month + '.' + year ;
}

function renderFilms(_films) { 
    for(var i = 0;i < _films.length; i++) {
        // create Element
        var newLi = document.createElement("li")
        var newImg = document.createElement("img")
        var newHeading = document.createElement("h1")
        var newText = document.createElement("p")
        var newTime = document.createElement("time")

        // set Attribute
        newLi.setAttribute("class", "film__item")
        newImg.setAttribute("class", "film__img")
        newImg.setAttribute("src", _films[i].poster   )
        newImg.setAttribute("alt", _films[i].title + ", poster")
        newImg.setAttribute("width", 200)
        newImg.setAttribute("height", 200)
        newHeading.setAttribute("class", "film__heading")
        newText.setAttribute("class", "film__text")
        newTime.setAttribute("class", "film__time")

        // text Content
        newHeading.textContent = _films[i].title;
        newText.textContent = _films[i].overview;
        newTime.textContent = normalizDate(_films[i].release_date)

        // append Child
        newLi.appendChild(newImg);
        newLi.appendChild(newHeading);
        newLi.appendChild(newText);
        newLi.appendChild(newTime);
        elList.appendChild(newLi);
    }
}

renderFilms(films)  