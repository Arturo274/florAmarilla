onload = () =>{
const audio = document.getElementById("miAudio");

    // Al hacer clic en cualquier parte de la pantalla
    document.body.addEventListener("click", () => {
      audio.play().catch(err => {
        console.log("Error al reproducir: ", err);
      });
    });
        document.body.classList.remove("container");

};
