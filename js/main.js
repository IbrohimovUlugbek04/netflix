var countries = ["English", "Русский", "O'zbek"];

var siteContaoner = document.createElement("div")
siteContaoner.classList.add("container");
// site header elament start 
var siteHeader = document.querySelector(".site-header");
var elHeaderContainer = document.querySelector(".container")
var siteHeaderWrapper = document.createElement("div");
var headerLogoLink = document.createElement("a");
var headerlogo = document.createElement("img");
var headerForm = document.createElement("form");
var headerSelectBox = document.createElement("div");
var headerSelect = document.createElement("select");
var headerLink = document.createElement("a");
// site header elament finish 
// site main elament start 
var elSiteMain = document.querySelector(".site-main");
var sectinHero = document.createElement("section");
sectinHero.classList.add("hero");
var heroWrapper = document.createElement("div");
heroWrapper.classList.add("hero__wrapper");
var heroList = document.createElement("ul");
heroList.classList.add("hero__list");
// site main elament finish 

// site header start 
siteHeader.append(elHeaderContainer);
siteHeaderWrapper.classList.add("site-header__wrapper");
elHeaderContainer.append(siteHeaderWrapper);
headerLogoLink.classList.add("site-header__logo__link");
headerLogoLink.href = "./index.html";
headerLogoLink.append(headerlogo);
headerlogo.classList.add("site-header__logo-img");
headerlogo.src = "./images/Netflix_2015_logo.svg";
headerlogo.alt = "Netflix";
headerForm.classList.add("site-header__form");
headerForm.action = "https://echo.htmlacademy.ru/";
headerForm.method = "POST";
headerForm.autocomplete = "off";
headerForm.append(headerSelectBox);
headerSelectBox.classList.add("site-header__select-box");
headerSelectBox.append(headerSelect);
headerSelect.classList.add("site-header__select");
headerSelect.name = "countries-list";
headerSelect.ariaLabel = "countries";
headerLink.classList.add("site-header__link");
headerLink.href = "#";
headerLink.textContent = "Sign In";
for (var count of countries) {
  var headerOption = document.createElement("option");
  headerOption.textContent = count;
  headerOption.value = count;
  headerSelect.append(headerOption);
};
siteHeaderWrapper.append(headerLogoLink, headerForm, headerLink);
// site header finish 

// site main start
sectinHero.append(siteContaoner);
siteContaoner.append(heroWrapper);
heroWrapper.append(heroList);
for (const movie of kinolar) {
  var movieItem = document.createElement("li");
  movieItem.classList.add("hero__item")
  var movieTitle = document.createElement("h3");
  var movieYear = document.createElement("span");
  var movieText = document.createElement("p");
  var movieGenres = document.createElement("span");
  movieTitle.textContent = movie.title;
  movieYear.textContent = `Year: ${movie.year}`;
  movieText.textContent = movie.cast.join(", ");
  movieGenres.textContent = `Genres: ${movie.genres}`;
  movieItem.append(movieTitle, movieYear, movieText, movieGenres)
  heroList.appendChild(movieItem)
}
elSiteMain.append(sectinHero);
// site main finish 