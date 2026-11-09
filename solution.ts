function multipliValue(a : number, b : number = 2){
    return a*b;
}

function processInput(value: string | number | boolean){
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    if(typeof value ==="number"){
        return value*10;
    }
    if(typeof value === "boolean"){
        if(value === true){
            return "Active";
        }
        else{
            return "Inactive";
        }
    }
}


function formatCoordinate(location: readonly [number, number, string]) {
    const [latitude, longitude, locationName] = location;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays:T[][]) {
    const combined: T[] = [];
    for (const array of arrays) {
        combined.push(...array);
    }
    return combined;
}



interface Course {
    title:string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number) {
    return courses.filter(
        course => course.isPublished && course.students >= minStudents
    );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K) {
    return items.map(item => item[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number) {
    return new Promise<string>((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        setTimeout(() => resolve("Access Granted"), 1000);
    });
}







