// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция, выполняющая фильтрацию
let getCoursesByFilter = (courses, range) => {
    let [start, end] = range;
    return courses.filter(course =>
        (end ? end >= course.prices[0] : true) &&
        (course.prices[1] ? start <= course.prices[1] : true));
}

// Функция, выполняющая сортировку. Если второй аргумент true, то сортирует по возрастанию
// левой границы цены, если false - по возрастанию левой границы цены
let getSortCourses = (courses, isIncrease) => {
    return courses.sort((a, b) => {
        let endA = a.prices[1];
        let endB = b.prices[1];
        if (!endA) {
            endA = Number.MAX_VALUE;
        }
        if (!endB) {
            endB = Number.MAX_VALUE;
        }
        if (isIncrease) {
            return a.prices[0] - b.prices[0] == 0
                ? endA - endB : a.prices[0] - b.prices[0]
        }
        return b.prices[0] - a.prices[0] == 0
            ? endB - endA : b.prices[0] - a.prices[0]
    });
}

console.log(getCoursesByFilter(courses, requiredRange1));
console.log(getCoursesByFilter(courses, requiredRange2));
console.log(getSortCourses(courses, false));
console.log(getSortCourses(getCoursesByFilter(courses, requiredRange3), true));