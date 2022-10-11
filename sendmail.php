<?php
    use phpmailer\PHPMailer;

    function sendmail(){
        $name = "iTour SanPablo";
        $to = "naigmico07@gmail.com";
        $subject = "Suggestion or Feedback";
        $body = "hello";
        $from = "gianmico07@gmail.com";
        $password = "Kelly@2007";

        require_once "/phpmailer/PHPMailer.php";
        require_once "/phpmailer/SMTP.php";
        require_once "/Exception.php";
        $mail = new PHPMailer();

        $mail->isSMTP();
        // $mail->SMTPDebug = 3;
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Username = $from;
        $mail->Password = $password;
        $mail->Port = 587;
        $mail->SMTPSecure = "tls";
        $mail->smtpConnect([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
            ]);

            $mail->isHTML(true);
            $mail->setFrom($from,$name);
            $mail->addAddress($to);
            $mail->Subject = ("$subject");
            $mail->Body = $body;
            if ($mail->send()){
                echo "Email is sent!";
            } else {
                echo "Error!" .$mail->ErrorInfo;
            }
    }
    sendmail();
?>