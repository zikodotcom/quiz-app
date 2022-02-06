function Car(name,model,age){ 
        this.name = name,
        this.model = model,
        this.age = age
}
Car.prototype.start = function start(){
    console.log(this.name + ' ' + 'start');
}
const obj = new Car('BMW','A9',2018);
console.log(obj);
obj.start()