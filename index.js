const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });

// add documents (known inputs)
manager.addDocument("en", "hello", "greeting");
manager.addDocument("en", "hi", "greeting");
manager.addDocument("en", "hey you", "greeting");
manager.addDocument("en", "yo", "greeting");
manager.addDocument("en", "good morning", "greeting");
manager.addDocument("en", "good afternoon", "greeting");
manager.addDocument("en", "good day", "greeting");

// add answers
manager.addAnswer("en", "greeting", "Hey!");
manager.addAnswer("en", "greeting", "Hey there!");
manager.addAnswer("en", "greeting", "Hi!");
manager.addAnswer("en", "greeting", "Yo whatshup!");

// train model
manager.train().then(async () => {
  manager.save();

  let response = await manager.process("en", "hey partner");
  console.log(response);
});
