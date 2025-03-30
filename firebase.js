


     // Firebase Realtime Database URL (replace with your database URL)
     const databaseURL = "https://fastnet-33ee6-default-rtdb.firebaseio.com/users.json";

     // Form submission handler
     document.getElementById('submitBtn').addEventListener('click', async (e) => {
        e.preventDefault(); //Prevent the default form submission
        const message = document.getElementById('message').value;
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const subject = document.getElementById('subject').value;
         // Retrieve selectedPackages from localStorage
const selectedPackages = JSON.parse(localStorage.getItem('selectedPackages')) || [];
console.log("Retrieved Selected Packages:", selectedPackages);

         const data = {
            contactInfo: {
                message,
                name,
                email,
                subject
            },
            selectedPackages
        };

         console.log("Data being sent to Firebase:",data);

         try {
             const response = await fetch(databaseURL, {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify(data)
             });

             if (response.ok) {
                alert('Data submitted successfully to Firebase!');
                console.log('Data sent to Firebase:', data);
    
                // Clear the form and reset selectedPackages
                document.getElementById('contactForm').reset();
                localStorage.removeItem('selectedPackages'); // Clear localStorage
            } else {
                alert('Failed to submit data to Firebase.');
                console.error('Response status:', response.status);
                const errorText = await response.text();
                console.error('Response body:', errorText);
            }
        } catch (error) {
            console.error('Error submitting data to Firebase:', error);
            alert('Failed to submit data to Firebase.');
        }
     });

