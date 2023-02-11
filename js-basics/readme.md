Q) What runs javascript outside the browser?
Ans- Node

Q) Name 5 things javascript can do?
Ans- 1. Adding interactive behavior to web pages
     2. Building web servers and developing server applications
     3. Creating web and mobile apps
     4. You can write plugins for popular applications
     5. Building Chatbots
     6. JavaScript as a Serverless Computing Programming Langauge

Q) When was ECMAScript first released?
Ans- 1997

Q) How do you log to the console?
Ans- Open up your browser
     Right Click on  empty area and go to inspect element
     This opens up the developer tools. Here, select the console tab. This is the Javascript console and you can write any valid javascript here.
     Type console.log(‘Hello World’); press enter when done
     You would see the Hello World message on the console.

Qus)List  the tech fields that use javascript?
Ans- Mobile Apps developers
     Front-end Web Developers
     Back-end Web Developers
     Desktop Application developers
     Game Developers
     Artificial Intelligence
     Data Visualization developers
     Embedded Device Developers and IoT

Qus) Differentiate between statically typed and dynamically typed programing languages and give example of languages that fall under each category
Ans- 1. dynamically-typed languages perform type checking at runtime, while statically typed languages perform  type checking at compile time. This means that scripts written in dynamically-typed languages (like Groovy) can compile even if they contain errors that will prevent the script from running properly (if at all). If a script written in a statically-typed language (such as Java) contains errors, it will fail to compile until the errors have been fixed.
2. statically-typed languages require you to declare the data types of your variables before you use them, while dynamically-typed languages do not.
3. Examples of Statically typed languages include Java, C, C++, pascal.
4. Examples  of dynamically-typed progamming language Perl, Ruby, Python, PHP, JavaScript.

Qus) differenciate between the javascript datatypes "null" and "undefined"&nbsp?
Ans- Datatype: undefined
The purpose of an undefined datatype is to denote an absence of a meaningful value. Many operations in JavaScript produce a meaningless result and to represent that, they return an undefined value, simply, because they have to return something!

A variable in JavaScript that is without any value has a value of undefined. It means a variable declared, but no value has been assigned a value. The datatype of a variable that holds an undefined value is also 'undefined'.

var x;                    // its value is 'undefined' and type is 'undefined'

You can also empty an existing variable that has some existing value by setting its value as undefined.

var x = 100;

x = undefined;                    // its value is now 'undefined' and type is 'undefined'

You should know that an empty string is different from an undefined value!

var x = '';                    // its value is '' and type is 'string'

DATATYPE: NULL
The null value denotes nothingness. It is supposed to denote something that does not exist.

A variable in JavaScript that has a null value is of the 'object' datatype.

var x = null;                    // its value is null and type is 'object'

You can empty a variable that holds an existing object by setting it to null without changing the datatype.

var x = {firstname: 'Jane', surname: 'Doe'};            // its type is 'object'

x = null;                    // its value is null but type is still 'object'



