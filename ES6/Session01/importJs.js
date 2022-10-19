import { test1,studentName } from "./namedExport";
import * as test from "./namedExport";
import defaultExport from "./defaultExport";
test1();
console.log(studentName);
test.test2();
defaultExport();