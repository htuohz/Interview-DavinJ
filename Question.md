###### 1. why my header component is like:
######   < header> <ThemeSwitcher / > <Navigation / > </ header >
###### but long's header is like:
######  < header class="nav"> < div class="nav-left"> < Logo / > </ div> < div class="nav-right"> < Navigation / > </ div> </ header>

######  

###### 2.    {answers.map((answer, index) => (
######        < div key={index}>
######          < input type="checkbox" checked={answer.correctedAnswer} />
######          < input placeholder="answer" value={answer.value} />
######          < button
######             onClick={(event) => {
######               event.preventDefault();
######              setAnswers((pokemon) =>
######                 pokemon.filter((element) => element !== answer)
######               );
######             }}
######           >
######             Delete
######           < /button>
######         < /div>
######       ))}
###### above one works ok, but below one does not work
###### cannot read map of undefined
######     {answers.map((answer, index) => (
######        < div key={index}>
######          < input type="checkbox" checked={answer.correctedAnswer} />
######          < input placeholder="answer" value={answer.value} />
######          < button
######             onClick={(event) => {
######               event.preventDefault();
######              setAnswers((pokemon) => {
######                 pokemon.filter((element) => element !== answer);
######                 };
######               );
######             }}
######           >
######             Delete
######           < /button>
######         < /div>
######       ))}
