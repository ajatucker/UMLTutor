
/*
function reveal()
{
    document.getElementById("reveal").style.display = "block";
}
*/

function checkAns()
{
  var question1 = document.quiz.question1.value;
  let question2 = [];
  const question2Ans = ["Camera TakePhoto", "Bank CheckBalance", "List Search", "Light Turnon", "Quiz Check"]
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
    text = document.quiz.question2five.value;
    question2.push(text);
  //}

  //var question2 = document.quiz.question2.value;
  //var question3 = document.quiz.question3.value;

  if(question1 == "False")
  {
    document.getElementById("correctTF").innerHTML = "Correct!";
    document.getElementById("incorrectTF").innerHTML = "";
  }
  else
  {
    document.getElementById("correctTF").innerHTML = "";
    document.getElementById("incorrectTF").innerHTML = "Incorrect! User stories should be created first because they help define what needs to be built for the system along with requirements";
  }

  for(var j=0; j<question2Ans.length;j++)
  {
      for(var i = 0; i < question2.length; i++)
    {
      if(question2[i] == question2Ans[j])
      {
        correct++;
      }
    }
  }
  //var checkArr = false;
  //checkArr = arraysEqual(question2, question2Ans);
  if(correct == 5)
  {
    document.getElementById("correctMatch").innerHTML = "Correct!";
    document.getElementById("incorrectMatch").innerHTML = "";
  }
  else
  {
    document.getElementById("correctMatch").innerHTML = "";
    document.getElementById("incorrectMatch").innerHTML = "Incorrect! Remember, objects and classes are things, and methods are what is done to them. ";
  }

  const question3 = document.querySelectorAll('input[name="question3"]:checked');
  let userAns3 = [];
  question3.forEach((checkbox) => {
    userAns3.push(checkbox.value);
    });
  if(userAns3[0] == "4" && userAns3[1] == "5")
  {
    document.getElementById("correctBadTraits").innerHTML = "Correct!";
    document.getElementById("incorrectBadTraits").innerHTML = "";
  }
  else
  {
    document.getElementById("correctBadTraits").innerHTML = "";
    document.getElementById("incorrectBadTraits").innerHTML = "Incorrect! Remember, every class should be well defined, and this includes limiting links to other classes.";
  }

  if(question4 == "False")
  {
    document.getElementById("correctTF2").innerHTML = "Correct!";
    document.getElementById("incorrectTF2").innerHTML = "";
  }
  else
  {
    document.getElementById("correctTF2").innerHTML = "";
    document.getElementById("incorrectTF2").innerHTML = "Incorrect! Remember, some words will be used as attributes of your class.";
  }

  if(question5 == "receipt")
  {
    document.getElementById("correctScenario").innerHTML = "Correct!";
    document.getElementById("incorrectScenario").innerHTML = "";
  }
  else
  {
    document.getElementById("correctScenario").innerHTML = "";
    document.getElementById("incorrectScenario").innerHTML = "Incorrect! Think about what the client wants added.";
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