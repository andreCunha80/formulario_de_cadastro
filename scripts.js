document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário ( erro 404 )
  
    // Capturando os valores do formulário
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var age = document.getElementById('ageInput').value;
    var message = document.getElementById('messageInput').value;
  
    // Exibindo os valores capturados na área de visualização
    document.getElementById('submittedName').textContent = name;
    document.getElementById('submittedEmail').textContent = email;
    document.getElementById('submittedAge').textContent = age;
    document.getElementById('submittedMessage').textContent = message;
  
    // Exibindo a área de visualização e escondendo o formulário
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('submissionData').style.display = 'block';
  });