document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    const resultCard = document.querySelector('#results');

    resultCard.style.display = "none"
    //show loader

    document.getElementById('loading').style.display = "block";

    setTimeout(calculateResults, 1000);


    e.preventDefault()
});


function calculateResults(e){


    const amount = document.getElementById("amount");

    const interest = document.getElementById("interest");

    const years = document.getElementById("years");

    const monthlyPayment = document.getElementById("monthly-payment");

    const totalPayment = document.getElementById("total-payment");
    
    const totalinterest = document.getElementById("total-interest");




    const principal = parseFloat(amount.value);

    const calculatedinterest = parseFloat(interest.value)/100/12;

    const calculatedPayments = parseFloat(years.value) * 12;

    //compute monthly

    const x = Math.pow(1 + calculatedinterest, calculatedPayments);
    
    const monthly = (principal*x*calculatedinterest)/(x-1);


    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalinterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
        const resultCard = document.querySelector('#results').style.display = "block"
        document.getElementById('loading').style.display = "none";
        console.log("Calculating")
    } else {
        document.getElementById('loading').style.display = "none";

        showError('Please Check Your Numbers')
    }








}





//show Error

function showError(error){
    const errorDIv = document.createElement('div');
    const card = document.querySelector('.card');
    
    const heading = document.querySelector('.heading');


    errorDIv.className = 'alert alert-danger animated fadeInUp';

    errorDIv.appendChild(document.createTextNode(error))

    card.insertBefore(errorDIv, heading);

    //clear error after 3 secondds
    setTimeout(clear, 2000);

    function clear(){
        document.querySelector('.alert').remove()
    }

}


//About function




function openAbout(){
    document.querySelector('#homeLabel').className = "nav-item"
    document.querySelector('#aboutLabel').className = "nav-item active"
    const pain = document.querySelector('.card-body');
    const aboutPage = '<div class="animated fadeIn"><h2>About</h2><p style="font-size:1em;">EMiCal is a simple Progressive Web App made entirely from front-end Javascript and is used to get EMI details of total payments to be done at specified interest for specific years for a Loan</p><img class="rounded-circle img-fluid" style="height:74px;width: 75px;" src="/vk.jpg" alt=""><a href="https://www.linkedin.com/in/vishal-kumar-4b805b164"style="margin:1em">Vishal Kumar | Owner & Creator</a></div>';

    pain.innerHTML = aboutPage
};










