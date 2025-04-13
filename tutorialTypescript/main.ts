import { Course } from "./course";
import { dataCourses } from "./dataCourse"; // Importar dataCourses


const coursesTbody: HTMLElement = document.getElementById('courses')!; // Nodo tbody que tiene el id="courses"
const inputSearchBox: HTMLInputElement = document.getElementById('search-box') as HTMLInputElement; // Input de búsqueda
const btnfilterByName: HTMLElement = document.getElementById('button-filterByName')!; // Botón de filtro


function renderCoursesInTable(courses: Course[]): void {
  courses.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.name}</td>
                           <td>${c.professor}</td>
                           <td>${c.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

function clearCoursesInTable(): void {
    while (coursesTbody.hasChildNodes()) {
      coursesTbody.removeChild(coursesTbody.firstChild!);
    }
  }


function getTotalCredits(courses: Course[]): number {
    let totalCredits: number = 0;
    courses.forEach((course) => totalCredits = totalCredits + course.credits);
    return totalCredits;
  }
  

  function applyFilterByName() { 
    let text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
  }
  
  function searchCourseByName(nameKey: string, courses: Course[]) {
    return nameKey === '' ? dataCourses : courses.filter( c => 
      c.name.match(nameKey));
  }


btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(dataCourses);

