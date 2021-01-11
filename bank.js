class Bank {
  static getAccDetails = () => {
    var accDetails = {
      userone: {
        accno: 1000,
        balance: 10000,
        username: "userone",
        password: "testuser",
      },
      usertwo: {
        accno: 1001,
        balance: 15000,
        username: "usertwo",
        password: "testuser1",
      },
      userthree: {
        accno: 1000,
        balance: 20000,
        username: "userthree",
        password: "testuser2",
      },
    };
    return accDetails;
  };

  static userAuthenticate = (usr, pwd) => {
    var usr = document.querySelector("#usr").value;
    var pwd = document.querySelector("#pwd").value;
    var dataSet = Bank.getAccDetails();

    if (usr in dataSet) {
      if (dataSet[usr].password == pwd) {
        return 1;
        // login success
      } else {
        return 0;
        // invalid password
      }
    } else {
      return -1;
      // invalid user name
    }
  };
  static login = () => {
    var usr = document.querySelector("#usr").value;
    var pwd = document.querySelector("#pwd").value;
    let user = Bank.userAuthenticate(usr, pwd);
    if (user == 1) {
      window.open("home.html");
    } else if (user == 0) {
      alert("invalid password");
    } else if (user == -1) {
      alert("no user exist");
    }
    //     var dataSet=Bank.getAccDetails();

    //     if(usr in dataSet){
    //         if(dataSet[usr].password==pwd){
    //             window.open("home.html")
    //         }
    //         else{
    //             alert("invalid password")
    //         }
    //     }
    //     else{
    //         let ulab=document.querySelector("#ulabel")
    //         ulab.textContent="invalid username"
    //         ulab.style.color="red"
    //         alert("no user exist")
    //     }
  };
  static deposite = () => {
    var usr = document.querySelector("#usr").value;
    var pwd = document.querySelector("#pwd").value;
    var amt = Number(document.querySelector("#amnt").value);
    var dataSet=Bank.getAccDetails();
    
    let user = Bank.userAuthenticate(usr, pwd);
    if (user == 1) {
      dataSet[usr].balance += amt;
      alert(
        "your account credited with " +
          amt +
          " , ur cuurent balence is " +
          dataSet[usr].balance
      );
    } else if (user == 0) {
      alert("invalid password");
    } else if (user == -1) {
      alert("no user exist");
    }
    // var dataSet=Bank.getAccDetails();

    // if(usr in dataSet){
    //     if(dataSet[usr].password==pwd){
    //         dataSet[usr].balance+=amt
    //         alert("your account credited with "+amt+" , ur cuurent balence is "+dataSet[usr].balance)
    //     }
    //     else{
    //         alert("invalid password")
    //     }
    // }
    // else{
    //     alert("user not exist")
    // }
  };

  static withdraw = () => {
    var usr = document.querySelector("#usr").value;
    var pwd = document.querySelector("#pwd").value;
    var amt = Number(document.querySelector("#amnt").value);
    var dataSet=Bank.getAccDetails();
    let user = Bank.userAuthenticate(usr, pwd);
    if (user == 1) {
      if (dataSet[usr].balance >= amt) {
        dataSet[usr].balance -= amt;
        alert(
          "your account debited with " +
            amt +
            " , ur cuurent balence is " +
            dataSet[usr].balance
        );
      } else if (user == 0) {
        alert("invalid password");
      } else if (user == -1) {
        alert("no user exist");
      }

      // var dataSet = Bank.getAccDetails();
      // if (usr in dataSet) {
      //   if (dataSet[usr].password == pwd) {
      //     if (dataSet[usr].balance >= amt) {
      //       dataSet[usr].balance -= amt;
      //       alert(
      //         "your account debited with " +
      //           amt +
      //           " , ur cuurent balence is " +
      //           dataSet[usr].balance
      //       );
      //     } else {
      //       alert("insufficient fund");
      //     }
      //   }
    }
  };
}
