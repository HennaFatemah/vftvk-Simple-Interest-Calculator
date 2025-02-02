// function that reads the value of the range slider and displays it the <span>adjacent to the slider.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{

    //validation for prinipal and focus set
    p = document.getElementById("principal").value;
    if (p <= 0){
        alert("Enter a positive number");
        return document.getElementById("principal").focus();
    }

    // variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // reference to the element named 'result' and it's inner html property set with string interpolation and numbers highlighted
    document.getElementById("result").innerHTML=`If you deposit <mark>${principal}</mark>,\<br\>at an interest rate of <mark>${rate}</mark>%\<br\>You will receive an amount of <mark>${interest}</mark>,\<br\>in the year <mark>${year}</mark>\<br\>`
    
}

function setGradient() {
    var css = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");

	body.style.background = 
	`linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
        