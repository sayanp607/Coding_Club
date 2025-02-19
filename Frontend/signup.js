
        function previewProfilePhoto(event) {
            const profilePreview = document.getElementById("profile-preview");
            const profileText = document.getElementById("profile-text");
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    profilePreview.src = reader.result;
                    profileText.style.display = "none"; // Hide text when image is uploaded
                };
                reader.readAsDataURL(file);
            }
        }
        function previewProfilePhoto(event) {
            const profilePreview = document.getElementById("profile-preview");
            const profileText = document.getElementById("profile-text");
            const file = event.target.files[0];
            
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePreview.src = e.target.result;
                    profilePreview.style.display = "block";
                    profileText.style.display = "none";
                };
                reader.readAsDataURL(file);
            }
        }
        
        function signup() {
            const name = document.getElementById("signup-name").value.trim();
            const email = document.getElementById("signup-email").value.trim();
            const password = document.getElementById("signup-password").value.trim();
            const degree = document.getElementById("signup-degree").value.trim();
            const skills = document.getElementById("signup-skills").value.trim();
            const phone = document.getElementById("signup-phone").value.trim();
            const address = document.getElementById("signup-address").value.trim();
            const profilePhoto = document.getElementById("profile-preview").src || "";
            
            const message = document.getElementById("signup-message");
            
            if (!name || !email || !password || !degree || !skills || !phone || !address) {
                message.innerText = "All fields are required!";
                message.style.color = "red";
                return;
            }
            
            if (!validateEmail(email)) {
                message.innerText = "Invalid email format!";
                message.style.color = "red";
                return;
            }
            
            if (password.length < 6) {
                message.innerText = "Password must be at least 6 characters!";
                message.style.color = "red";
                return;
            }
            
            if (!/^[0-9]{10}$/.test(phone)) {
                message.innerText = "Invalid phone number!";
                message.style.color = "red";
                return;
            }
            
            const userData = {
                name,
                email,
                password,
                degree,
                skills: skills.split(",").map(skill => skill.trim()),
                phone,
                address,
                profilePhoto
            };
            
            // Save user data to localStorage (temporary storage)
            localStorage.setItem("user", JSON.stringify(userData));
            message.innerText = "Signup successful! Redirecting to login...";
            message.style.color = "green";
            
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }
        
        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(email);
        }
        