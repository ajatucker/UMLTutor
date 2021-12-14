function checkAns()
{
  var question1 = document.quiz.question1.value;
  let question2 = [];
  const question2Ans = ["device: User PC", "artifact: HTML5", "device: Database Server", "artifact: SQL database"]
  //let question3 = [];
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  
  var correct = 0;

  
  //for(var i = 0; i < 5; i++)
  //{
    var text = document.quiz.question2one.value;
    question2.push(text);
    text = document.quiz.question2two.value;
    question2.push(text);
    text = document.quiz.question2three.value;
    question2.push(text);
    text = document.quiz.question2four.value;
    question2.push(text);
   
  //}

  //var question2 = document.quiz.question2.value;
  //var question3 = document.quiz.question3.value;

  if(question1 == "False")
  {
    document.getElementById("incorrectTF").innerHTML = "Incorrect!";
  }
  else
  {
    document.getElementById("correctTF").innerHTML = "Correct!";
  }

  for(var i = 0; i < question2.length; i++)
  {
    if(question2[i] == question2Ans[i])
    {
      correct++;
    }
  }
  //var checkArr = false;
  //checkArr = arraysEqual(question2, question2Ans);
  if(correct == 4)
  {
    document.getElementById("correctMatch").innerHTML = "Correct!";
  }
  else
  {
    document.getElementById("incorrectMatch").innerHTML = "Incorrect!";
  }

  const question3 = document.querySelectorAll('input[name="question3"]:checked');
  let userAns3 = [];
  question3.forEach((checkbox) => {
    userAns3.push(checkbox.value);
    });
  if(userAns3[0] == "3" && userAns3[1] == "5" )
  {
    document.getElementById("correctBadTraits").innerHTML = "Correct!";
  }
  else
  {
    document.getElementById("incorrectBadTraits").innerHTML = "Incorrect! Think about people who need to know this diagram.";
  }

  if(question4 == "False")
  {
    document.getElementById("correctTF2").innerHTML = "Correct!";
  }
  else
  {
    document.getElementById("incorrectTF2").innerHTML = "Incorrect!";
  }

  if(question5 == "communication association")
  {
      
        document.getElementById("correctScenario").innerHTML = "Correct!";
      
  }
  else
  {
    document.getElementById("incorrectScenario").innerHTML = "Incorrect! What connects two nodes?";
  }
}
/*
:hover + .hide{
  color: black;
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(0%, 0%);
  -ms-transform: translate(0%, 0%);
  display:block;
}

.hide{
  display:none;
}
*/