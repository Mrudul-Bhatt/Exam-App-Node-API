const mongoose = require('mongoose');

const Question = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answers: [String],
    correct:{ 
      type: String,
      required: true
    }


});

const Question = mongoose.model('Question', Question);

module.exports = Question;




/*{
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: "099099"
  },
*/

