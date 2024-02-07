class Kuruma {
  constructor(brand, weight, color, speed, brake, engine) {
    this.brand = brand;
    this.weight = weight;
    this.color = color;
    this.speed = speed;
    this.brake = brake;
    this.engine = engine;
  }
  checkSpeed(time) {
    return `${this.speed * time} kilometrov za ${time} chasov`;
  }
  getInfo() {
    return `Brand:${this.brand}, weight:${this.weight}kg, color: ${this.color}, speed:${this.speed}, Brake:${this.brake}, Engine:${this.engine}`;
  }
  ChangeParametrs(weight, color, engine) {
    this.weight = weight;
    this.color = color;
    this.engine = engine;
  }
}
const Cadillac = new Kuruma("Cadillac", 1870, "white", 322, 25, 677);
const Honda = new Kuruma("Honda", 1230, "blue", 220, 45, 557);
const ChevroletCorvette = new Kuruma(
  "ChevrolletCorvette",
  1500,
  "grey",
  95,

  30,
  785
);

Honda.ChangeParametrs(2500, "violet", 677);

console.log(Cadillac.checkSpeed(5));
console.log(Cadillac.getInfo());
// Cadillac.color = "pink";
console.log(Honda.getInfo());
console.log(ChevroletCorvette.getInfo());
