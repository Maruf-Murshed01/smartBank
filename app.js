//before function full script
<script>
        // login button event handler
        const logInBtn = document.getElementById("logIn");
        logInBtn.addEventListener("click", function(){
            const logInArea = document.getElementById("login-area")
            logInArea.style.display = "none"
            const transactionArea = document.getElementById("transaction-area")
            transactionArea.style.display = "block"
        })
        // deposit button event handler
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            const depositAmount = document.getElementById("depositAmount").value 
            const depositnumber = parseFloat(depositAmount)

            const currentDeposit = document.getElementById("currentDeposit").innerText
            const currentDepositNumber = parseFloat(currentDeposit)
            const totalDeposit = depositnumber + currentDepositNumber
            document.getElementById("currentDeposit").innerText = totalDeposit

            const currentBalance = document.getElementById("currentBalance").innerText
            const currentBalanceNumber = parseFloat(currentBalance)
            const totalBalance = depositnumber + currentBalanceNumber
            document.getElementById("currentBalance").innerText = totalBalance

            document.getElementById("depositAmount").value = ""



        })
    </script>