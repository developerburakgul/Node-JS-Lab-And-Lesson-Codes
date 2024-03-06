const yargs = require("yargs");
const math = require("./mathFunctions");

yargs.version("1.1.0");

yargs.command({
  command: "calculate",
  describe: "Calculate the math operations",
  builder: {
    number1: {
      describe: "Operand1",
      demandOption: true,
      type: "number",
    },
    operator: {
      describe: "Operator",
      demandOption: true,
      type: "String",
    },
    number2: {
      describe: "Operand2",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    try {
      var result = math.calculate(argv.number1, argv.operator, argv.number2);
      console.log("Result : ", result);
    } catch (error) {
      console.log(error);
    }
  },
});
yargs.parse();
