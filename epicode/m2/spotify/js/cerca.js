let input=document.querySelector(".cerca");
let contenitore=document.querySelector(".contenitore");
let tabella = document.getElementById("tabella-body");
let mainC=document.querySelector(".mainC");
let i=1;
async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
  }

  input.addEventListener("keyup", function(){
    search();
  })

  function search(){
    let stringa=input.value;
    mainC.innerHTML="";
    loadJSON(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${stringa}`).then(
        (data)=>{
            console.log(data);
            tabella.innerHTML="";
            for(let canzone of data.data){
              creaCanzone(canzone);
              i++;
            }
            i=1;
        }
    )


  }
  function creaCanzone(data){
    const html=`<tr>
    <td class="d-none d-md-inline index mt-1" scope="row">${i}</td>
    <td class="titolo">${data.title}</td>
    <td class="listaId" >${data.rank} </td>
    <td class="d-md-none"><div class="dropdown d-inline"></td>
    <td class="d-md-none"><button class="btn text-light fs-2 " type="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="bi bi-three-dots"></i>
    </button>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div></td>
    <td class="d-none d-md-inline" colspan="2">${convertiInMinuti(
      data.duration
    )}</td >
    
</tr>`
tabella.insertAdjacentHTML("beforeend", html);

  }




  function convertiInMinuti(durata) {
    let minuti = Math.floor(durata / 60);
    let secondi = durata - minuti * 60;
    if (secondi < 10) {
      return minuti + ":0" + secondi;
    } else {
      return minuti + ":" + secondi;
    }
  }

