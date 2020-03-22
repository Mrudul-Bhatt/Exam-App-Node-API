const mongoose = require('mongoose');

const Question = new mongoose.Schema({
    
    id: {
      type: Number,
      required: true
    
    },
    question: {
      type: String,
      required: true
    },
    answers: [String],
    correct:{ 
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});


module.exports = mongoose.model('Question', Question);;




/*{
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Richard Branson", "Alan Sugar", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: "099099"
  },
*/

