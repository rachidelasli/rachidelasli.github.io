
<?php
     $con = mysqli_connect("localhost","root","","my");
	 if(!$con){ die('not connected');}
	 else{echo "connected \n";}
	 $table = mysqli_query($con,"select * from user order by id_user");

	 if(isset($_POST['submit'])){
	 	mysqli_query($con,"insert into user values(null,'".$_POST["nom"]."','".$_POST["pwd"]."')");
	 	header('location: index.php');
	 }

if(isset($_GET["del"])){
    mysqli_query($con,"delete from user where id_user = " .$_GET["del"] );

    header('location: index.php');

}

	 ?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

        table , th , td {
            border-collapse: collapse;
            border: deeppink 2px solid;
            text-align: center;
            font-size: 25px;
            padding: 15px;
        }
        table {
            width: 30%;
        }
        th{
            background: black;
            color: #fff;
        }

        tbody{
            background:#ccc ;
        }
        tfoot{
            background:#aaa ;
        }


        tfoot tr td input{
            padding: 5px;
            color:darkblue;
            font-size: 18px;
        }

        #msg {color:red;font-size: 18px;}

    </style>


</head>
<body>
<form method="post" action="" id="frm" onsubmit="return validate();">
    <table >
        <thead>
        <tr>
            <th>id</th>
            <th>nom</th>
            <th>pwd</th>
            <th>actions</th>

        </tr>
        </thead>

        <?php
        while($row=mysqli_fetch_assoc($table)){
            ?>
            <tbody>
            <tr>
                <td> <?php echo $row['id_user'] ?> </td>
                <td> <?php echo $row['nom_user'] ?> </td>
                <td> <?php echo $row['pass_user'] ?> </td>
                <td> <a href="index.php?del=<?php echo $row['id_user'] ?>"> delete </a> </td>
            </tr>
            </tbody>

        <?php } ?>

        <tfoot>

        <tr>
            <td><input type="submit" name="submit" value="Ajouter" id="btn" > </td>
            <td>  <input type="text" name="nom"  id="txt_nom"></td>
            <td> <input type="password" name="pwd" id="txt_pwd"> </td>
            <td> <div id="msg"></div> </td>
        </tr>

        </tfoot>
    </table>
</form>

<script type="text/javascript" >
    function validate() {
        var txtN = document.forms['frm']['txt_nom'];
        var txtP = document.forms['frm']['txt_pwd'];
        var msg = document.getElementById('msg');
        if(txtN.value==""){
            txtN.style.border="4px red solid";
            msg.innerHTML="nom required";
            txtN.focus();
            return false
        }
        if(txtP.value==""){
            txtP.style.border="4px red solid";
            txtP.focus();
            msg.innerHTML="mot de pass required";
            return false
        }

        if(txtP.value.length < 5){
            txtP.style.border="4px red solid";
            txtP.focus();
            msg.innerHTML="mot de pass must be greater than 5 characters";
            return false
        }
    }
</script>
</body>
</html>










