$(document).ready(function() {
    const myUser = "rodrigopenafurt";

    $('.profile-link').click(function() {
        $.ajax({
            url: `https://api.github.com/users/${myUser}`
        })
        .then(function(data) {
            $(".profile-avatar").attr("src", data.avatar_url);
            $("#repositorio").text(data.public_repos);
            $("#seguidores").text(data.followers);
            $("#seguindo").text(data.following);
            $(".profile-name").text(data.name || "Nome");
            $(".profile-username").text(data.login || "Usuário");
        })
        .catch(function(error) {
            console.error("Erro ao obter dados do usuário do GitHub:", error);
        })
    });
});



  

 