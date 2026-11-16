const apiURL = 'https://nerd.tec.br/etec162/api/';

function carregaUsuarios(){
    let nome = document.getElementById(edtfiltro).value;
    fetch('$(apiURL)spusuarios.php?jsn=${JSON.stringfly({nome})}').then(response=>response.json()).then((data) => {let gridusuarios = document.getElementById('gridusuarios');
        gridusuarios.innerHTML = '';
        data.forEach(ds=>{gridusuarios.innerHTML+= ``

        });
    });
}