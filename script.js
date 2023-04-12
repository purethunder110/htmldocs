var auth= {
    "name":"admin",
    "pass":"1234",
    "account_no":"124589",
    "account_name":"Aniket Yadav",
    "acc_type":"Savings",
    "amount":"6258",
    "CC_no":"1258 6987 1447 7411"
};

function setcookies(form_a){
    var name=form_a[0].value;
    var pass=form_a[1].value;
    if (name==auth.name)
    {
        if(pass==auth.pass)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }

}

function check(form)
{
    var t=setcookies(form);
    if (t==true)
    {
        window.location.href="http://localhost/bank_bal.html";
    }
    else
    {
        window.location.href="http://localhost/error.html";
    }
    return false;
}