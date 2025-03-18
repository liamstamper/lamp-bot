import { promptModel } from "./app/api/[...route]/helpers/Groq";

const testDiff = `
diff --git a/index.js b/index.js
index abc123..def456 100644
--- a/index.js
+++ b/index.js
@@ -1,3 +1,3 @@
-const greet = (name) => console.log('Hello '+name)
+const greetUser = (username) => { console.log("Hi " + username); }
`;

promptModel(testDiff)
  .then((response) => {
    console.log(response.choices[0]?.message?.content || "No response.");
  })
  .catch(console.error);
