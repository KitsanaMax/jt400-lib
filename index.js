var java = require("java")
java.classpath.push("commons-lang3-3.1.jar")
java.classpath.push("commons-io.jar")

var list1 = java.newInstanceSync("java.util.ArrayList")
console.log(list1.sizeSync());
list1.addSync('item1');
console.log(list1.sizeSync());
