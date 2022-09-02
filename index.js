document.addEventListener('DOMContentLoaded', () => {
    let formInput = document.getElementById("form1")
    formInput.addEventListener("submit", function (e) {
        e.preventDefault()

        addDonor()
        
        
       
        
        formInput.reset() 
       
});

   
        
        
    function addDonor() {
        const hospitalid = document.getElementById("hospitalId")
        const test = document.createElement('p');
        test.textContent = "Donation procedures were done at: "
        test.style.fontWeight = "900";
    
        const title = document.createElement('h2');
        const location = document.createElement('h3')
        const address = document.createElement('h3');
       
        
        fetch(`http://localhost:3000/hospitals/${hospitalid.value}`)
        .then(response => response.json())
            .then(data => {
        
            
              
                title.innerText = data.title;

                address.innerText = data.Address;
               
                location.innerText = data.location;
               
               

                });
        
        
        const fullName = document.getElementById("fullname").value
        const bloodTypeRadio = document.querySelector('input[name="bloodType"]:checked').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const occupation = document.getElementById("occupation").value
        const phonenumber = document.getElementById("phonenumber").value
        const email = document.getElementById("email").value
        const date = document.getElementById("date").value
        const address2 = document.getElementById("address2").value
        const weight = document.getElementById("weight").value
        const pulse = document.getElementById("pulse").value
        const decision = document.querySelector('input[name="answer"]:checked').value;
        const date2 = document.getElementById("date2").value;


        alert(`Thank you for voluntering to donate blood ${fullName}.Your information has been registered successfully.`)

        

        const container = document.createElement('div')
        container.setAttribute('id', 'container')
        
        const p1 = document.createElement('p')
        p1.textContent = `Full Name: ${fullName}`
        p1.style.fontWeight = "900";

        const p2 = document.createElement('p')
        p2.textContent = `Blood Type: ${bloodTypeRadio}`
        p2.style.fontWeight = "900";

        const p3 = document.createElement('p')
        p3.textContent = `Gender: ${gender}`
        p3.style.fontWeight = "900";

        const p4 = document.createElement('p')
        p4.textContent = `Occupation: ${occupation}`
        p4.style.fontWeight = "900";

        const p5 = document.createElement('p')
        p5.textContent = `Phone Number: ${phonenumber}`
        p5.style.fontWeight = "900";

        const p6 = document.createElement('p')
        p6.textContent = `Email: ${email}`
        p6.style.fontWeight = "900";

        const p7 = document.createElement('p')
        p7.textContent = `Date of Birth: ${date}`
        p7.style.fontWeight = "900";

        const p8 = document.createElement('p')
        p8.textContent = `Address: ${address2}`
        p8.style.fontWeight = "900";

        const p9 = document.createElement('p')
        p9.textContent = `Weight: ${weight}`
        p9.style.fontWeight = "900";

        const pten = document.createElement('p')
        pten.textContent = `Pulse: ${pulse}`
        pten.style.fontWeight = "900";

        const pelleven = document.createElement('p')
        pelleven.textContent = `Donated Before: ${decision}`
        pelleven.style.fontWeight = "900";

        const ptwelve = document.createElement('p')
        ptwelve.textContent = `Date Of initial Donation: ${date2}`
        ptwelve.style.fontWeight = "900";


        container.append(test,title,location,address,p1,p2,p3,p4,p5,p6,p7,p8,p9,pten,pelleven,ptwelve)

        
            const myDiv = document.getElementById("donors")
            myDiv.append(container)
        

        

        }
        
    
        


        
    
    })
