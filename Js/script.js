// Fonctionnalité principale d'écoute.

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  // Désactivation du rechargement de la page.
  e.preventDefault();

  const enteredCommentUserData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    message: document.getElementById("message").value,
  };

  // Vérification que tous les champs ne soient pas vides.
  if (
    enteredCommentUserData.firstName === "" ||
    enteredCommentUserData.lastName === "" ||
    enteredCommentUserData.message === ""
  ) {
    // Si oui, affichement du message d'erreur HTML.
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }

  // Sinon, ajout à la page des nouveaux commentaires avec les noms et prénoms des utilisateurs.
  else {
    showNewComment();

    // Dissimulation du message d'erreur (si affiché).
    let errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "none";

    // Réinitialisation des formulaires. //
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("message").value = "";
  }
});

// Fonctionnalité d'ajout des commentaires.
function showNewComment() {
  // Récupération des données des formulaires.
  const enteredCommentUserData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    message: document.getElementById("message").value,
  };

  // Clonage d'un commentaire existant.
  let commentList = document.getElementById("commentList");
  let commentTemplate = document.getElementById("commentTemplate");
  let newComment = commentTemplate.cloneNode(true);

  // Mise à jour du contenu du commentaire cloné.
  newComment.querySelector("h3").textContent =
    enteredCommentUserData.firstName + " " + enteredCommentUserData.lastName;
  newComment.querySelector("p").textContent = enteredCommentUserData.message;

  // Ajout du nouveau commentaire à la liste de commentaires existants.
  commentList.appendChild(newComment);
}
