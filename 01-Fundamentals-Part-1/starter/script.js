let Mark = {
  name: "Mark Miller",
  height: 1.69,
  mass: 78,
  cal: function () {
    return this.mass / this.height ** 2;
  },
};
let John = {
  name: "John Smith",
  height: 1.95,
  mass: 92,
  cal: function () {
    return this.mass / this.height ** 2;
  },
};

if (Mark.cal() > John.cal()) {
  console.log(
    Mark.name +
      ` has ${Mark.cal()} more BMI than ` +
      John.name +
      "=" +
      John.cal()
  );
} else {
  console.log(
    John.name +
      ` has ${John.cal()}more BMI than ` +
      Mark.name +
      "=" +
      Mark.cal()
  );
}
