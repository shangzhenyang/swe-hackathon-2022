(
    ()=>{
        let isSignupPage=false
    document.getElementById("primary-alt-option").onclick=function(){
        isSignupPage=!isSignupPage
        if(isSignupPage){
            this.innerText="I have an account"
            document.getElementById("submit-btn").value="Sign Up"
            document.getElementById("confirm-password").classList.remove("hidden")
        }
        else{
            this.innerText="Sign Up"
            document.getElementById("submit-btn").value="Login"
            document.getElementById("confirm-password").classList.add("hidden")
            }
        }
    }
)
()