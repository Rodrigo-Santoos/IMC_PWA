if ("serviceWorker" in navigator){
        window.addEventListener('load' , () => {
            navigator.serviceWorker.register('/sw.js')
            .then((reg) => {
                console.log('Registrando nosso primeiro sevices worker',reg);
            }).catch((err) => {
                console.log('Algo errado aconteceu',err);
            });
    });
}