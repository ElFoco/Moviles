const registerUsers=[];
var container = document.getElementById('usersCards');
var id=0;

function Register()
{
    email = document.getElementById('inputEmail').value;
    tel = document.getElementById('inputTelefono').value;
    age = document.getElementById('inputEdad').value;
    points = document.getElementById('inputPuntos').value;
    state = document.getElementById('inputSelect').value;
    save = document.getElementById('cb1').checked;

    newUser={id,email,tel,age,points,state,save};
    RegisterFor(newUser);
    mostrar();
}

function RegisterFor(user)
{
    if(user.save==true)
    {
        registerUsers.push(user);
        id+=1;
    }
    else
    {
        alert('Usuario '+user.email+' ya está registrado.');
    }
}

function mostrar()
{
    container.innerHTML="";
    registerUsers.forEach(user =>
        {
            const content ='<div class="p-2"><div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Email: '+user.email+'</h5><h6 class="card-subtitle mb-2 text-muted" id="p2">Télefono: '+user.tel+'</h6><p class="card-text" id="p3">Edad: '+user.age+'</p><p class="card-text" id="p3">Puntos: '+user.points+'</p><p class="card-text" id="p3">Estado: '+user.state+'<br><button type="button" class="btn btn-danger text-cemter" onclick="Borrar('+user.id+')">Borrar</button></div></div></div>'
            container.innerHTML+=content;
        });
}

function Borrar(userId)
{
    var x=0;
    registerUsers.forEach(user =>
        {
            if(user.id==userId)
            {
                registerUsers.splice(x,1);
            }
            x+=1;
        });
    mostrar();
}