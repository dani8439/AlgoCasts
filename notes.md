# Setup Notes

`Jest` command line tool installed, is a tool to evaluate all the tests in the exercises.

In command line, cd into `exercises` directory, and run `jest`

Won't want to run all the exercises all the time, want to run one set for each problem. So need to modify how to run `jest` command slightly.

To run for say, the fibonacci question, run `jest fib/test.js --watch`

If that gives you an error, try instead running `jest fib --watch`

Whenever you change any code in the structure, the test will run manually. But if you want to run it again, can press the `enter` key on keyboard.

Once done running all the tests on your terminal, press `CTRL + C` to stop the process from running.
