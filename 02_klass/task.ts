class Task {
  name: string;
  description: string;
  deadline: Date;
  priority: number;

  constructor(name: string, description: string, deadline: Date, priority: number) {
      this.name = name;
      this.description = description;
      this.deadline = deadline;
      this.priority = priority;
  }

  displayTaskInfo() {
      console.log(`Task: ${this.name}`);
      console.log(`Description: ${this.description}`);
      console.log(`Deadline: ${this.deadline}`);
      console.log(`Priority: ${this.priority}`);
  }
}

// Esimene ülesanne
const task1 = new Task("Projekti aruande koostamine", "Aruande kirjutamine ja vormistamine", new Date("2024-02-28"), 2);

// Teine ülesanne
const task2 = new Task("Kodu koristamine", "Tolmuimejaga koristamine ja pesemine", new Date("2024-03-15"), 1);

// Näita ülesande infot
console.log("Esimene ülesanne:");
task1.displayTaskInfo();

console.log("\nTeine ülesanne:");
task2.displayTaskInfo();
