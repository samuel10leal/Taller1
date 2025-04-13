"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataCourse_1 = require("./dataCourse"); // Importar dataCourses
const coursesTbody = document.getElementById('courses'); // Nodo tbody que tiene el id="courses"
const inputSearchBox = document.getElementById('search-box'); // Input de búsqueda
const btnfilterByName = document.getElementById('button-filterByName'); // Botón de filtro
function renderCoursesInTable(courses) {
    courses.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
        coursesTbody.appendChild(trElement);
    });
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        coursesTbody.removeChild(coursesTbody.firstChild);
    }
}
function getTotalCredits(courses) {
    let totalCredits = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
}
function applyFilterByName() {
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered = searchCourseByName(text, dataCourse_1.dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourse_1.dataCourses : courses.filter(c => c.name.match(nameKey));
}
btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(dataCourse_1.dataCourses);
