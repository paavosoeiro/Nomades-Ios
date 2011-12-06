<?php
  require_once 'mail/class.phpmailer.php';
  
  class Email {
  
    private var $mail;
    private var $emailRemetente;
  
    function __construct($host, $emailRementente){
      $this->mail = new PHPMailer();
      $this->mail->IsSMTP();
      $this->mail->Host = $host;
      $this->mail->SetLanguage('br');
      $this->emailRemetente = $emailRemetente;
    }
  
    public function sendEmail($msg, $nome){
      $this->mail->SetFrom($this->emailRemetente, $nome);
      $this->mail->MsgHTML($msg);
      
      return $this->mail->Send();
    }
    
    public function setDestinatario($destinatario){
      $this->mail->AddAddress($destinatario);
    }
    
    public function setAuth($username, $senha){
      $this->mail->Username   = $username;
      $this->mail->Password   = $senha;
    }
  
  }

}

?>
