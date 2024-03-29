const question=[

    {
        'que':'which of the following is the markup language',
        'a':'html',
        'b':'css',
        'c':'js',
        'd':'php',
        'correct':'a'
    },


    {
        'que':'which of the following is the styling language',
        'a':'html',
        'b':'css',
        'c':'js',
        'd':'php',
        'correct':'b'
    },


    {
        'que':'which of the following is the interactive language',
        'a':'html',
        'b':'css',
        'c':'js',
        'd':'php',
        'correct':'c'
    },


    {
        'que':'which of the following is the server level language',
        'a':'html',
        'b':'css',
        'c':'js',
        'd':'php',
        'correct':'d'
    },

    {
        'que':'which of the following is the basic of web development',
        'a':'html',
        'b':'css',
        'c':'js',
        'd':'php',
        'correct':'a'
    }


]


let index=0;
let total=question.length;
let score=0;
let wrong=0;

const questionbox=document.getElementById("question");
const option=document.querySelectorAll(".option");

const loadques=()=>
{


    if(index===total)
    {
        return endQuiz();
    }
    else{

 
    reset();
    startTimer(30);

    const data=question[index];

    questionbox.innerHTML=` ${index+1}) ${data.que}`;

    option[0].nextElementSibling.innerText=data.a;
    option[1].nextElementSibling.innerText=data.b;
    option[2].nextElementSibling.innerText=data.c;
    option[3].nextElementSibling.innerText=data.d;

    
    
    
}
}


const submitquiz=()=>
{
    
    const data=question[index];
    const ans=getanswer();
    
    if(ans===data.correct)
    {

        score++;
    }
    else{
        wrong++;
    }
    
    index++;
    clearInterval(timerInterval)
    loadques();

}

const getanswer=()=>
{
    let ans;
    option.forEach(
        (input)=>
        {
            if(input.checked)
            {
                ans= input.value
;            }
        }
    )
    return ans
}

const reset=()=>
{
   
    option.forEach(
        (input)=>
        {
           input.checked=false;
       
        }
    )
    
}

const endQuiz=()=>
{
    document.getElementById("box").innerHTML=`
    

    <div class="Scoredis">
        <h1>Thankyou:) for playing the quiz!!!</h1>
        <h1>Your Score</h1>
        <div class="score">
        ${score}/${total}
        </div>
        </div>
    </div>
    `



    
}

let timerInterval; // Declare timerInterval as a global variable

const startTimer = (initialSeconds) => {
    let sec = initialSeconds;
    timerInterval = setInterval(function () {
        let timer=document.getElementById('timer')
       timer.innerHTML = '00:' + sec;
       timer.style.color='black';
        sec--;
        if (sec < 0) {
            index++;
            clearInterval(timerInterval);
            loadques();
        }
        if(sec < 10)
        {
         timer.style.color='red';
         sec=`0${sec}`;
        }
       
        
    
    }, 1000);
};

// Example usage:


loadques();


