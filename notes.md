# Setup Notes

`Jest` command line tool installed, is a tool to evaluate all the tests in the exercises.

In command line, cd into `exercises` directory, and run `jest`

Won't want to run all the exercises all the time, want to run one set for each problem. So need to modify how to run `jest` command slightly.

To run for say, the fibonacci question, run `jest fib/test.js --watch`

If that gives you an error, try instead running `jest fib --watch`

Whenever you change any code in the structure, the test will run manually. But if you want to run it again, can press the `enter` key on keyboard.

Once done running all the tests on your terminal, press `CTRL + C` to stop the process from running.

To pop into debugger when testing out your code, throw in a debugger statement. Then cd into whatever directory you're working in. You have to call the function with an argument.

Then call `node inspect index.js` and it will run debugger.

Can write `c` or `cont` to continue evaluating code.

To inspect something have to do repl mode `repl` and can then type in `str` or variable name. or copy over code.

`ctrl c` kicks you out of the repl and back to debug mode.

and `ctrl c` will kick you out of it completely.

If you place a debugger within a for loop, or `map` etc, it will run multiple times, and can keep clicking through.
