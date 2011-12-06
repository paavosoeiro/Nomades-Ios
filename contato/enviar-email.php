<?php

  require 'Email.class.php';
  
  $host = 'HOST DE CHRIS';
  $remetente = 'REMETENTE DE CHRIS';
  
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $msg = $_POST['mensagem'];
  
  $html = "<p>De: ".$nome." <".$email."></p>";
  $html .= "<p>".$msg."</p>";
  
  
  $email = new Email($host, $remetente);
  $email->setDestinatario($remetente);
  if($email->sendEmail($html, 'Contato')){
    echo 'Mensagem enviada com sucesso!';
  }else{
    echo 'Nao foi possivel enviar a mensagem';
  }
?>
